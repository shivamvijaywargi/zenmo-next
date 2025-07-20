import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex h-full items-center justify-center">
      <div className="mx-auto px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 font-extrabold text-7xl text-primary-600 tracking-tight lg:text-9xl dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 font-bold text-3xl text-gray-900 tracking-tight md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 font-light text-gray-500 text-lg dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Button variant="link">
            <Link href="/dashboard">Go Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
