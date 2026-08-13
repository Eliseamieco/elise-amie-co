import Link from "next/link";
import { supabase } from "../../lib/supabase";
export default async function CollectionPage() {
  const { data: products, error } = await supabase
  .from("products")
  .select("*")
  .eq("SOLD", false)
  .order("created_at", { ascending: false });

if (error) {
  console.error("Error loading collection:", error);
}
  return (
  <main className="min-h-screen bg-[#F8F6F2] text-[#2B2B2B]">
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
      <section className="px-6 pt-14 text-center">
        <h1 className="text-5xl font-light tracking-[0.2em] text-[#2B2B2B]">
          Our Collection
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-600">
          Pre-loved pieces chosen to be loved again.
        </p>

</section>


<section className="mt-16 border-t border-[#E7E2DC] px-6 pt-8">
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
   
    
{products?.map((product) => (
  <div
    key={product.products}
    className="mx-auto w-80 overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div className="overflow-hidden">
  <img
    src={String(product.image_url).trim()}
    alt={product.name}
    className="h-72 w-full object-cover object-top transition duration-300 hover:scale-105"
  />
</div>

      <div className="p-6">
        <div className="flex items-center gap-4">
  <h2 className="text-2xl font-light text-[#2B2B2B]">
    {product.name}
  </h2>
<Link
  href={`/products/${product.products}`}
  className="mt-6 inline-block text-sm uppercase tracking-[0.2em] text-[#C48A99] transition hover:text-[#B87989]"
>
  View Details →
</Link>
  
</div>

        <p className="mt-4 text-lg text-[#2B2B2B]">
          £{product.price}
        </p>

        <p className="mt-6 max-w-md leading-8 text-neutral-600">
          {product.description}
        </p>

        <Link
  href={`/products/${product.products}`}
  className="mt-6 inline-block text-sm uppercase tracking-[0.2em] text-[#C48A99] transition hover:text-[#B87989]"
>
  View Details →
</Link>
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

      </div>
    </div>
  ))}
</div>
<div className="mt-10 border-t border-[#E7E2DC] py-10 text-center">
  <img
    src="/logo.png"
    alt="Amie Co"
    className="mx-auto w-40"
  />

  <p className="mt-4 text-xs uppercase tracking-[0.25em] text-neutral-400">
    Style, Loved Again
  </p>
</div>
</section>
    </main>
  );
}