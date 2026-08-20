import Link from "next/link";
import { supabase } from "../../lib/supabase";

export const dynamic = "force-dynamic";

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

      {/* Delivery banner */}
      <div className="bg-[#E8C8D0] py-3 text-center text-sm font-medium tracking-[0.15em]">
        Free UK Delivery on Orders Over £50
      </div>

      {/* Home link */}
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.2em] text-[#B87989] transition hover:text-[#2B2B2B]"
        >
          ← Home
        </Link>
      </div>

      {/* Heading */}
      <section className="px-6 pt-14 text-center">
        <h1 className="text-5xl font-light tracking-[0.2em]">
          Our Collection
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-600">
          Pre-loved pieces chosen to be loved again.
        </p>
      </section>

      {/* Products */}
      <section className="mt-16 border-t border-[#E7E2DC] px-6 pt-10 pb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {products?.map((product) => (
            <div
              key={product.products}
              className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Product image */}
              <div className="overflow-hidden bg-[#F3ECE8]">
                <img
                  src={String(product.image_url).trim()}
                  alt={product.name}
                  className="h-80 w-full object-cover object-top transition duration-300 hover:scale-105"
                />
              </div>

              {/* Product information */}
              <div className="p-7">

                <h2 className="text-2xl font-light">
                  {product.name}
                </h2>

                <p className="mt-3 text-lg">
                  £{product.price}
                </p>

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
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E7E2DC] py-10 text-center">
        <img
          src="/logo.png"
          alt="Amie Co"
          className="mx-auto w-40"
        />

        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-neutral-400">
          Style, Loved Again
        </p>
      </footer>

    </main>
  );
}