"use client";

import { supabase } from "../../../lib/supabase";
import { useRouter } from "next/navigation";

export default function DeleteButton({
  productId,
  productName,
}: {
  productId: number;
  productName: string;
}) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${productName}"?`
    );

    if (!confirmed) {
      return;
    }

    const { data, error } = await supabase
      .from("products")
      .delete()
      .eq("products", productId)
      .select();

    if (error) {
      alert("Could not delete item: " + error.message);
      return;
    }

    if (!data || data.length === 0) {
  alert("No product was deleted.");
  return;
}

alert("Item deleted successfully!");
router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="rounded-full border border-[#E7E2DC] px-5 py-3 text-xs uppercase tracking-[0.15em] text-[#2B2B2B] transition hover:bg-[#F3ECE8]"
    >
      Delete
    </button>
  );
}