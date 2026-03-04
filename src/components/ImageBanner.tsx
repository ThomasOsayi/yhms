"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function ImageBanner() {
  return (
    <div className="h-[480px] max-md:h-[360px] relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&h=600&fit=crop"
        alt="Students together"
        width={1600}
        height={600}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-teal-deep/85 via-brand-teal-deep/30 to-transparent flex items-end p-8 lg:p-16">
        <AnimateIn y={30}>
          <div className="max-w-[600px] text-white">
            <h2 className="font-serif font-bold text-[clamp(30px,3.5vw,44px)] leading-[1.15] tracking-tight mb-3">
              Real experience. Real mentors. Real impact.
            </h2>
            <p className="text-[17px] text-white/75 leading-relaxed">
              YHMS gives students the tools, connections, and confidence to
              pursue health careers — starting now, not someday.
            </p>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}