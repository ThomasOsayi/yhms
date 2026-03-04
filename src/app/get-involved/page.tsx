"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const roles = [
  {
    label: "Students",
    labelColor: "text-brand-teal",
    title: "Become a Student",
    desc: "Join a program track and get mentorship, hands-on experience, and a community that believes in your potential.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    btnClass: "bg-brand-teal-deep text-white hover:bg-brand-teal-dark hover:shadow-[0_8px_24px_rgba(4,47,46,0.25)]",
    btnText: "Apply as Student →",
  },
  {
    label: "Professionals",
    labelColor: "text-brand-orange",
    title: "Become a Mentor",
    desc: "Share your experience in healthcare. Guide a student, shape the next generation of health leaders, and give back.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop",
    btnClass: "bg-brand-orange text-white shadow-[0_2px_12px_rgba(249,115,22,0.25)] hover:shadow-[0_8px_24px_rgba(249,115,22,0.35)]",
    btnText: "Apply as Mentor →",
  },
  {
    label: "Leaders",
    labelColor: "text-[#6366F1]",
    title: "Campus Ambassador",
    desc: "Be the face of YHMS at your school. Organize events, recruit students, and lead your campus chapter.",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
    btnClass: "bg-transparent text-brand-dark border-2 border-brand-border hover:border-brand-teal hover:text-brand-teal",
    btnText: "Apply as Ambassador →",
  },
];

const faqs = [
  { q: "Do I need to be a health/science major?", a: "Nope! YHMS is open to anyone interested in health, wellness, and making an impact. All majors and backgrounds welcome." },
  { q: "How much time does it take?", a: "Most programs require a few hours per month. We know you're busy — YHMS is designed to fit around your schedule." },
  { q: "Is there a cost to join?", a: "YHMS is 100% free for students. We're a nonprofit — our goal is to remove barriers, not create them." },
  { q: "What if my school doesn't have a chapter?", a: "That's where Ambassadors come in! Apply to start a chapter at your campus. We'll give you everything you need to launch." },
];

export default function GetInvolvedPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="pt-36 pb-28">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-brand-teal mb-3.5">Get Involved</p>
            <h1 className="font-serif font-bold text-[clamp(34px,4.5vw,56px)] leading-[1.1] tracking-tight text-brand-dark">
              Find your <em className="italic text-brand-teal">role</em>
            </h1>
            <p className="text-lg text-brand-text-light max-w-[540px] mx-auto leading-relaxed mt-4">
              Whether you&apos;re a student, a professional, or someone who cares — there&apos;s a way for you to contribute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {roles.map((role) => (
              <div key={role.title} className="rounded-xl overflow-hidden bg-white border border-brand-border hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-400">
                <div className="h-60 relative img-zoom">
                  <Image src={role.img} alt={role.title} width={600} height={400} className="w-full h-full object-cover" />
                  <span className={`absolute top-4 left-4 bg-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[1px] ${role.labelColor}`}>{role.label}</span>
                </div>
                <div className="p-7">
                  <h3 className="font-serif font-bold text-2xl text-brand-dark mb-2.5 tracking-tight">{role.title}</h3>
                  <p className="text-[15px] text-brand-text-light leading-relaxed mb-5">{role.desc}</p>
                  <Link href="#" className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[15px] hover:-translate-y-0.5 transition-all ${role.btnClass}`}>{role.btnText}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-b border-brand-border">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[2.5px] text-brand-teal mb-3.5">FAQ</p>
              <h2 className="font-serif font-bold text-[clamp(28px,3vw,38px)] leading-[1.1] tracking-tight text-brand-dark">
                Questions?<br />We got you.
              </h2>
            </div>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-brand-border py-5 cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-brand-dark text-base leading-snug pr-4">{faq.q}</span>
                    <span className="text-[22px] text-brand-text-light flex-shrink-0">{openFaq === i ? "−" : "+"}</span>
                  </div>
                  <div className={`faq-answer ${openFaq === i ? "open" : ""}`}>
                    <p className="pt-3.5 text-[15px] text-brand-text-light leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}