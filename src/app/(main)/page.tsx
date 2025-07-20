import { ThemeToggle } from '@/components/theme-toggle';
import { FeaturesSection } from '@/modules/home/ui/sections/features-section';
import { HeroSection } from '@/modules/home/ui/sections/hero-section';
import { HowItWorksSection } from '@/modules/home/ui/sections/how-it-works';

export default function Home() {
  return (
    <div className="text-center">
      <ThemeToggle />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
      </main>
    </div>
  );
}
