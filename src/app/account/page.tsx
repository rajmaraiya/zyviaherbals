"use client";

import { useSession, signOut } from "next-auth/react";

export default function AccountPage() {
  const { data } = useSession();
  return (
    <div className="container py-16">
      <h1 className="font-display text-3xl">Your account</h1>
      <p className="mt-2 text-ink/70">Signed in as {data?.user?.email}</p>
      <button onClick={() => signOut({ callbackUrl: "/" })} className="mt-6 rounded-2xl border border-ink/15 px-5 py-3">
        Sign out
      </button>
    </div>
  );
}
