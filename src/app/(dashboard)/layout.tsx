"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardBreadcrumb } from "@/modules/dashboard/ui/components/dashboard-breadcrumb";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full">
        <div className="flex items-center space-x-2">
          <SidebarTrigger />
          <DashboardBreadcrumb fullPathname={pathname} />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
