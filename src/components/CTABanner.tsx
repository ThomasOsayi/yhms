import Link from "next/link";
import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="px-8 pb-28 pt-28">
      <div className="max-w-[1280px] mx-auto rounded-xl overflow-hidden relative h-[400px] flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1400&h=500&fit=crop"
          alt="Community"
          width={1400}
          height={500}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-deep/[0.88] to-brand-teal/75" />
        <div className="relative z-10 px-10">
          <h2 className="font-serif font-bold text-[clamp(30px,3.5vw,44px)] text-white tracking-tight mb-3.5">
            Ready to make an impact?
          </h2>
          <p className="text-white/75 text-[17px] mb-7 max-w-[500px] mx-auto">
            Whether you&apos;re a student, mentor, or supporter — there&apos;s a
            place for you at YHMS.
          </p>
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-orange text-white font-semibold text-[15px] shadow-[0_2px_12px_rgba(249,115,22,0.25)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(249,115,22,0.35)] transition-all"
          >
            Get Involved →
          </Link>
        </div>
      </div>
    </section>
  );
}