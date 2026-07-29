import { NextResponse } from "next/server";
import Stripe from "stripe";
import { supabase } from "../../../lib/supabase";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const { productId } = await request.json();

console.log("CHECKOUT PRODUCT ID:", productId);
const { data: debugProducts, error: debugError } = await supabase
  .from("products")
  .select("products, name");

console.log("SUPABASE PRODUCTS:", debugProducts);
console.log("SUPABASE ERROR:", debugError);

if (!productId) {
      return NextResponse.json(
        { error: "No product selected." },
        { status: 400 }
      );
    }

    // Get the real product from Supabase.
    // We do NOT trust the price stored in the customer's browser.
    const { data: product, error } = await supabase
      .from("products")
      .select("products, name, price, image_url, sold")
.eq("products", productId)
.single();
    if (error || !product) {
      return NextResponse.json(
        { error: "Product not found." },
        { status: 404 }
      );
    }

    if (product.sold) {
      return NextResponse.json(
        { error: "Sorry, this piece has already been sold." },
        { status: 409 }
      );
    }

    const priceInPence = Math.round(Number(product.price) * 100);

    if (!Number.isInteger(priceInPence) || priceInPence <= 0) {
  return NextResponse.json(
    { error: "Invalid product price." },
    { status: 400 }
  );
}

const origin = process.env.NEXT_PUBLIC_SITE_URL!;

const session = await stripe.checkout.sessions.create({
  mode: "payment",
  line_items: [
    {
      price_data: {
        currency: "gbp",
        product_data: {
          name: product.name,
          ...(product.image_url
            ? { images: [product.image_url] }
            : {}),
        },
        unit_amount: priceInPence,
      },
      quantity: 1,
    },
  ],
  metadata: {
    productId: String(product.products),
  },
  success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
  cancel_url: `${origin}/payment`,
});
  

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL.");
    }

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    return NextResponse.json(
      { error: "Unable to start checkout." },
      { status: 500 }
    );
  }
}