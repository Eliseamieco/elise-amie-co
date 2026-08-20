"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BagLink() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function updateBagCount() {
      const savedBag = localStorage.getItem("amie-co-bag");

      if (!savedBag) {
        setCount(0);
        return;
      }

      try {
        const bag = JSON.parse(savedBag);

        if (Array.isArray(bag)) {
          setCount(bag.length);
        } else if (bag) {
          setCount(1);
        } else {
          setCount(0);
        }
      } catch {
        setCount(0);
      }
    }

    updateBagCount();

    window.addEventListener("storage", updateBagCount);

    return () => {
      window.removeEventListener("storage", updateBagCount);
    };
  }, []);

  return (
    <Link
      href="/bag"
      className="text-xs uppercase tracking-[0.2em] text-[#B87989] transition hover:text-[#2B2B2B]"
    >
      ♡ Bag{count > 0 ? ` (${count})` : ""}
    </Link>
  );
}