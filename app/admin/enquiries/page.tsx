"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Filter,
  FileSpreadsheet,
  RefreshCw,
  Phone,
  Mail,
  Building2,
  Calendar,
  Clock,
  Briefcase,
  Wallet,
  FileText,
  X,
  Check,
  Trash2,
  ExternalLink,
  MessageSquare,
  ShieldAlert,
} from "lucide-react";
import type { Enquiry, EnquiryStatus } from "@/lib/enquiry-helpers";
import { exportEnquiriesToExcel } from "@/lib/excel-export";
import { cn } from "@/lib/utils";

const STATUS_OPTIONS: EnquiryStatus[] = [
  "New",
  "Contacted",
  "Discussion",
  "Proposal Sent",
  "In Progress",
  "Converted",
  "Closed",
];

const SERVICE_OPTIONS = [
  "All",
  "Web Design & Development",
  "SEO",
  "Digital Marketing",
  "AI & Automation",
  "Not sure yet",
];

const DATE_OPTIONS = [
  { label: "All Time", value: "all" },
  { label: "Today", value: "today" },
  { label: "Last 7 Days", value: "7days" },
  { label: "This Month", value: "month" },
];

export default function AdminEnquiriesPage() {
  const router = useRouter();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Filters & Search
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [serviceFilter, setServiceFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("all");

  // Selected enquiry for detail modal
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [modalStatus, setModalStatus] = useState<EnquiryStatus>("New");
  const [modalNotes, setModalNotes] = useState("");
  const [savingNotes, setSavingNotes] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [deleting, setDeleting] = useState(false);

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
      }
    } catch (err) {
      console.error("Failed to load enquiries:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const openDetailModal = (enq: Enquiry) => {
    setSelectedEnquiry(enq);
    setModalStatus(enq.status);
    setModalNotes(enq.notes || "");
    setSaveSuccess(false);
  };

  const closeDetailModal = () => {
    setSelectedEnquiry(null);
    setSaveSuccess(false);
  };

  const handleUpdateStatusAndNotes = async () => {
    if (!selectedEnquiry) return;
    setSavingNotes(true);
    setSaveSuccess(false);

    try {
      const res = await fetch(`/api/admin/enquiries/${selectedEnquiry.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: modalStatus,
          notes: modalNotes,
        }),
      });

      if (res.ok) {
        setSaveSuccess(true);
        // Update local state
        setEnquiries((prev) =>
          prev.map((item) =>
            item.id === selectedEnquiry.id
              ? { ...item, status: modalStatus, notes: modalNotes }
              : item
          )
        );
        setSelectedEnquiry((prev) =>
          prev ? { ...prev, status: modalStatus, notes: modalNotes } : null
        );

        setTimeout(() => setSaveSuccess(false), 3000);
      }
    } catch (err) {
      console.error("Failed to update enquiry:", err);
    } finally {
      setSavingNotes(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedEnquiry) return;
    if (!confirm(`Are you sure you want to delete enquiry ${selectedEnquiry.enquiry_id}?`)) {
      return;
    }

    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/enquiries/${selectedEnquiry.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setEnquiries((prev) => prev.filter((item) => item.id !== selectedEnquiry.id));
        closeDetailModal();
      }
    } catch (err) {
      console.error("Failed to delete enquiry:", err);
    } finally {
      setDeleting(false);
    }
  };

  // Filtered enquiries calculation
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((enq) => {
      // 1. Search term match (Name, Mobile Number, Email, Company, Enquiry ID)
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesQuery =
          enq.enquiry_id.toLowerCase().includes(query) ||
          enq.name.toLowerCase().includes(query) ||
          enq.mobile_number.toLowerCase().includes(query) ||
          enq.email.toLowerCase().includes(query) ||
          (enq.company && enq.company.toLowerCase().includes(query));

        if (!matchesQuery) return false;
      }

      // 2. Status filter
      if (statusFilter !== "All" && enq.status !== statusFilter) {
        return false;
      }

      // 3. Service filter
      if (serviceFilter !== "All") {
        if (!enq.service || !enq.service.includes(serviceFilter)) {
          return false;
        }
      }

      // 4. Date filter
      if (dateFilter !== "all") {
        const created = new Date(enq.created_at);
        const now = new Date();

        if (dateFilter === "today") {
          const isToday =
            created.getDate() === now.getDate() &&
            created.getMonth() === now.getMonth() &&
            created.getFullYear() === now.getFullYear();
          if (!isToday) return false;
        } else if (dateFilter === "7days") {
          const diffDays = (now.getTime() - created.getTime()) / (1000 * 3600 * 24);
          if (diffDays > 7) return false;
        } else if (dateFilter === "month") {
          const isThisMonth =
            created.getMonth() === now.getMonth() &&
            created.getFullYear() === now.getFullYear();
          if (!isThisMonth) return false;
        }
      }

      return true;
    });
  }, [enquiries, searchTerm, statusFilter, serviceFilter, dateFilter]);

  const handleExport = () => {
    exportEnquiriesToExcel(filteredEnquiries);
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

  const formatShortDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return iso;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Export */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-foreground)]">
            Enquiries Management
          </h1>
          <p className="text-sm text-[var(--color-foreground-secondary)] mt-1">
            Browse, search, manage follow-up notes, and export to Excel (.xlsx).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => fetchEnquiries(true)}
            disabled={refreshing}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[var(--color-foreground-secondary)] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl hover:bg-[var(--color-surface-elevated)] transition-colors cursor-pointer"
          >
            <RefreshCw size={14} className={refreshing ? "animate-spin" : ""} />
            <span>Refresh</span>
          </button>

          <button
            onClick={handleExport}
            disabled={filteredEnquiries.length === 0}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-black bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] rounded-xl transition-all shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FileSpreadsheet size={16} />
            <span>Export to Excel ({filteredEnquiries.length})</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Search Box */}
          <div className="relative">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-foreground-muted)]"
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, mobile, email, ID..."
              className="w-full pl-9 pr-4 py-2 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-xl text-xs sm:text-sm text-[var(--color-foreground)] placeholder-[var(--color-foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-xl text-xs sm:text-sm text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            >
              <option value="All">Status: All</option>
              {STATUS_OPTIONS.map((st) => (
                <option key={st} value={st}>
                  Status: {st}
                </option>
              ))}
            </select>
          </div>

          {/* Service Filter */}
          <div>
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="w-full px-3 py-2 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-xl text-xs sm:text-sm text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            >
              <option value="All">Service: All</option>
              {SERVICE_OPTIONS.filter((s) => s !== "All").map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Date Filter */}
          <div>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full px-3 py-2 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-xl text-xs sm:text-sm text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            >
              {DATE_OPTIONS.map((d) => (
                <option key={d.value} value={d.value}>
                  Date: {d.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Counter / Active Filters */}
        <div className="flex items-center justify-between text-xs text-[var(--color-foreground-muted)] pt-1">
          <div>
            Showing <strong className="text-[var(--color-foreground)]">{filteredEnquiries.length}</strong> of{" "}
            <strong className="text-[var(--color-foreground)]">{enquiries.length}</strong> total enquiries
          </div>
          {(searchTerm || statusFilter !== "All" || serviceFilter !== "All" || dateFilter !== "all") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setStatusFilter("All");
                setServiceFilter("All");
                setDateFilter("all");
              }}
              className="text-[var(--color-accent)] hover:underline font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Main Enquiries Table */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-xs overflow-hidden">
        {loading ? (
          <div className="p-16 text-center text-sm text-[var(--color-foreground-muted)]">
            Loading enquiries…
          </div>
        ) : filteredEnquiries.length === 0 ? (
          <div className="p-16 text-center">
            <Filter size={36} className="mx-auto text-[var(--color-foreground-muted)] mb-3 opacity-40" />
            <p className="text-base font-semibold text-[var(--color-foreground)]">
              No matching enquiries found
            </p>
            <p className="text-xs text-[var(--color-foreground-muted)] mt-1 max-w-sm mx-auto">
              Try adjusting your search criteria or resetting filters to view all entries.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)]/60 text-xs font-bold uppercase tracking-wider text-[var(--color-foreground-muted)]">
                  <th className="py-3.5 px-4">Enquiry ID</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4">Name</th>
                  <th className="py-3.5 px-4">Mobile Number</th>
                  <th className="py-3.5 px-4">Email</th>
                  <th className="py-3.5 px-4">Company</th>
                  <th className="py-3.5 px-4">Service</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {filteredEnquiries.map((enq) => (
                  <tr
                    key={enq.id}
                    className="hover:bg-[var(--color-surface-elevated)]/50 transition-colors cursor-pointer"
                    onClick={() => openDetailModal(enq)}
                  >
                    <td className="py-3.5 px-4 font-mono font-bold text-xs text-[var(--color-accent)] whitespace-nowrap">
                      {enq.enquiry_id}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-[var(--color-foreground-muted)] whitespace-nowrap">
                      {formatShortDate(enq.created_at)}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-[var(--color-foreground)] whitespace-nowrap">
                      {enq.name}
                    </td>
                    <td className="py-3.5 px-4 text-xs font-medium text-amber-500 whitespace-nowrap">
                      <a
                        href={`tel:${enq.mobile_number.replace(/\s+/g, "")}`}
                        onClick={(e) => e.stopPropagation()}
                        className="hover:underline flex items-center gap-1.5"
                      >
                        <Phone size={12} className="shrink-0" />
                        {enq.mobile_number}
                      </a>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-[var(--color-foreground-secondary)] whitespace-nowrap">
                      <a
                        href={`mailto:${enq.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="hover:underline flex items-center gap-1.5"
                      >
                        <Mail size={12} className="shrink-0" />
                        {enq.email}
                      </a>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-[var(--color-foreground-muted)] max-w-[140px] truncate">
                      {enq.company || "—"}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-[var(--color-foreground-secondary)] max-w-[160px] truncate">
                      {enq.service || "—"}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${getStatusBadge(
                          enq.status
                        )}`}
                      >
                        {enq.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openDetailModal(enq);
                        }}
                        className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-[var(--color-foreground)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Enquiry Details Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[var(--color-border)] pb-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-foreground-muted)]">
                  ENQUIRY
                </span>
                <div className="flex items-center gap-3 mt-1">
                  <h2 className="text-2xl font-mono font-bold text-[var(--color-accent)]">
                    {selectedEnquiry.enquiry_id}
                  </h2>
                  <span
                    className={`px-3 py-0.5 rounded-full text-xs font-bold border ${getStatusBadge(
                      selectedEnquiry.status
                    )}`}
                  >
                    {selectedEnquiry.status}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-foreground-muted)] mt-1 flex items-center gap-1.5">
                  <Clock size={12} />
                  Submitted on{" "}
                  {new Date(selectedEnquiry.created_at).toLocaleString("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
              </div>

              <button
                onClick={closeDetailModal}
                className="p-1.5 text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] rounded-lg border border-[var(--color-border)] hover:bg-[var(--color-surface-elevated)] transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Section 1: Customer Info */}
            <div className="bg-[var(--color-surface-elevated)]/60 border border-[var(--color-border)] rounded-xl p-4 sm:p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                Customer Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-xs text-[var(--color-foreground-muted)] block">Name</span>
                  <span className="font-semibold text-[var(--color-foreground)]">
                    {selectedEnquiry.name}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-foreground-muted)] block">
                    Mobile Number *
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-bold font-mono text-amber-500">
                      {selectedEnquiry.mobile_number}
                    </span>
                    <a
                      href={`tel:${selectedEnquiry.mobile_number.replace(/\s+/g, "")}`}
                      className="text-xs text-black font-bold bg-[var(--color-accent)] px-2 py-0.5 rounded hover:bg-[var(--color-accent-hover)]"
                      title="Call this number"
                    >
                      Call
                    </a>
                    <a
                      href={`https://wa.me/${selectedEnquiry.mobile_number.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-white font-bold bg-emerald-600 px-2 py-0.5 rounded hover:bg-emerald-700"
                      title="Send WhatsApp message"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-foreground-muted)] block">Email</span>
                  <a
                    href={`mailto:${selectedEnquiry.email}`}
                    className="font-medium text-[var(--color-foreground)] hover:underline flex items-center gap-1 mt-0.5"
                  >
                    {selectedEnquiry.email}
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-foreground-muted)] block">
                    Company / Business
                  </span>
                  <span className="font-medium text-[var(--color-foreground)]">
                    {selectedEnquiry.company || "—"}
                  </span>
                </div>
              </div>
            </div>

            {/* Section 2: Project Specifications */}
            <div className="bg-[var(--color-surface-elevated)]/60 border border-[var(--color-border)] rounded-xl p-4 sm:p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                Project Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div>
                  <span className="text-xs text-[var(--color-foreground-muted)] block">
                    Service Requested
                  </span>
                  <span className="font-semibold text-[var(--color-foreground)]">
                    {selectedEnquiry.service || "—"}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-foreground-muted)] block">
                    Budget
                  </span>
                  <span className="font-semibold text-[var(--color-foreground)]">
                    {selectedEnquiry.budget || "—"}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-foreground-muted)] block">
                    Timeline
                  </span>
                  <span className="font-semibold text-[var(--color-foreground)]">
                    {selectedEnquiry.timeline || "—"}
                  </span>
                </div>
              </div>
            </div>

            {/* Section 3: Message / Requirements */}
            <div className="bg-[var(--color-surface-elevated)]/60 border border-[var(--color-border)] rounded-xl p-4 sm:p-5 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                Message / Requirements
              </h3>
              <p className="text-sm text-[var(--color-foreground)] leading-relaxed whitespace-pre-wrap">
                {selectedEnquiry.message || "—"}
              </p>
            </div>

            {/* Section 4: Internal Management (Status + Notes) */}
            <div className="border border-[var(--color-border)] rounded-xl p-4 sm:p-5 bg-[var(--color-surface)] space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)] flex items-center gap-1.5">
                  <MessageSquare size={14} className="text-[var(--color-accent)]" />
                  Internal Follow-up & Status
                </h3>
                <span className="text-[11px] text-[var(--color-foreground-muted)]">
                  Only visible to Growwera Admin
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-foreground-muted)] mb-1.5">
                    Lead Status
                  </label>
                  <select
                    value={modalStatus}
                    onChange={(e) => setModalStatus(e.target.value as EnquiryStatus)}
                    className="w-full px-3 py-2 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-xl text-sm font-semibold text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  >
                    {STATUS_OPTIONS.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-foreground-muted)] mb-1.5">
                    Source
                  </label>
                  <div className="px-3 py-2 bg-[var(--color-surface-elevated)]/50 border border-[var(--color-border)] rounded-xl text-sm text-[var(--color-foreground-muted)] font-mono">
                    {selectedEnquiry.source || "Website"}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-foreground-muted)] mb-1.5">
                  Internal Notes
                </label>
                <textarea
                  rows={3}
                  value={modalNotes}
                  onChange={(e) => setModalNotes(e.target.value)}
                  placeholder="e.g. Called client on 18 Sep. Discussed 5-page business website. Sending proposal on Monday."
                  className="w-full px-3 py-2.5 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-xl text-sm text-[var(--color-foreground)] placeholder-[var(--color-foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={deleting}
                  className="inline-flex items-center gap-1.5 text-xs text-rose-500 hover:text-rose-600 font-semibold px-2.5 py-1.5 rounded-lg border border-rose-500/20 hover:bg-rose-500/10 transition-colors cursor-pointer"
                >
                  <Trash2 size={13} />
                  <span>{deleting ? "Deleting…" : "Delete Enquiry"}</span>
                </button>

                <div className="flex items-center gap-3">
                  {saveSuccess && (
                    <span className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                      <Check size={14} />
                      Saved!
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={handleUpdateStatusAndNotes}
                    disabled={savingNotes}
                    className="inline-flex items-center gap-1.5 px-5 py-2 bg-[var(--color-accent)] text-black text-xs font-bold rounded-xl hover:bg-[var(--color-accent-hover)] transition-all shadow-sm cursor-pointer disabled:opacity-50"
                  >
                    {savingNotes ? "Saving…" : "Save Changes"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
