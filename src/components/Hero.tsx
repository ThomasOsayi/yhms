interface HeroProps {
  title: string;
  subtitle?: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="bg-zinc-100 py-16 dark:bg-zinc-900 md:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
