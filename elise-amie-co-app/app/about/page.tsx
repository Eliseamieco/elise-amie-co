import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="bg-[#E8C8D0] py-3 text-center text-xs tracking-[0.2em] text-[#2B2B2B] uppercase">
        Free UK Delivery on Orders Over £50
      </div>

      <div className="px-6 pt-8">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.2em] text-[#B87989] transition hover:text-[#2B2B2B]"
        >
          ← Home
        </Link>
      </div>

      <main className="mx-auto max-w-4xl px-6 pt-12 pb-20 text-center">
        <h1 className="text-5xl font-light tracking-[0.2em] text-[#2B2B2B]">
          About Amie Co
        </h1>

        <p className="mt-16 text-xl italic leading-8 text-[#2B2B2B]">
          Beautiful things chosen to be loved again.
        </p>

        <p className="mt-12 text-lg leading-9 text-neutral-600">
          Every item has been thoughtfully chosen for its beauty, quality and
          individuality.
        </p>

        <p className="mt-12 text-lg italic text-[#2B2B2B]">
          Life is short, take it slow.
        </p>

        <p className="mt-12 text-lg leading-9 text-neutral-600">
          We hope you find something you'll love for many years to come.
        </p>

        <div className="mt-24">
          <img
            src="/logo.png"
            alt="Amie Co"
            className="mx-auto w-56"
          />
        </div>
      </main>
    </>
  );
}