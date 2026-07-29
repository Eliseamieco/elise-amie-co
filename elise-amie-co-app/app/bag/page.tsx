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

  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#2B2B2B]">
      <div className="bg-[#E8C8D0] py-3 text-center text-sm font-medium tracking-[0.15em]">
        Free UK Delivery on Orders Over £50
      </div>

      <div className="mx-auto max-w-4xl px-6 py-8">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.2em] text-[#B87989] transition hover:text-[#2B2B2B]"
        >
          ← Home
        </Link>

        <section className="pt-14">
          <h1 className="text-center text-5xl font-light tracking-[0.2em]">
            Your Bag
          </h1>

          {product ? (
            <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-[#E7E2DC] bg-white p-6">
              <div className="flex items-center gap-6">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="h-40 w-32 rounded-2xl object-cover object-top"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C48A99]">
                    ♡ Your Piece
                  </p>

                  <h2 className="mt-3 text-2xl font-light">
                    {product.name}
                  </h2>

                  <p className="mt-3 text-lg text-[#B87989]">
                    £{product.price}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="mt-6 text-lg text-neutral-600">
                Your bag is currently empty.
              </p>

              <Link
                href="/collection"
                className="mt-10 inline-block rounded-full bg-[#E8C8D0] px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-[#D8A7B1]"
              >
                Shop Collection
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}