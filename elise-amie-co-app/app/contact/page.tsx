import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#2B2B2B]">

      <div className="bg-[#E8C8D0] py-3 text-center text-sm font-medium tracking-[0.15em] text-[#2B2B2B]">
        Free UK Delivery on Orders Over £50
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-8">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.2em] text-[#B87989] transition hover:text-[#2B2B2B]"
        >
          ← Home
        </Link>
      </div>

      <section className="px-6 pt-14 text-center">
        <h1 className="text-5xl font-light tracking-[0.2em]">
          Contact Amie Co
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-neutral-600">
          We'd love to hear from you.
        </p>
        <div className="mx-auto mt-12 max-w-xl">
  <p className="leading-8 text-neutral-600">
    Have a question about a piece, an order, or anything else?
    <br />
    Get in touch and we'll get back to you as soon as we can.
  </p>

  <div className="mt-12">
  <img
    src="/logo.png"
    alt="Amie Co"
    className="mx-auto w-56"
  />
</div>
</div>
      </section>

    </main>
  );
}