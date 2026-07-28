"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert("Sign in failed: " + error.message);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#F8F6F2] px-6 py-20 text-[#2B2B2B]">
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C48A99]">
            Amie Co
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-[0.15em]">
            Back Office
          </h1>

          <p className="mt-5 text-sm text-neutral-600">
            Sign in to manage the shop.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-[#2B2B2B]">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-[#E7E2DC] bg-white px-4 py-3 text-[#2B2B2B] outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-[#2B2B2B]">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleLogin();
                }
              }}
              className="w-full rounded-xl border border-[#E7E2DC] bg-white px-4 py-3 text-[#2B2B2B] outline-none"
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-full bg-[#E8C8D0] px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-[#2B2B2B] transition hover:bg-[#D8A7B1] disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </div>
      </div>
    </main>
  );
}