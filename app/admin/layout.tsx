"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Inbox,
  LogOut,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  // If on login page, render clean standalone view
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch {
      router.push("/admin/login");
    } finally {
      setLoggingOut(false);
    }
  };

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Enquiries", href: "/admin/enquiries", icon: Inbox },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] flex flex-col">
      {/* Admin Top Navigation */}
      <header className="sticky top-0 z-40 bg-[var(--color-surface)]/90 backdrop-blur-md border-b border-[var(--color-border)] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Admin Badge */}
            <div className="flex items-center gap-6">
              <Link href="/admin" className="flex items-center gap-2.5">
                <span className="font-bold text-xl tracking-[0.14em] text-[var(--color-accent)]">
                  GROWWERA
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/30">
                  <ShieldCheck size={12} />
                  Admin
                </span>
              </Link>

              {/* Navigation tabs */}
              <nav className="hidden sm:flex items-center gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    item.href === "/admin"
                      ? pathname === "/admin"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "bg-[var(--color-surface-elevated)] text-[var(--color-accent)] border border-[var(--color-border)] shadow-xs font-semibold"
                          : "text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface-elevated)]/60"
                      )}
                    >
                      <Icon size={15} />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 text-xs text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] transition-colors px-2.5 py-1.5 rounded-lg border border-[var(--color-border)]"
                title="Open live website in new tab"
              >
                <span>Live Site</span>
                <ExternalLink size={12} />
              </a>

              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-500 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-lg transition-colors cursor-pointer"
              >
                <LogOut size={13} />
                <span>{loggingOut ? "Exiting…" : "Logout"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav bar */}
        <div className="sm:hidden flex border-t border-[var(--color-border)] px-4 py-2 gap-2 bg-[var(--color-surface)]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex-1 inline-flex items-center justify-center gap-2 py-1.5 rounded-lg text-xs font-medium transition-colors",
                  isActive
                    ? "bg-[var(--color-surface-elevated)] text-[var(--color-accent)] font-semibold border border-[var(--color-border)]"
                    : "text-[var(--color-foreground-secondary)]"
                )}
              >
                <Icon size={14} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
