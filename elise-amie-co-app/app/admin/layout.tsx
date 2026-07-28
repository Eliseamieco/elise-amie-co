"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/admin-login");
        return;
      }

      setChecking(false);
    }

    checkUser();
  }, [router]);

  if (checking) {
    return (
      <main className="min-h-screen bg-[#F8F6F2] px-6 py-20 text-center text-[#2B2B2B]">
        <p className="text-sm uppercase tracking-[0.2em] text-[#C48A99]">
          Checking access...
        </p>
      </main>
    );
  }

  return <>{children}</>;
}