import Link from "next/link";
import { supabase } from "../../../lib/supabase";

export const dynamic = "force-dynamic";

export default async function SalesHistoryPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("SOLD", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading sales history:", error);
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
            Sales History
          </h1>

          <p className="mt-4 text-sm text-neutral-600">
            A record of pieces that have found their new homes.
          </p>
        </div>

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
                <h2 className="text-lg font-medium">
                  {product.name}
                </h2>

                <p className="mt-1 text-sm text-[#B87989]">
                  £{product.price}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-neutral-500">
  Sold{" "}
  {product.sold_at
    ? new Date(product.sold_at).toLocaleDateString("en-GB")
    : ""}
</p>
              </div>
            </div>
          ))}

          {products?.length === 0 && (
            <div className="rounded-2xl border border-[#E7E2DC] bg-white p-10 text-center">
              <p className="text-sm text-neutral-600">
                No pieces have been sold yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}