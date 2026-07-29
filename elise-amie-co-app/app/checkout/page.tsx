import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] px-6 py-16 text-[#2B2B2B]">
      
      <Link
        href="/bag"
        className="pl-40 text-xs uppercase tracking-[0.2em] text-[#B87989] transition hover:text-[#2B2B2B]"
      >
        ← Back to Bag
      </Link>

      <div className="mx-auto max-w-xl">
        <div className="mt-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C48A99]">
            Amie Co
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-[0.15em]">
            Checkout
          </h1>

          <p className="mt-6 text-lg text-neutral-600">
            You're almost there.
          </p>
        </div>

       <form
  action="/payment"
  method="get"
  className="mt-14 space-y-12"
>
          
          <section>
            <h2 className="text-sm uppercase tracking-[0.25em] text-[#B87989]">
              Contact
            </h2>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-[0.15em] text-neutral-600"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-[#E7E2DC] bg-white px-4 py-3 outline-none transition focus:border-[#C48A99]"
              />
            </div>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-[0.25em] text-[#B87989]">
              Delivery Details
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-[0.15em] text-neutral-600"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-[#E7E2DC] bg-white px-4 py-3 outline-none transition focus:border-[#C48A99]"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="text-xs uppercase tracking-[0.15em] text-neutral-600"
                >
                  Address
                </label>

                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-[#E7E2DC] bg-white px-4 py-3 outline-none transition focus:border-[#C48A99]"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="text-xs uppercase tracking-[0.15em] text-neutral-600"
                >
                  Town / City
                </label>

                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-[#E7E2DC] bg-white px-4 py-3 outline-none transition focus:border-[#C48A99]"
                />
              </div>

              <div>
                <label
                  htmlFor="postcode"
                  className="text-xs uppercase tracking-[0.15em] text-neutral-600"
                >
                  Postcode
                </label>

                <input
                  id="postcode"
                  name="postcode"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-[#E7E2DC] bg-white px-4 py-3 uppercase outline-none transition focus:border-[#C48A99]"
                />
              </div>
            </div>
          </section>

          <button
            type="submit"
            className="w-full rounded-full bg-[#E8C8D0] px-8 py-4 text-sm uppercase tracking-[0.25em] transition hover:bg-[#D8A7B1]"
          >
            Continue to Payment
          </button>

        </form>
      </div>

    </main>
  );
}