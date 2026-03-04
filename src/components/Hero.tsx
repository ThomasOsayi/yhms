"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  return (
    <section className="min-h-screen pt-[100px] relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-100px)]">
        <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-16 xl:pl-[max(32px,calc((100vw-1280px)/2+32px))] py-12 lg:py-16 lg:pr-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-serif font-extrabold text-[clamp(36px,5vw,68px)] leading-[1.05] tracking-tight text-brand-dark mb-5 sm:mb-6"
          >
            The Future of Health Starts With{" "}
            <em className="italic text-brand-teal font-bold">You</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-base sm:text-lg text-brand-text-light max-w-[440px] leading-relaxed mb-7 sm:mb-9"
          >
            We connect students to real-world health and medical experiences —
            from shadowing to community wellness projects. No white coat
            required.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="flex gap-3 sm:gap-3.5 flex-wrap"
          >
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-brand-teal-deep text-white font-semibold text-[15px] hover:bg-brand-teal-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(4,47,46,0.25)] transition-all"
            >
              Join as a Student →
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-transparent text-brand-dark font-semibold text-[15px] border-2 border-brand-border hover:border-brand-teal hover:text-brand-teal hover:-translate-y-0.5 transition-all"
            >
              Explore Programs
            </Link>
          </motion.div>
        </div>

        <div className="relative px-6 sm:p-8 lg:pr-8 lg:py-8 lg:pl-0 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1fr] md:grid-rows-2 gap-3 sm:gap-4 h-full min-h-[280px] sm:min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="col-span-2 md:col-span-1 md:row-span-2 rounded-xl overflow-hidden img-zoom h-[240px] sm:h-[300px] md:h-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=900&fit=crop&crop=faces"
                alt="Medical students"
                width={800}
                height={900}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease }}
              className="rounded-xl overflow-hidden img-zoom h-[160px] sm:h-[200px] md:h-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop"
                alt="Community health"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease }}
              className="rounded-xl overflow-hidden img-zoom h-[160px] sm:h-[200px] md:h-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop"
                alt="Doctor mentorship"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}