"use client";

import { supabase } from "../../../lib/supabase";
import { useRouter } from "next/navigation";

export default function SoldButton({
  productId,
}: {
  productId: number;
}) {
  const router = useRouter();

  async function handleSold() {
    const { data, error } = await supabase
      .from("products")
      .update({ SOLD: true, sold_at: new Date().toISOString() })
      .eq("products", productId)
      .select();

    if (error) {
      alert("Could not mark item as sold: " + error.message);
      return;
    }

    if (!data || data.length === 0) {
      alert("No product was updated.");
      return;
    }

    alert("Item marked as sold! Product ID: " + productId);
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleSold}
      className="rounded-full border border-[#D8A7B1] px-5 py-3 text-xs uppercase tracking-[0.15em] text-[#2B2B2B] transition hover:bg-[#E8C8D0]"
    >
      Mark as Sold
    </button>
  );
}