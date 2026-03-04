import Hero from "@/components/Hero";
import WhyItMatters from "@/components/WhyItMatters";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <main>
      <Hero
        title="Welcome to YHMS"
        subtitle="Your mission, your impact."
      />
      <WhyItMatters />
      <CTABanner />
    </main>
  );
}
