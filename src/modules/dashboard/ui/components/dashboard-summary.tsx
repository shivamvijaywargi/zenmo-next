export function DashboardSummary() {
  return (
    <div>
      <h2 className="mb-4 font-bold text-2xl">Summary</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-700 bg-gray-900 p-5 shadow-sm">
          <p className="font-medium text-slate-500 text-sm">Total balance</p>
          <p className="mt-1 font-bold text-2xl text-emerald-500">$125.50</p>
        </div>
        <div className="rounded-xl border border-slate-700 bg-gray-900 p-5 shadow-sm">
          <p className="font-medium text-slate-500 text-sm">You owe</p>
          <p className="mt-1 font-bold text-2xl text-orange-500">$35.00</p>
        </div>
        <div className="rounded-xl border border-slate-700 bg-gray-900 p-5 shadow-sm">
          <p className="font-medium text-slate-500 text-sm">You are owed</p>
          <p className="mt-1 font-bold text-2xl text-blue-500">$160.50</p>
        </div>
      </div>
    </div>
  );
}
