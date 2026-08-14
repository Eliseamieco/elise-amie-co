"use client";

import Link from "next/link";
import SignOutButton from "./SignOutButton";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] px-6 py-20 text-[#2B2B2B]">
      <div className="mx-auto max-w-xl text-center">

        <p className="text-sm uppercase tracking-[0.35em] text-[#C48A99]">
          Amie Co
        </p>

        <h1 className="mt-4 text-4xl font-light tracking-[0.15em]">
          Back Office
        </h1>

        <p className="mt-5 text-sm italic text-neutral-500">
          Simple, lovely, organised.
        </p>

        <div className="mt-14 flex flex-col gap-4">
          <Link
            href="/admin/add-item"
            className="rounded-full bg-[#E8C8D0] px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-[#D8A7B1]"
          >
            + Add Item
          </Link>

          <Link
            href="/admin/collection"
            className="rounded-full border border-[#E7E2DC] px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-white"
          >
            Current Collection
          </Link>

 <Link
  href="/admin/sales"
  className="rounded-full border border-[#E7E2DC] px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-white"
>
  Sales History
</Link>         

          <button className="rounded-full border border-[#E7E2DC] px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-white">
            Settings
          </button>
        </div>

        <SignOutButton />

      </div>
    </main>
  );
}