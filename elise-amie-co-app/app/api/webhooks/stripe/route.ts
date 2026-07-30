import { NextResponse } from "next/server";
import Stripe from "stripe";
import { supabaseAdmin } from "../../../../lib/supabaseAdmin";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature." },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error("Stripe webhook signature error:", error);

    return NextResponse.json(
      { error: "Invalid webhook signature." },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status === "paid") {
      const productId = session.metadata?.productId;

      if (!productId) {
        console.error("Stripe session has no productId.");

        return NextResponse.json(
          { error: "Missing product ID." },
          { status: 400 }
        );
      }

      const { error } = await supabaseAdmin
        .from("products")
        .update({ SOLD: true })
        .eq("products", Number(productId));

      if (error) {
        console.error("Unable to mark product sold:", error);

        return NextResponse.json(
          { error: "Unable to mark product sold." },
          { status: 500 }
        );
      }

      console.log(`Product ${productId} marked SOLD.`);
    }
  }

  return NextResponse.json({ received: true });
}