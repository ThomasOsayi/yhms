import Image from "next/image";

interface ImageBannerProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageBanner({ src, alt, className = "" }: ImageBannerProps) {
  return (
    <section className={`relative h-64 w-full overflow-hidden md:h-80 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
      />
    </section>
  );
}
