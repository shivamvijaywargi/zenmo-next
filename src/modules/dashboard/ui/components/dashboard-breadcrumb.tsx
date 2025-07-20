import Link from "next/link";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function formatPathname(pathname: string) {
  return pathname
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function DashboardBreadcrumb({
  fullPathname,
}: {
  fullPathname: string;
}) {
  const pathnames = fullPathname.split("/").slice(2);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/dashboard">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathnames.length !== 0 && <BreadcrumbSeparator />}
        {pathnames.map((pathname, index) => (
          <Fragment key={pathname}>
            <BreadcrumbItem>
              {index < pathnames.length - 1 ? (
                <BreadcrumbLink asChild>
                  <Link href={pathname}>{formatPathname(pathname)}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{formatPathname(pathname)}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < pathnames.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
