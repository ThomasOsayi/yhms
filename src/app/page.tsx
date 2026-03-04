import Hero from "@/components/Hero";
import WhyItMatters from "@/components/WhyItMatters";
import ImageBanner from "@/components/ImageBanner";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyItMatters />
      <ImageBanner />
      <CTABanner />
    </>
  );
}