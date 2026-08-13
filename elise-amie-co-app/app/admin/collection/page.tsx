import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import SoldButton from "./SoldButton";
import DeleteButton from "./DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminCollectionPage() {
  const { data: products, error } = await supabase
    .from("products")
.select("*")
.eq("SOLD", false)
.order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading products:", error);
  }

  return (
    <main className="min-h-screen bg-[#F8F6F2] px-6 py-16 text-[#2B2B2B]">
      <div className="mx-auto max-w-4xl">

        <Link
          href="/admin"
          className="text-xs uppercase tracking-[0.2em] text-[#B87989]"
        >
          ← Back Office
        </Link>

        <div className="mt-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C48A99]">
            Amie Co
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-[0.15em]">
            Manage Collection
          </h1>

          <p className="mt-4 text-sm text-neutral-600">
            View and manage your current listings.
          </p>
          
          <div className="mt-12 space-y-6">
  {products?.map((product) => (
    <div
      key={product.products}
      className="flex items-center gap-6 rounded-2xl border border-[#E7E2DC] bg-white p-5"
    >
      <img
        src={String(product.image_url).trim()}
        alt={product.name}
        className="h-28 w-24 rounded-xl object-cover"
      />

      <div className="flex-1 text-left">
        <h2 className="text-lg font-medium text-[#2B2B2B]">
          {product.name}
        </h2>

        <p className="mt-1 text-sm text-[#2B2B2B]">
          £{product.price}
        </p>

        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-neutral-600">
          Size: {product.size}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {product.SOLD ? (
          <span className="rounded-full bg-[#F3ECE8] px-5 py-3 text-center text-xs uppercase tracking-[0.15em] text-[#B87989]">
            Sold
          </span>
        ) : (
          <SoldButton productId={product.products} />
        )}

        <DeleteButton
          productId={product.products}
          productName={product.name}
        />
      </div>
    </div>
   ))}
</div>

        </div>
      </div>
    </main>
  );
}