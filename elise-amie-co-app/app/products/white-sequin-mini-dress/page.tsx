
import Image from "next/image";

export default function ProductPage() {
  return (

<>
<div className="bg-[#E8C8D0] py-3 text-center text-sm font-medium tracking-[0.15em] text-[#2B2B2B]">
  Free UK Delivery on Orders Over £50
</div>

<main className="mx-auto max-w-6xl px-6 py-20">

<section className="text-center">

        <img
          src="/white-sequin-mini-dress.jpg"
          alt="White Sequin Mini Dress"
          className="mx-auto w-40 rounded-lg"
        />

        <h1 className="mt-12 text-3xl font-light text-[#2B2B2B]">
          White Sequin Mini Dress
        </h1>

        <p className="mt-4 text-xl text-[#2B2B2B]">
          £20
        </p>

        <p className="mt-10 text-lg italic text-neutral-600">
  Lovingly chosen to be loved again.
</p>

<p className="mt-12 max-w-2xl mx-auto leading-9 text-[#2B2B2B]">
  Carefully selected for its soft cowl neckline and delicate
  sequin detailing. A beautiful piece chosen for beautiful
  moments and celebrations.
</p>

      </section>


      <section className="mt-20 text-center">

        <div className="mt-20">

<p className="uppercase tracking-[0.2em] text-[#2B2B2B]">
SIZE
</p>

<p className="mt-3 text-[#2B2B2B]">
UK 10
</p>

</div>

       <div className="mt-12">

<p className="uppercase tracking-[0.2em] text-[#2B2B2B]">
BEAUTIFULLY PRESERVED
</p>

<p className="mt-3 text-[#2B2B2B]">
Excellent Condition
</p>

</div>
        <div className="mt-12">

<p className="uppercase tracking-[0.2em] text-[#2B2B2B]">
ONE OF A KIND
</p>

<p className="mt-3 text-[#2B2B2B]">
Once it's gone, it's gone forever.
</p>

</div>
      </section>


    <div className="mt-16 flex justify-center">

<button
className="rounded-full bg-[#E8C8D0] px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2B2B2B] transition duration-300 hover:bg-[#D8A7B1]"
>
Add to Basket
</button>

</div>


     <div className="flex justify-center mt-20 mb-10">
  <Image
    src="/logo.png"
    alt="Amie Co"
    width={400}
    height={120}
    priority
    className="mx-auto w-full max-w-xs h-auto"
  />
</div>

</main>

</>

);

}