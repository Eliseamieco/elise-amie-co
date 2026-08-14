"use client";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import { useState } from "react";

export default function AddItemPage() {
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [size, setSize] = useState("");
const [condition, setCondition] = useState("");
const [description, setDescription] = useState("");
const [imageUrl, setImageUrl] = useState("");
const [imageFile, setImageFile] = useState<File | null>(null);
async function handleAddItem() {
  if (!imageFile) {
    alert("Please choose a photograph.");
    return;
  }

  const safeFileName = imageFile.name
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9._-]/g, "");

  const filePath = `${Date.now()}-${safeFileName}`;

  const { error: uploadError } = await supabase.storage
    .from("product-images")
    .upload(filePath, imageFile);

  if (uploadError) {
    alert("Upload error: " + uploadError.message);
    return;
  }

  const { data: publicUrlData } = supabase.storage
    .from("product-images")
    .getPublicUrl(filePath);

  const imageUrl = publicUrlData.publicUrl;

  const { error: insertError } = await supabase
    .from("products")
    .insert({
      name,
      price,
      size,
      condition,
      description,
      image_url: imageUrl,
      SOLD: false,
      created_at: new Date().toISOString(),
    });

  if (insertError) {
    alert("Product error: " + insertError.message);
    return;
  }

alert("Item added successfully!");
}
  return (
    <main className="min-h-screen bg-[#F8F6F2] px-6 py-16 text-[#2B2B2B]">
      <div className="mx-auto max-w-xl">

        <Link
          href="/admin"
          className="text-xs uppercase tracking-[0.2em] text-neutral-500"
        >
          ← Back Office
        </Link>

        <div className="mt-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C48A99]">
            Amie Co
          </p>

          <h1 className="mt-4 text-3xl font-light tracking-[0.15em]">
            Add New Item
          </h1>

          <p className="mt-4 text-sm italic text-neutral-500">
            Add another beautiful thing.
          </p>
        </div>

        <div className="mt-12 space-y-7">

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em]">
              Photograph
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
              className="w-full rounded-xl border border-[#E7E2DC] bg-white p-3 text-sm"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em]">
              Item Name
            </label>
            <input
  type="text"
  placeholder="White Sequin Mini Dress"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full rounded-xl border border-[#E7E2DC] bg-white px-4 py-3 outline-none"
/>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em]">
              Price
            </label>
            <input
              type="number"
  placeholder="20"
  value={price}
  onChange={(e) => setPrice(e.target.value)}
  className="w-full rounded-xl border border-[#E7E2DC] bg-white px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em]">
              Size
            </label>
            <input
              type="text"
  placeholder="UK 10"
  value={size}
  onChange={(e) => setSize(e.target.value)}
  className="w-full rounded-xl border border-[#E7E2DC] bg-white px-4 py-3 outline-none"
            />
          </div>

         
         <div>
  <label className="mb-2 block text-xs uppercase tracking-[0.2em]">
    Condition
  </label>

  <select
    value={condition}
onChange={(e) => setCondition(e.target.value)}
    className="w-full rounded-xl border border-[#E7E2DC] bg-white px-4 py-3 outline-none"
  >
    <option value="" disabled>
      Choose condition
    </option>

    <option value="Excellent Condition">
      Excellent Condition
    </option>

    <option value="Very Good Condition">
      Very Good Condition
    </option>

    <option value="Good Condition">
      Good Condition
    </option>
  </select>
</div>
    <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em]">
              Description
            </label>
            <textarea
              value={description}
onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="A beautiful one of a kind piece chosen to be loved again..."
              className="w-full resize-none rounded-xl border border-[#E7E2DC] bg-white px-4 py-3 outline-none"
            />
          </div>

         <button
  type="button"
  onClick={handleAddItem}
  className="w-full rounded-full bg-[#E8C8D0] px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-[#D8A7B1]"
>
  + Add Item
</button>

        </div>
      </div>
    </main>
  );
}