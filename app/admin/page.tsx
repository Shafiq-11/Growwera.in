"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Inbox,
  Sparkles,
  Calendar,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  ExternalLink,
  RefreshCw,
  Phone,
  Mail,
} from "lucide-react";
import type { Enquiry } from "@/lib/enquiry-helpers";
import { exportEnquiriesToExcel } from "@/lib/excel-export";

interface Stats {
  total: number;
  newCount: number;
  thisMonthCount: number;
  convertedCount: number;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [stats, setStats] = useState<Stats>({
    total: 0,
    newCount: 0,
    thisMonthCount: 0,
    convertedCount: 0,
  });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchEnquiries = async (isManualRefresh = false) => {
    if (isManualRefresh) setRefreshing(true);
    try {
      const res = await fetch("/api/admin/enquiries");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      if (data.enquiries) {
        setEnquiries(data.enquiries);
        setStats(data.stats);
      }
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleExport = () => {
    exportEnquiriesToExcel(enquiries);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "New":
        return "bg-amber-500/15 text-amber-500 border-amber-500/30";
      case "Contacted":
        return "bg-blue-500/15 text-blue-500 border-blue-500/30";
      case "Discussion":
        return "bg-cyan-500/15 text-cyan-500 border-cyan-500/30";
      case "Proposal Sent":
        return "bg-purple-500/15 text-purple-500 border-purple-500/30";
      case "In Progress":
        return "bg-orange-500/15 text-orange-500 border-orange-500/30";
      case "Converted":
        return "bg-emerald-500/15 text-emerald-500 border-emerald-500/30";
      case "Closed":
        return "bg-zinc-500/15 text-zinc-400 border-zinc-500/30";
      default:
        return "bg-zinc-500/15 text-zinc-400 border-zinc-500/30";
    }
  };

  const recentEnquiries = enquiries.slice(0, 6);

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-foreground)]">
            Admin Dashboard
          </h1>
          <p className="text-sm text-[var(--color-foreground-secondary)] mt-1">
            Real-time client enquiries overview from the Growwera website.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => fetchEnquiries(true)}
            disabled={refreshing}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[var(--color-foreground-secondary)] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl hover:bg-[var(--color-surface-elevated)] transition-colors cursor-pointer"
          >
            <RefreshCw size={13} className={refreshing ? "animate-spin" : ""} />
            <span>Refresh</span>
          </button>

          <button
            onClick={handleExport}
            disabled={enquiries.length === 0}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-black bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] rounded-xl transition-all shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FileSpreadsheet size={15} />
            <span>Export to Excel</span>
          </button>
        </div>
      </div>

      {/* Summary Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Total Enquiries */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-foreground-muted)]">
              Total Enquiries
            </span>
            <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 flex items-center justify-center text-[var(--color-accent)]">
              <Inbox size={20} />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold text-[var(--color-foreground)] font-mono">
              {loading ? "…" : stats.total}
            </span>
          </div>
          <p className="text-xs text-[var(--color-foreground-muted)] mt-1">
            All-time submissions
          </p>
        </div>

        {/* New Enquiries */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
              New Enquiries
            </span>
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500">
              <Sparkles size={20} />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold text-[var(--color-foreground)] font-mono">
              {loading ? "…" : stats.newCount}
            </span>
          </div>
          <p className="text-xs text-[var(--color-foreground-muted)] mt-1">
            Pending response / follow-up
          </p>
        </div>

        {/* This Month */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
              This Month
            </span>
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-500">
              <Calendar size={20} />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold text-[var(--color-foreground)] font-mono">
              {loading ? "…" : stats.thisMonthCount}
            </span>
          </div>
          <p className="text-xs text-[var(--color-foreground-muted)] mt-1">
            Received in current calendar month
          </p>
        </div>

        {/* Converted */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
              Converted
            </span>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
              <CheckCircle2 size={20} />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold text-[var(--color-foreground)] font-mono">
              {loading ? "…" : stats.convertedCount}
            </span>
          </div>
          <p className="text-xs text-[var(--color-foreground-muted)] mt-1">
            Successfully closed / active clients
          </p>
        </div>
      </div>

      {/* Recent Enquiries Preview */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-xs overflow-hidden">
        <div className="p-6 border-b border-[var(--color-border)] flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-[var(--color-foreground)]">
              Recent Enquiries
            </h2>
            <p className="text-xs text-[var(--color-foreground-muted)] mt-0.5">
              Latest incoming project requests
            </p>
          </div>
          <Link
            href="/admin/enquiries"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-accent)] hover:underline"
          >
            <span>View all in table</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {loading ? (
          <div className="p-12 text-center text-sm text-[var(--color-foreground-muted)]">
            Loading enquiries from database…
          </div>
        ) : recentEnquiries.length === 0 ? (
          <div className="p-12 text-center">
            <Inbox size={36} className="mx-auto text-[var(--color-foreground-muted)] mb-3 opacity-40" />
            <p className="text-sm font-semibold text-[var(--color-foreground)]">
              No enquiries received yet
            </p>
            <p className="text-xs text-[var(--color-foreground-muted)] mt-1 max-w-sm mx-auto">
              Once visitors submit the contact form on your website, they will appear here automatically with full client information.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)]/50 text-xs font-bold uppercase tracking-wider text-[var(--color-foreground-muted)]">
                  <th className="py-3 px-4">Enquiry ID</th>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">Service</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {recentEnquiries.map((enq) => (
                  <tr key={enq.id} className="hover:bg-[var(--color-surface-elevated)]/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-xs text-[var(--color-accent)]">
                      {enq.enquiry_id}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-[var(--color-foreground)]">{enq.name}</div>
                      {enq.company && (
                        <div className="text-xs text-[var(--color-foreground-muted)]">{enq.company}</div>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-xs space-y-0.5">
                      <div className="flex items-center gap-1.5 text-[var(--color-foreground-secondary)] font-medium">
                        <Phone size={12} className="text-amber-500 shrink-0" />
                        <a href={`tel:${enq.mobile_number.replace(/\s+/g, "")}`} className="hover:underline">
                          {enq.mobile_number}
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5 text-[var(--color-foreground-muted)]">
                        <Mail size={12} className="shrink-0" />
                        <a href={`mailto:${enq.email}`} className="hover:underline">
                          {enq.email}
                        </a>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-[var(--color-foreground-secondary)] max-w-xs truncate">
                      {enq.service || "—"}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${getStatusBadge(
                          enq.status
                        )}`}
                      >
                        {enq.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href="/admin/enquiries"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-foreground-secondary)] hover:text-[var(--color-foreground)] px-2.5 py-1 rounded-lg border border-[var(--color-border)] hover:bg-[var(--color-surface-elevated)] transition-colors"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
