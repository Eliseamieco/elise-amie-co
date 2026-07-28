"use client";

import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("Could not sign out: " + error.message);
      return;
    }

    router.replace("/admin-login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="mt-8 text-xs uppercase tracking-[0.2em] text-[#B87989] transition hover:text-[#2B2B2B]"
    >
      Sign Out
    </button>
  );
}