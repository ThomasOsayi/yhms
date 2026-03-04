import Link from "next/link";

const footerLinks = {
  Programs: [
    { label: "High School Track", href: "/programs" },
    { label: "College Track", href: "/programs" },
    { label: "Ambassador Program", href: "/programs" },
  ],
  "Get Involved": [
    { label: "Become a Student", href: "/get-involved" },
    { label: "Become a Mentor", href: "/get-involved" },
    { label: "Campus Ambassador", href: "/get-involved" },
  ],
  Organization: [
    { label: "Our Impact", href: "/impact" },
    { label: "Contact Us", href: "/contact" },
    { label: "Donate", href: "#" },
  ],
};

const socials = ["IG", "TT", "YT", "IN"];

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-[72px] pb-8">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-[42px] h-[42px] bg-teal-deep rounded-xl flex items-center justify-center text-teal-light font-serif font-extrabold text-[17px]">
                Y
              </div>
              <span className="font-serif font-bold text-xl text-white tracking-tight">
                YHMS
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-[300px]">
              Youth in Health & Medical Sciences. A 501(c)(3) nonprofit
              connecting students with real health career experiences and
              community wellness.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold uppercase tracking-[2px] text-white/30 mb-4">
                {title}
              </h4>
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-white/60 text-sm py-1.5 hover:text-teal-light transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-7 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/30">
          <span>
            © 2026 Youth in Health & Medical Sciences. All rights reserved.
          </span>
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <div key={s}>
                <div className="w-[38px] h-[38px] rounded-[10px] bg-white/5 flex items-center justify-center text-white/45 text-[13px] font-bold hover:bg-teal hover:text-white transition-all cursor-pointer">
                  {s}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}