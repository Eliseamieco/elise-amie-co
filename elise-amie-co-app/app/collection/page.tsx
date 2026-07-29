import Link from "next/link";
import { supabase } from "../../lib/supabase";
export default async function CollectionPage() {
  const { data: products, error } = await supabase
  .from("products")
  .select("*")
  .order("created_at", { ascending: false });

if (error) {
  console.error("Error loading collection:", error);
}
  return (
    <main>
      <div className="bg-[#E8C8D0] py-3 text-center text-sm font-medium tracking-[0.15em] text-[#2B2B2B]">
Free UK Delivery on Orders Over £50
</div>
      

<div className="mx-auto max-w-6xl px-6 pt-8">
  <Link
    href="/"
    className="text-xs uppercase tracking-[0.2em] text-[#B87989] transition hover:text-[#2B2B2B]"
  >
    ← Home
  </Link>
</div>
      <section className="text-center">
        <h1 className="text-5xl font-light tracking-[0.2em] text-[#2B2B2B]">
          Our Collection
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-600">
          Pre-loved pieces chosen to be loved again.
        </p>

        <p className="mt-10 text-lg italic text-neutral-600">
  Beautiful things are worth waiting for.
</p>
</section>


<section className="mt-20 border-t border-[#E7E2DC] pt-16">

<div className="space-y-16">
  {products?.map((product) => (
    <div
      key={product.products}
      className="flex items-start gap-10"
    >
      <div>
        <img
          src={product.image_url}
          alt={product.name}
          className="w-48 rounded-lg"
        />
      </div>

      <div>
        <div className="flex items-center gap-4">
  <h2 className="text-2xl font-light text-[#2B2B2B]">
    {product.name}
  </h2>

  {product.sold && (
    <span className="rounded-full bg-[#E8C8D0] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#2B2B2B]">
      Sold
    </span>
  )}
</div>

        <p className="mt-4 text-lg text-[#2B2B2B]">
          £{product.price}
        </p>

        <p className="mt-6 max-w-md leading-8 text-neutral-600">
          {product.description}
        </p>

        {product.sold ? (
  <Link
    href={`/products/${product.products}`}
    className="mt-6 inline-block text-sm uppercase tracking-[0.2em] text-neutral-400 transition hover:text-[#B87989]"
  >
    View Sold Piece →
  </Link>
) : (
  <Link
    href={`/products/${product.products}`}
    className="mt-6 inline-block text-sm uppercase tracking-[0.2em] text-[#C48A99] transition hover:text-[#B87989]"
  >
    View Details →
  </Link>
)}
      </div>
    </div>
  ))}
</div>
<div className="mt-24">
          <img
            src="/logo.png"
            alt="Amie Co"
            className="mx-auto w-56"
          />
        </div>
</section>
    </main>
  );
}