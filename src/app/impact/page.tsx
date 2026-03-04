import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

const mosaic = [
  { label: "Community Health Screenings", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=700&fit=crop" },
  { label: "Student Workshops", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=350&fit=crop" },
  { label: "Mentor Matching Events", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=350&fit=crop" },
  { label: "Campus Chapter Launches", img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=350&fit=crop" },
  { label: "Clinical Shadowing", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=350&fit=crop" },
];

const stories = [
  { quote: "YHMS connected me with a physician assistant who showed me what life after school actually looks like. That one conversation changed my entire career plan.", name: "Maya R.", role: "College Track • UCLA", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
  { quote: "As a mentor, I get to give back in a way that actually matters. These students are hungry for guidance and it's incredibly rewarding.", name: "Dr. James K.", role: "Mentor • Emergency Medicine", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
  { quote: "I started a chapter at my school with 5 people. Now we have over 40 members and just ran our first community health screening event.", name: "Anthony L.", role: "Ambassador • Howard University", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
  { quote: "As a first-gen student, I didn't have anyone to ask about pre-med. YHMS gave me a whole community. I don't feel lost anymore.", name: "Sofia M.", role: "High School Track • LA", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
];

const projects = [
  { title: "Community Health Screenings", desc: "Students organized free blood pressure and glucose screenings in underserved neighborhoods, reaching hundreds of community members.", img: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=350&fit=crop" },
  { title: "Wellness Education Series", desc: "A student-led social media campaign debunking health myths reached thousands of young people across Instagram and TikTok.", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=350&fit=crop" },
  { title: "Pre-Health Resource Guide", desc: "Ambassadors created an open-source guide for first-generation pre-health students navigating applications and career planning.", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=350&fit=crop" },
];

export default function ImpactPage() {
  return (
    <>
      <section className="pt-36 pb-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-brand-teal mb-3.5">Community Impact</p>
            <h1 className="font-serif font-bold text-[clamp(34px,4.5vw,56px)] leading-[1.1] tracking-tight text-brand-dark">
              See what we&apos;re <em className="italic text-brand-teal">building</em>
            </h1>
            <p className="text-lg text-brand-text-light max-w-[540px] mx-auto leading-relaxed mt-4">
              From campus chapters to community health events — YHMS students are making a real difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[300px_300px] gap-4 mt-16">
            {mosaic.map((item, i) => (
              <div key={item.label} className={`rounded-xl overflow-hidden relative img-zoom ${i === 0 ? "row-span-2" : ""}`}>
                <Image src={item.img} alt={item.label} width={600} height={i === 0 ? 700 : 350} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <span className="text-white font-semibold text-[15px]">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-brand-teal mb-3.5">Student Voices</p>
            <h2 className="font-serif font-bold text-[clamp(34px,4.5vw,56px)] leading-[1.1] tracking-tight text-brand-dark">
              In their <em className="italic text-brand-teal">own words</em>
            </h2>
            <p className="text-lg text-brand-text-light max-w-[540px] mx-auto leading-relaxed mt-4">
              Real stories from students and mentors in our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story) => (
              <div key={story.name} className="bg-white rounded-xl p-9 border border-brand-border hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] transition-all">
                <blockquote className="font-serif text-lg italic text-brand-dark leading-relaxed mb-6 pl-6 border-l-[3px] border-brand-teal">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-[14px] overflow-hidden">
                    <Image src={story.avatar} alt={story.name} width={100} height={100} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-dark text-[15px]">{story.name}</div>
                    <div className="text-[13px] text-brand-text-light mt-0.5">{story.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-teal-deep text-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-brand-teal-light mb-3.5">Student Projects</p>
            <h2 className="font-serif font-bold text-[clamp(34px,4vw,48px)] leading-[1.1] tracking-tight">
              Impact <em className="italic text-brand-teal-light">in action</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {projects.map((project) => (
              <div key={project.title} className="bg-white/[0.06] border border-white/[0.08] rounded-xl overflow-hidden hover:-translate-y-1 hover:bg-white/10 transition-all">
                <div className="h-[200px] img-zoom">
                  <Image src={project.img} alt={project.title} width={600} height={350} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="font-serif font-bold text-xl mb-2">{project.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}