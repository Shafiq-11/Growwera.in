"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight, ShieldCheck, Eye, EyeOff, AlertCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError("Please enter your admin password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/admin/enquiries");
        router.refresh();
      } else {
        setError(data.error || "Incorrect password. Please try again.");
      }
    } catch {
      setError("Unable to connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center px-4 py-12 relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        {/* Brand header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex justify-center mb-3 hover:opacity-90 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="Growwera"
              width={180}
              height={27}
              priority
              className="h-8 w-auto object-contain mx-auto"
            />
          </Link>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck size={14} />
            Admin Portal
          </div>
          <h1 className="text-xl font-bold text-[var(--color-foreground)]">
            Enquiry Management Access
          </h1>
          <p className="text-sm text-[var(--color-foreground-secondary)] mt-1">
            Sign in to view, manage, and export client enquiries.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-7 sm:p-8 shadow-[var(--shadow-paper)]">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label
                htmlFor="admin-password"
                className="block text-xs font-bold uppercase tracking-wider text-[var(--color-foreground-secondary)] mb-2"
              >
                Admin Password
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  autoComplete="current-password"
                  autoFocus
                  className="w-full pl-10 pr-11 py-3 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-xl text-sm text-[var(--color-foreground)] placeholder-[var(--color-foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-colors"
                />
                <Lock
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-foreground-muted)] pointer-events-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] transition-colors p-1"
                  tabIndex={-1}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-start gap-2.5 p-3.5 bg-rose-500/10 border border-rose-500/25 rounded-xl text-rose-500 text-xs font-medium">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[var(--color-accent)] text-black text-sm font-bold rounded-xl hover:bg-[var(--color-accent-hover)] transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Verifying…
                </>
              ) : (
                <>
                  Sign In to Admin
                  <ArrowRight size={15} />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-[var(--color-border)] flex items-center justify-between text-xs text-[var(--color-foreground-muted)]">
            <Link href="/" className="hover:text-[var(--color-foreground)] transition-colors">
              ← Return to public website
            </Link>
            <span>Growwera Secure Access</span>
          </div>
        </div>
      </div>
    </div>
  );
}
