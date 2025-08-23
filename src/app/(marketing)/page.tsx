import Image from "next/image";
import { Suspense } from "react";
import { Hero } from "@/components/marketing/Hero";
import { TrustStrip } from "@/components/marketing/TrustStrip";
import { Benefits } from "@/components/marketing/Benefits";
import { Stats } from "@/components/marketing/Stats";
import { Quality } from "@/components/marketing/Quality";
import { FeaturedCarousel } from "@/components/marketing/FeaturedCarousel";
import { SocialProof } from "@/components/marketing/SocialProof";
import { Newsletter } from "@/components/marketing/Newsletter";
import { Footer } from "@/components/marketing/Footer";

export default function MarketingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustStrip />
      <Benefits />
      <Stats />
      <Quality />
      <FeaturedCarousel />
      <SocialProof />
      <Suspense>
        <Newsletter />
      </Suspense>
      <Footer />
    </main>
  );
}
