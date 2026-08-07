import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import AddToBagButton from "../../components/AddToBagButton";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("products", id)
    .single();

  if (error || !product) {
    return <div>Product not found.</div>;
  }

if (product.SOLD) {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#2B2B2B] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <img
          src="/logo.png"
          alt="Amie Co"
          className="mx-auto mb-10 w-56"
        />

        <h1 className="text-4xl font-light tracking-[0.15em]">
          This piece has already found its new home ♡
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-600">
          Every item at Amie Co is completely one of a kind.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-600">
          Although this piece has now been sold, we're always adding beautiful
          new arrivals waiting to be loved again.
        </p>

        <Link
          href="/collection"
          className="mt-12 inline-block rounded-full bg-[#E8C8D0] px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2B2B2B] transition hover:bg-[#D8A7B1]"
        >
          Continue Shopping ♡
        </Link>
      </div>
    </main>
  );
}
  return (
    
  <main className="min-h-screen bg-[#F8F6F2] text-[#2B2B2B]">
    <div className="bg-[#E8C8D0] py-3 text-center text-sm font-medium tracking-[0.15em] text-[#2B2B2B]">
      Free UK Delivery on Orders Over £50
    </div>

    <div className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/collection"
          className="text-xs uppercase tracking-[0.2em] text-[#B87989]"
        >
          ← Back to Collection
        </Link>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-white">
            <img
              src={String(product.image_url).trim()}
              alt={product.name}
              className="w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            {product.SOLD ? (
  <p className="text-xs uppercase tracking-[0.25em] text-[#B87989]">
    Sold
  </p>
) : (
  <p className="text-xs uppercase tracking-[0.25em] text-[#C48A99]">
    ♡ Just Arrived
  </p>
)}

            <h1 className="mt-4 text-4xl font-light tracking-[0.1em]">
              {product.name}
            </h1>

            <p className="mt-6 text-2xl text-[#B87989]">
              £{product.price}
            </p>

            <div className="mt-10 border-t border-[#E7E2DC] pt-8">
              <p className="text-sm">
                <span className="font-semibold">Size:</span> {product.size}
              </p>

              <p className="mt-4 text-sm">
                <span className="font-semibold">Condition:</span>{" "}
                {product.condition}
              </p>

              <p className="mt-8 leading-7 text-neutral-600">
                {product.description}
              </p>
            </div>

{!product.SOLD && (
  <AddToBagButton
    product={{
      id: product.products,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
    }}
  />
)}

            {product.SOLD && (
              <div className="mt-10 rounded-2xl bg-[#F3ECE8] px-6 py-5 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-[#B87989]">
                  This piece has found a new home
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}