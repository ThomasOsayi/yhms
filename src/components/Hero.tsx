import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen pt-[100px] relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-100px)]">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:pl-[max(32px,calc((100vw-1280px)/2+32px))] py-16 lg:pr-16">
          <h1 className="font-serif font-extrabold text-[clamp(42px,5vw,68px)] leading-[1.05] tracking-tight text-brand-dark mb-6">
            The Future of Health Starts With{" "}
            <em className="italic text-brand-teal font-bold">You</em>
          </h1>
          <p className="text-lg text-brand-text-light max-w-[440px] leading-relaxed mb-9">
            We connect students to real-world health and medical experiences —
            from shadowing to community wellness projects. No white coat
            required.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-teal-deep text-white font-semibold text-[15px] hover:bg-brand-teal-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(4,47,46,0.25)] transition-all"
            >
              Join as a Student →
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent text-brand-dark font-semibold text-[15px] border-2 border-brand-border hover:border-brand-teal hover:text-brand-teal hover:-translate-y-0.5 transition-all"
            >
              Explore Programs
            </Link>
          </div>
        </div>

        <div className="relative p-8 lg:pr-8 lg:py-8 lg:pl-0">
          <div className="grid grid-cols-[1.2fr_1fr] grid-rows-2 gap-4 h-full min-h-[400px]">
            <div className="row-span-2 rounded-xl overflow-hidden img-zoom">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=900&fit=crop&crop=faces"
                alt="Medical students"
                width={800}
                height={900}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="rounded-xl overflow-hidden img-zoom">
              <Image
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop"
                alt="Community health"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden img-zoom">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop"
                alt="Doctor mentorship"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}