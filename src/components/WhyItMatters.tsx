"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";
import StaggerChildren, { StaggerItem } from "./StaggerChildren";

const cards = [
  {
    title: "Closing the Access Gap",
    desc: "Most students don't get clinical experience until grad school. We connect them to real professionals and hands-on projects early.",
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop",
  },
  {
    title: "Mentorship That Matters",
    desc: "Students paired with mentors in healthcare are far more likely to succeed. We build those bridges between classrooms and careers.",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&fit=crop",
  },
  {
    title: "Community First",
    desc: "We're not just preparing students — we're addressing wellness gaps in underserved communities through student-led health projects.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
  },
];

export default function WhyItMatters() {
  return (
    <section className="py-28">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
          <AnimateIn>
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-brand-teal mb-3.5">
              Why It Matters
            </p>
            <h2 className="font-serif font-bold text-[clamp(34px,4.5vw,56px)] leading-[1.1] tracking-tight text-brand-dark">
              Healthcare needs a
              <br />
              <em className="italic text-brand-teal">new generation</em>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-lg text-brand-text-light max-w-[540px] leading-relaxed">
              Too many students fall through the cracks — lacking access,
              mentorship, and real exposure to health careers. We&apos;re
              changing that.
            </p>
          </AnimateIn>
        </div>

        <StaggerChildren stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <div className="rounded-xl overflow-hidden bg-white border border-brand-border hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-400">
                <div className="h-[220px] img-zoom">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-serif font-bold text-[22px] text-brand-dark mb-2.5 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-[15px] text-brand-text-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}