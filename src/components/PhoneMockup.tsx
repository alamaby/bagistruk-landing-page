import type { ReactNode } from "react";

export function PhoneMockup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[280px] rounded-[2.5rem] border-[10px] border-slate-900 bg-slate-900 shadow-2xl shadow-slate-900/20 ${className}`}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-0 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[1.8rem] bg-slate-50">
        {children}
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 pt-4 pb-1 text-[10px] font-medium text-slate-600">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <span className="inline-block h-2 w-3 rounded-sm bg-slate-400" />
        <span className="inline-block h-2 w-2 rounded-full bg-slate-400" />
        <span className="inline-block h-2 w-4 rounded-sm bg-teal-500" />
      </div>
    </div>
  );
}

function AppHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 px-4 pb-3 pt-1">
      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-600 text-[11px] font-bold text-white">
        B
      </div>
      <span className="text-sm font-semibold text-slate-900">{title}</span>
    </div>
  );
}

/* 1. Scan receipt */
export function ScanScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="px-4 pt-4 pb-2 text-[10px] font-medium text-white/80">9:41</div>
      <div className="relative flex flex-1 items-center justify-center px-6">
        {/* receipt being scanned */}
        <div className="relative rotate-1 rounded-md bg-white px-3 py-4 shadow-xl">
          <div className="space-y-1.5">
            <div className="mx-auto h-2 w-16 rounded bg-slate-300" />
            <div className="mx-auto mb-2 h-1.5 w-10 rounded bg-slate-200" />
            {[28, 24, 30, 22, 26].map((w, i) => (
              <div key={i} className="flex items-center justify-between gap-3">
                <div className="h-1.5 rounded bg-slate-200" style={{ width: w + 8 }} />
                <div className="h-1.5 w-6 rounded bg-slate-200" />
              </div>
            ))}
            <div className="mt-2 border-t border-dashed border-slate-300 pt-1.5">
              <div className="flex items-center justify-between">
                <div className="h-2 w-8 rounded bg-slate-300" />
                <div className="h-2 w-8 rounded bg-teal-500" />
              </div>
            </div>
          </div>
          {/* scan frame corners */}
          <span className="absolute -left-2 -top-2 h-5 w-5 rounded-tl-lg border-l-2 border-t-2 border-teal-400" />
          <span className="absolute -right-2 -top-2 h-5 w-5 rounded-tr-lg border-r-2 border-t-2 border-teal-400" />
          <span className="absolute -bottom-2 -left-2 h-5 w-5 rounded-bl-lg border-b-2 border-l-2 border-teal-400" />
          <span className="absolute -bottom-2 -right-2 h-5 w-5 rounded-br-lg border-b-2 border-r-2 border-teal-400" />
        </div>
      </div>
      <div className="flex items-center justify-center pb-6 pt-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white/70 bg-white">
          <div className="h-8 w-8 rounded-full bg-teal-600" />
        </div>
      </div>
    </div>
  );
}

/* 2. Review extracted bill */
export function ReviewScreen() {
  const items = [
    ["Nasi Goreng", "45.000"],
    ["Es Teh Manis", "12.000"],
    ["Ayam Bakar", "55.000"],
    ["Sambal Matah", "8.000"],
  ];
  return (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <AppHeader title="Review items" />
      <div className="flex-1 space-y-2 overflow-hidden px-4">
        {items.map(([name, price], i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5"
          >
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-md bg-teal-100" />
              <span className="text-xs font-medium text-slate-700">{name}</span>
            </div>
            <span className="text-xs font-semibold text-slate-900">Rp {price}</span>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-xl border border-amber-200 bg-amber-50 px-3 py-2">
          <span className="text-[11px] font-medium text-amber-700">Tax + Service</span>
          <span className="text-[11px] font-semibold text-amber-700">Rp 14.000</span>
        </div>
      </div>
      <div className="px-4 pb-5 pt-3">
        <div className="rounded-xl bg-teal-600 py-2.5 text-center text-xs font-semibold text-white">
          Save bill
        </div>
      </div>
    </div>
  );
}

/* 3. Assign items to participants */
export function SplitScreen() {
  const people = [
    ["A", "Adi", "bg-teal-500"],
    ["B", "Bunga", "bg-indigo-500"],
    ["C", "Citra", "bg-rose-500"],
  ];
  return (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <AppHeader title="Assign items" />
      <div className="flex gap-1.5 px-4 pb-3">
        {people.map(([init, , color], i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${color} text-xs font-bold text-white`}
            >
              {init}
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 space-y-2 px-4">
        {[
          ["Nasi Goreng", "bg-teal-500", "A"],
          ["Es Teh Manis", "bg-indigo-500", "B"],
          ["Ayam Bakar", "bg-rose-500", "C"],
          ["Sambal Matah", "bg-teal-500", "A"],
        ].map(([name, color, who], i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-xl border border-slate-100 px-3 py-2.5"
          >
            <span className="text-xs font-medium text-slate-700">{name}</span>
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full ${color} text-[10px] font-bold text-white`}
            >
              {who}
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 pb-5 pt-3">
        <div className="rounded-xl bg-teal-600 py-2.5 text-center text-xs font-semibold text-white">
          Calculate split
        </div>
      </div>
    </div>
  );
}

/* 4. Track settlement */
export function SettlementScreen() {
  const rows = [
    ["Adi", "53.000", true, "bg-teal-500"],
    ["Bunga", "12.000", true, "bg-indigo-500"],
    ["Citra", "55.000", false, "bg-rose-500"],
  ];
  return (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <AppHeader title="Settlement" />
      <div className="mx-4 mb-3 rounded-2xl bg-teal-600 p-3 text-white">
        <div className="text-[10px] text-teal-100">Total bill</div>
        <div className="text-lg font-bold">Rp 134.000</div>
        <div className="mt-1 text-[10px] text-teal-100">2 of 3 paid</div>
      </div>
      <div className="flex-1 space-y-2 px-4">
        {rows.map(([name, amt, paid, color], i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-xl border border-slate-100 px-3 py-2.5"
          >
            <div className="flex items-center gap-2">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full ${color} text-[10px] font-bold text-white`}
              >
                {(name as string)[0]}
              </div>
              <div>
                <div className="text-xs font-medium text-slate-700">{name}</div>
                <div className="text-[10px] text-slate-400">Rp {amt}</div>
              </div>
            </div>
            {paid ? (
              <span className="rounded-full bg-teal-100 px-2 py-0.5 text-[10px] font-semibold text-teal-700">
                Paid
              </span>
            ) : (
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                Pending
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="px-4 pb-5 pt-3">
        <div className="rounded-xl border border-teal-600 py-2.5 text-center text-xs font-semibold text-teal-700">
          Send reminder
        </div>
      </div>
    </div>
  );
}

export const screens = [ScanScreen, ReviewScreen, SplitScreen, SettlementScreen];
