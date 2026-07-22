import Image from "next/image";

export default function Home() {
  return (
    
    <main className="min-h-screen bg-[#F8F6F2] text-[#2B2B2B]">
      <div className="bg-[#E8C8D0] py-2 text-center text-xs uppercase tracking-[0.25em] text-[#2B2B2B]">
  Free UK Delivery on Orders Over £50 • 
</div>
<nav className="border-b border-[#E7E2DC] bg-white">
  <div className="mx-auto max-w-6xl px-6 py-8">

   <div className="flex justify-center mb-4">
  <Image
  src="/logo.png"
  alt="Amie Co"
  width={900}
  height={280}
  priority
  className="mx-auto w-full max-w-3xl h-auto"
/>
</div>

    <p className="mt-2 text-center text-xs uppercase tracking-[0.5em] text-[#C48A99]">
      
    </p>

   <div className="mt-6 flex justify-center gap-10 text-xs uppercase tracking-[0.25em]">
      <a href="#" className="transition hover:text-[#C48A99]">Home</a>
      <a href="#" className="transition hover:text-[#C48A99]">Shop</a>
      <a href="#" className="transition hover:text-[#C48A99]">About</a>
      <a href="#" className="transition hover:text-[#C48A99]">Contact</a>
    </div>

    </div>
    
</nav>

      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">

  <p className="mt-3 text-center text-sm tracking-[0.15em] text-neutral-500">
  STYLE, LOVED AGAIN
</p>


<p className="mb-10 max-w-2xl text-lg leading-8 text-gray-600">
  Discover carefully selected pre-loved fashion that's ready for its next chapter.
</p>

  <button className="rounded-full bg-[#E8C8D0] px-10 py-4 mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#2B2B2B] transition duration-300 hover:scale-105 hover:bg-[#D8A7B1]">
  Shop Collection
</button>

<h2 className="text-3xl font-light text-center tracking-[0.2em] uppercase">
  New Arrivals
</h2>

<p className="mt-4 text-center text-neutral-600 max-w-xl mx-auto">
  A carefully selected collection of pre-loved fashion, chosen for its quality,
  style and next chapter.

  
</p>
<p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#C89AA5]">
  ♡ Just Arrived
</p>
        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-[#E7E2DC] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
  <Image
  src="/white-sequin-mini-dress.jpg"
  alt="White Sequin Cowl Mini Dress"
  width={500}
  height={700}
  className="mb-4 h-80 w-full rounded-xl object-cover object-top"
/>
  <h3 className="font-semibold">
  White Sequin Cowl Mini Dress
</h3>

<p className="text-gray-600 font-medium">
  £20
</p>
</div>

<div className="rounded-2xl border border-[#E7E2DC] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
  <div className="mb-4 h-72 rounded-xl bg-[#F3ECE8]"></div>
  <h3 className="font-semibold">Oversized Graphic Tee</h3>
  <p className="text-gray-600">£12</p>
</div>

<div className="rounded-2xl border border-[#E7E2DC] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
  <div className="mb-4 h-72 rounded-xl bg-[#F3ECE8]"></div>
  <h3 className="font-semibold">Denim Shorts</h3>
  <p className="text-gray-600">£16</p>
</div>

        </div>
      </section>
    </main>
  );
}

  
