"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { useAuthStore } from "@/modules/auth/stores/auth-store";
import { LogoutComponent } from "@/modules/auth/ui/logout/logout-component";
import { FeaturesSection } from "@/modules/home/ui/sections/features-section";
import { HeroSection } from "@/modules/home/ui/sections/hero-section";
import { HowItWorksSection } from "@/modules/home/ui/sections/how-it-works";

export default function HomePage() {
  const { user } = useAuthStore();

  return (
    <div className="text-center">
      <ThemeToggle />
      {user?.fullName}
      {user?.fullName && <LogoutComponent />}
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
      </main>
    </div>
  );
}
