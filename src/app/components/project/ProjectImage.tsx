import { motion } from "motion/react";
import { useState } from "react";

export function ProjectImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <div className="absolute inset-0 skeleton-shimmer" aria-hidden="true" />}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        initial={false}
        animate={loaded ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(4px)" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      />
    </>
  );
}
