"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type BagProduct = {
  id: number;
  name: string;
  price: number;
  image_url: string;
};

export default function PaymentPage() {
  const [products, setProducts] = useState<BagProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedBag = localStorage.getItem("amie-co-bag");

    if (savedBag) {
      const saved = JSON.parse(savedBag);

      if (Array.isArray(saved)) {
        setProducts(saved);
      } else {
        setProducts([saved]);
      }
    }
  }, []);

  const subtotal = products.reduce(
    (total, product) => total + Number(product.price),
    0
  );

  async function handlePayment() {
    if (products.length === 0 || loading) return;

    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productIds: products.map((product) => product.id),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Unable to start checkout.");
        setLoading(false);
        return;
      }

      if (!data.url) {
        alert("Unable to start checkout.");
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Payment error:", error);
      alert("Unable to start checkout. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F8F6F2] px-6 py-16 text-[#2B2B2B]">
      <Link
        href="/checkout"
        className="pl-40 text-xs uppercase tracking-[0.2em] text-[#B87989] transition hover:text-[#2B2B2B]"
      >
        ← Back to Checkout
      </Link>

      <div className="mx-auto max-w-xl">
        <div className="mt-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C48A99]">
            Amie Co
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-[0.15em]">
            Payment
          </h1>

          <p className="mt-6 text-lg text-neutral-600">
            One last step.
          </p>
        </div>

        {products.length > 0 ? (
          <section className="mt-14">
            <div className="rounded-2xl border border-[#E7E2DC] bg-white p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-[#C48A99]">
                ♡ Your Order
              </p>

              <div className="mt-6 space-y-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-5"
                  >
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="h-32 w-24 rounded-xl object-cover object-top"
                    />

                    <div>
                      <h2 className="text-xl font-light">
                        {product.name}
                      </h2>

                      <p className="mt-2 text-lg text-[#B87989]">
                        £{product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-[#E7E2DC] pt-6">
              <div className="flex justify-between text-sm">
                <span className="uppercase tracking-[0.2em] text-neutral-500">
                  Subtotal
                </span>

                <span>£{subtotal.toFixed(2)}</span>
              </div>

              <div className="mt-4 flex justify-between text-sm">
                <span className="uppercase tracking-[0.2em] text-neutral-500">
                  Delivery
                </span>

                <span>
                  {subtotal >= 50 ? "Free" : "Calculated at payment"}
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-[#E7E2DC] pt-6">
                <span className="text-sm uppercase tracking-[0.2em]">
                  Total
                </span>

                <span className="text-2xl">
                  £{subtotal.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handlePayment}
              disabled={loading}
              className="mt-8 w-full rounded-full bg-[#E8C8D0] px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-[#D8A7B1] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Opening Secure Payment..." : "Secure Payment"}
            </button>

            <p className="mt-4 text-center text-xs tracking-[0.1em] text-neutral-400">
              Secure checkout
            </p>
          </section>
        ) : (
          <section className="mt-14 rounded-2xl border border-[#E7E2DC] bg-white p-8 text-center">
            <p className="text-sm text-neutral-600">
              Your bag is empty.
            </p>

            <Link
              href="/collection"
              className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-[#B87989]"
            >
              Shop Collection →
            </Link>
          </section>
        )}
      </div>
    </main>
  );
}