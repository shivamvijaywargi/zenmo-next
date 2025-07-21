import { cn } from "@/lib/utils";

export function DashboardGroup({
  group,
}: {
  group: {
    id: number;
    name: string;
    text: string;
    balance: string;
  };
}) {
  return (
    <li className="flex items-center justify-between py-3">
      <div className="flex items-center space-x-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
          <i className="text-purple-600" data-lucide="home" />
        </div>
        <div>
          <p className="font-semibold">{group.name}</p>
          <p className="text-slate-500 text-sm">{group.text}</p>
        </div>
      </div>
      <p
        className={cn("font-semibold text-slate-500", {
          "text-blue-500": group.balance.includes("+"),
          "text-orange-500": group.balance.includes("-"),
        })}
      >
        {group.balance}
      </p>
    </li>
  );
}
