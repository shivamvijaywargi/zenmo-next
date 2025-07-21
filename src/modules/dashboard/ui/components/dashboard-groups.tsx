import Link from "next/link";
import { DashboardGroup } from "./dashboard-group";

const GROUPS = [
  {
    id: 1,
    name: "Apartment Bills",
    text: "You owe ₹25.00",
    balance: "-₹25.00",
  },
  {
    id: 2,
    name: "Vacation Trip",
    text: "You owe ₹80.00",
    balance: "+₹80.00",
  },
  {
    id: 3,
    name: "Weekend Dinner",
    text: "You are even",
    balance: "₹0.00",
  },
];

export function DashboardGroups() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold text-xl">Groups</h3>
        <Link
          className="font-medium text-emerald-600 text-sm hover:text-emerald-500"
          href="/groups"
        >
          View all
        </Link>
      </div>
      <div className="rounded-xl border border-slate-700 bg-gray-900 p-4 shadow-sm">
        <ul className="divide-y divide-slate-700">
          {GROUPS.map((group) => (
            <DashboardGroup group={group} key={group.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
