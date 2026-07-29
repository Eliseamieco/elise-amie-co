"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type BagProduct = {
  id: number;
  name: string;
  price: number;
  image_url: string;
};

export default function BagPage() {
  const [product, setProduct] = useState<BagProduct | null>(null);

  useEffect(() => {
    const savedProduct = localStorage.getItem("amie-co-bag");

    if (savedProduct) {
      setProduct(JSON.parse(savedProduct));
    }
  }, []);

  function removeFromBag() {
    localStorage.removeItem("amie-co-bag");
    setProduct(null);
  }

  return (
    <main className="min-h-screen bg-[#F8F6F2] px-6 py-16 text-[#2B2B2B]">
      <Link
        href="/"
        className="pl-40 text-xs uppercase tracking-[0.2em] text-[#B87989] transition hover:text-[#2B2B2B]"
      >
        ← Home
      </Link>

      <div className="mx-auto max-w-xl">
        <h1 className="mt-16 text-center text-5xl font-light tracking-[0.15em]">
          Your Bag
        </h1>

        {product ? (
          <>
            <section className="mt-14 rounded-2xl border border-[#E7E2DC] bg-white p-6">
              <div className="flex items-center gap-6">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="h-36 w-28 rounded-xl object-cover object-top"
                />

                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#C48A99]">
                    ♡ Your Piece
                  </p>

                  <h2 className="mt-3 text-2xl font-light">
                    {product.name}
                  </h2>

                  <p className="mt-2 text-lg text-[#B87989]">
                    £{product.price}
                  </p>

                  <button
                    type="button"
                    onClick={removeFromBag}
                    className="mt-5 text-xs uppercase tracking-[0.2em] text-neutral-400 transition hover:text-[#B87989]"
                  >
                    Remove from Bag
                  </button>
                </div>
              </div>
            </section>

            <div className="mt-10 flex items-center justify-between border-t border-[#E7E2DC] pt-8">
              <span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Subtotal
              </span>

              <span className="text-xl">
                £{product.price}
              </span>
            </div>

            <Link
              href="/checkout"
              className="mt-8 block w-full rounded-full bg-[#E8C8D0] px-8 py-4 text-center text-sm uppercase tracking-[0.2em] transition hover:bg-[#D8A7B1]"
            >
              Checkout
            </Link>
          </>
        ) : (
          <section className="mt-14 text-center">
            <p className="text-neutral-600">
              Your bag is currently empty.
            </p>

            <Link
              href="/collection"
              className="mt-8 inline-block rounded-full bg-[#E8C8D0] px-8 py-4 text-xs uppercase tracking-[0.2em] transition hover:bg-[#D8A7B1]"
            >
              Shop Collection
            </Link>
          </section>
        )}
      </div>
    </main>
  );
}