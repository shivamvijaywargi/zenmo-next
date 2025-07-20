import AuthLayout from "@/modules/auth/ui/layouts/auth-layout";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayout>{children}</AuthLayout>;
}
