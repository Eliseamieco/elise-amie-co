import Link from "next/link";
import Image from "next/image";
import { supabase } from "../lib/supabase";

export default async function Home() {
  const { data: products, error } = await supabase
  .from("products")
  .select("*")
  .eq("SOLD", false)
  .order("created_at", { ascending: false });

if (error) {
  console.error("Error loading products:", error);
}
  return (
    
    <main className="min-h-screen bg-[#F8F6F2] text-[#2B2B2B]">
      
      <div className="bg-[#E8C8D0] py-2 text-center text-xs uppercase tracking-[0.25em] text-[#2B2B2B]">
  Free UK Delivery on Orders Over £50 • 
</div>
<nav className="border-b border-[#E7E2DC] bg-white">
  <div className="mx-auto max-w-6xl px-6 py-8">

   <div className="flex justify-center mb-4">
  <Image
  src="/logo.png"
  alt="Amie Co"
  width={900}
  height={280}
  priority
  className="mx-auto w-full max-w-3xl h-auto"
/>
</div>

    <p className="mt-2 text-center text-xs uppercase tracking-[0.5em] text-[#C48A99]">
      
    </p>

   <div className="mt-6 flex justify-center gap-12 text-xs uppercase tracking-[0.25em]">
  <Link href="/" className="transition hover:text-[#C48A99]">
    Home
  </Link>

 <Link href="/collection" className="transition hover:text-[#C48A99]">
  Our Collection
</Link>

  <Link href="/about" className="transition hover:text-[#C48A99]">
    About
  </Link>

  <Link href="/contact" className="transition hover:text-[#C48A99]">
    Contact
  </Link>
</div>

    </div>
    
</nav>

      <section className="flex flex-col items-center justify-center px-6 py-16 text-center">

  <p className="mt-3 text-center text-sm tracking-[0.15em] text-neutral-500">
  STYLE, LOVED AGAIN
</p>


<p className="mb-6 max-w-2xl text-lg leading-8 text-gray-600">
  Pre-loved pieces chosen to be loved again.
</p>

  <h2 className="text-4xl font-light tracking-[0.2em] text-[#2B2B2B]">
  Our Collection
</h2>



        <div className="mt-6 grid gap-8 md:grid-cols-3">

          {products?.map((product) => (
  <div
    key={product.products}
    className="overflow-hidden rounded-3xl border border-[#E7E2DC] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
  >
    <div className="overflow-hidden">
      <img
        src={String(product.image_url).trim()}
        alt={product.name}
        className="h-96 w-full object-cover object-top transition duration-500 hover:scale-105"
      />
    </div>

    <div className="p-6">
      {product.SOLD ? (
  <p className="text-xs uppercase tracking-[0.2em] text-[#B87989]">
    Sold
  </p>
) : (
  <p className="text-xs uppercase tracking-[0.2em] text-[#C48A99]">
    ♡ Just Arrived
  </p>
)}

      <h3 className="mt-3 text-xl font-medium text-[#2B2B2B]">
        {product.name}
      </h3>

      <p className="mt-2 text-lg text-[#B87989]">
        £{product.price}
      </p>

      {product.SOLD ? (
  <Link
    href={`/products/${product.products}`}
    className="mt-6 inline-block text-sm uppercase tracking-[0.2em] text-neutral-400 transition hover:text-[#B87989]"
  >
    View Sold Piece →
  </Link>
) : (
  <Link
    href={`/products/${product.products}`}
    className="mt-6 inline-block text-sm uppercase tracking-[0.2em] text-[#B87989] transition hover:text-[#C48A99]"
  >
    View Details →
  </Link>
)}
    </div>
  </div>
))}
   
        </div>
      </section>
      <footer className="mt-24 border-t border-[#E7E2DC] bg-white">
  <div className="mx-auto max-w-6xl px-6 py-12 text-center">
    <h3 className="text-lg font-light tracking-[0.15em] text-[#2B2B2B]">
      Amie Co
    </h3>

    <p className="mt-4 text-sm text-neutral-600">
      Questions about a piece? We'd love to help. ♡
    </p>

    <a
      href="mailto:hello@amieco.co.uk"
      className="mt-2 inline-block font-medium text-[#B87989] transition hover:text-[#9E6574]"
    >
      hello@amieco.co.uk
    </a>

    <p className="mt-8 text-xs uppercase tracking-[0.2em] text-neutral-400">
      © {new Date().getFullYear()} Amie Co. All rights reserved.
    </p>
  </div>
</footer>

</main>
  );
}