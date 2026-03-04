import Link from "next/link";

interface CTABannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  title = "Get Involved",
  description = "Join us in making a difference.",
  buttonText = "Contact Us",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="bg-zinc-900 py-16 text-zinc-50 dark:bg-zinc-800">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        <p className="mt-2 text-zinc-300">{description}</p>
        <Link
          href={buttonHref}
          className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-medium text-zinc-900 transition hover:bg-zinc-100"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
