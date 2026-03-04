export default function ContactPage() {
  return (
    <section className="pt-36 pb-28">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-brand-teal mb-3.5">Contact Us</p>
          <h1 className="font-serif font-bold text-[clamp(34px,4.5vw,56px)] leading-[1.1] tracking-tight text-brand-dark">
            Let&apos;s <em className="italic text-brand-teal">connect</em>
          </h1>
          <p className="text-lg text-brand-text-light max-w-[540px] mx-auto leading-relaxed mt-4">
            Got questions? Want to partner? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          <div>
            <h3 className="font-serif font-bold text-[28px] text-brand-dark mb-4">Reach out anytime</h3>
            <p className="text-brand-text-light text-base leading-relaxed mb-9">
              We&apos;re always looking for new mentors, partners, and supporters. Whether you want to learn more or collaborate, drop us a line.
            </p>

            <div className="flex flex-col gap-3.5">
              {[
                { icon: "✉", label: "Email", value: "hello@yhms.org" },
                { icon: "📍", label: "Based In", value: "Los Angeles, California" },
                { icon: "📲", label: "Social", value: "@yhms on Instagram & TikTok" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-brand-border">
                  <div className="w-[46px] h-[46px] rounded-xl bg-brand-teal-deep text-brand-teal-light flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-brand-text-light font-semibold uppercase tracking-[1px]">{item.label}</div>
                    <div className="font-semibold text-brand-dark text-[15px] mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden h-80 mt-8">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=400&fit=crop" alt="Team working" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-10 border border-brand-border shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-[0.5px] mb-1.5">First Name</label>
                <input type="text" placeholder="Your first name" className="w-full px-4 py-3 border-2 border-brand-border rounded-lg font-sans text-[15px] text-brand-dark bg-brand-cream outline-none focus:border-brand-teal focus:shadow-[0_0_0_4px_rgba(13,148,136,0.08)] transition-all" />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-[0.5px] mb-1.5">Last Name</label>
                <input type="text" placeholder="Your last name" className="w-full px-4 py-3 border-2 border-brand-border rounded-lg font-sans text-[15px] text-brand-dark bg-brand-cream outline-none focus:border-brand-teal focus:shadow-[0_0_0_4px_rgba(13,148,136,0.08)] transition-all" />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-[0.5px] mb-1.5">Email</label>
              <input type="email" placeholder="you@email.com" className="w-full px-4 py-3 border-2 border-brand-border rounded-lg font-sans text-[15px] text-brand-dark bg-brand-cream outline-none focus:border-brand-teal focus:shadow-[0_0_0_4px_rgba(13,148,136,0.08)] transition-all" />
            </div>
            <div className="mb-5">
              <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-[0.5px] mb-1.5">I am a...</label>
              <select className="w-full px-4 py-3 border-2 border-brand-border rounded-lg font-sans text-[15px] text-brand-dark bg-brand-cream outline-none focus:border-brand-teal focus:shadow-[0_0_0_4px_rgba(13,148,136,0.08)] transition-all">
                <option value="">Select one</option>
                <option>Student (High School)</option>
                <option>Student (College)</option>
                <option>Healthcare Professional / Mentor</option>
                <option>Organization / Partner</option>
                <option>Supporter / Donor</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="block text-[13px] font-bold text-brand-dark uppercase tracking-[0.5px] mb-1.5">Message</label>
              <textarea placeholder="Tell us what's on your mind..." rows={5} className="w-full px-4 py-3 border-2 border-brand-border rounded-lg font-sans text-[15px] text-brand-dark bg-brand-cream outline-none resize-y focus:border-brand-teal focus:shadow-[0_0_0_4px_rgba(13,148,136,0.08)] transition-all" />
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-teal-deep text-white font-semibold text-[15px] hover:bg-brand-teal-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(4,47,46,0.25)] transition-all">
              Send Message →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}