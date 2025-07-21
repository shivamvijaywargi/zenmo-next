import { DashboardGroups } from "../components/dashboard-groups";
import { DashboardSummary } from "../components/dashboard-summary";

export function DashboardView() {
  return (
    <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-3">
      {/* Left column on dashboard page */}
      <div className="space-y-8 lg:col-span-2">
        <DashboardSummary />
        <DashboardGroups />
      </div>
      {/* Right column on dashboard page */}
      {/* <DashboardActivity /> */}
    </div>
  );
}
