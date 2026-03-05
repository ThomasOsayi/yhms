"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const programs = [
  {
    tag: "Grades 9–12",
    tagColor: "bg-brand-teal/10 text-brand-teal-dark",
    title: "High School Track",
    desc: "Get an early start on your health career journey through workshops, shadowing, and community health projects.",
    features: [
      "Monthly health career workshops",
      "Paired with a college student mentor",
      "Community wellness project participation",
      "Certificate of completion",
    ],
    img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=700&h=500&fit=crop",
    btnClass: "bg-brand-teal-deep text-white hover:bg-brand-teal-dark hover:shadow-[0_8px_24px_rgba(4,47,46,0.25)]",
    btnText: "Apply Now →",
  },
  {
    tag: "Undergrad & Grad",
    tagColor: "bg-brand-orange/10 text-brand-orange",
    title: "College Track",
    desc: "Take your pre-health journey further with clinical shadowing, research exposure, and community wellness leadership.",
    features: [
      "Clinical shadowing placements",
      "Professional mentor matching",
      "Lead community health projects",
      "Networking events & career panels",
    ],
    img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=700&h=500&fit=crop",
    btnClass: "bg-brand-orange text-white shadow-[0_2px_12px_rgba(249,115,22,0.25)] hover:shadow-[0_8px_24px_rgba(249,115,22,0.35)]",
    btnText: "Apply Now →",
  },
  {
    tag: "Leadership",
    tagColor: "bg-[#6366F1]/10 text-[#6366F1]",
    title: "Ambassador Program",
    desc: "Bring YHMS to your campus. Organize local events, recruit students, and build the community from the ground up.",
    features: [
      "Represent YHMS on your campus",
      "Plan and lead local events",
      "Build leadership & organizational skills",
      "Resume-worthy experience",
    ],
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&h=500&fit=crop",
    btnClass: "bg-transparent text-brand-dark border-2 border-brand-border hover:border-brand-teal hover:text-brand-teal",
    btnText: "Become an Ambassador →",
  },
];

export default function ProgramsPage() {
  return (
    <section className="pt-36 pb-28">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <AnimateIn className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-brand-teal mb-3.5">Our Programs</p>
          <h1 className="font-serif font-bold text-[clamp(34px,4.5vw,56px)] leading-[1.1] tracking-tight text-brand-dark">
            Three tracks. <em className="italic text-brand-teal">One mission.</em>
          </h1>
          <p className="text-lg text-brand-text-light max-w-[540px] mx-auto leading-relaxed mt-4">
            Every program gives students real experience, real mentorship, and real community impact.
          </p>
        </AnimateIn>

        <div className="flex flex-col gap-8 sm:gap-10">
          {programs.map((program, i) => (
            <AnimateIn key={program.title} y={50} delay={i * 0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden bg-white border border-brand-border hover:shadow-[0_16px_48px_rgba(0,0,0,0.07)] transition-all">
                <div className={`min-h-[220px] sm:min-h-[300px] lg:min-h-[400px] img-zoom ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={program.img} alt={program.title} width={700} height={500} className="w-full h-full object-cover" />
                </div>
                <div className={`p-6 sm:p-10 lg:p-12 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className={`inline-flex w-fit px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[1.5px] mb-4 sm:mb-5 ${program.tagColor}`}>{program.tag}</span>
                  <h2 className="font-serif font-bold text-[24px] sm:text-[30px] text-brand-dark tracking-tight leading-[1.15] mb-3">{program.title}</h2>
                  <p className="text-base text-brand-text-light leading-relaxed mb-5 sm:mb-6">{program.desc}</p>
                  <div className="flex flex-col gap-2 sm:gap-2.5 mb-6 sm:mb-7">
                    {program.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 text-sm font-medium text-brand-text">
                        <span className="w-6 h-6 rounded-lg bg-brand-teal/[0.08] text-brand-teal flex items-center justify-center text-[13px] font-bold flex-shrink-0">✓</span>
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link href="/get-involved" className={`inline-flex items-center gap-2 w-fit px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-[15px] hover:-translate-y-0.5 transition-all ${program.btnClass}`}>{program.btnText}</Link>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}