import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] px-6 py-16 text-[#2B2B2B]">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#C48A99]">
          ♡ Thank You
        </p>

        <h1 className="mt-6 text-4xl font-light tracking-[0.15em]">
          Your order is confirmed.
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-600">
          This piece is now yours.
        </p>

        <p className="mt-3 text-sm leading-7 text-neutral-500">
          Thank you for giving pre-loved fashion another story.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-[#E8C8D0] px-10 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-[#D8A7B1]"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}