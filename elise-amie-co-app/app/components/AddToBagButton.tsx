"use client";

import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  price: number;
  image_url: string;
};

export default function AddToBagButton({
  product,
}: {
  product: Product;
}) {
  const router = useRouter();

  function handleAddToBag() {
    localStorage.setItem("amie-co-bag", JSON.stringify(product));
    router.push("/bag");
  }

  return (
    <button
      type="button"
      onClick={handleAddToBag}
      className="mt-10 w-full rounded-full bg-[#E8C8D0] px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#2B2B2B] transition duration-300 hover:bg-[#D8A7B1]"
    >
      Add to Bag
    </button>
  );
}