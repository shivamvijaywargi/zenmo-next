import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zenmo - Finance Management System",
  description:
    "Zenmo combines the best features of expense splitting and finance management in one seamless experience.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
