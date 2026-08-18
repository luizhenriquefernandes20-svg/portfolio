import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

const BLOBS = [
  { color: "#7546e8", size: 620, top: "-8%", left: "-6%", duration: 22 },
  { color: "#2d1c7f", size: 560, top: "38%", left: "62%", duration: 26 },
  { color: "#c8b3f6", size: 480, top: "68%", left: "-4%", duration: 30 },
];

export function BackgroundVideo() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  // Sensação de "objeto vivo" acompanhando a rolagem — sutil o bastante para
  // não distrair do conteúdo, mas perceptível como camada de profundidade.
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -140]);
  const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.2]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-background">
      {/* Blobs de gradiente com as cores da paleta, se movendo lentamente e
          se misturando (mix-blend-mode) para reforçar o efeito de "tinta"
          fluida por trás da esfera do vídeo. */}
      {!reduceMotion &&
        BLOBS.map((blob) => (
          <motion.div
            key={blob.color}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: blob.size,
              height: blob.size,
              top: blob.top,
              left: blob.left,
              background: blob.color,
              filter: "blur(120px)",
              opacity: 0.16,
              mixBlendMode: "screen",
            }}
            animate={{
              x: [0, 40, -30, 0],
              y: [0, -30, 20, 0],
            }}
            transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

      <motion.div
        drag
        dragElastic={0.15}
        dragConstraints={{ top: -60, bottom: 60, left: -60, right: 60 }}
        dragSnapToOrigin
        style={{ y, scale, width: "130%", height: "130%", marginLeft: "-15%", marginTop: "-15%" }}
        className="pointer-events-auto cursor-grab active:cursor-grabbing"
      >
        <video
          className="hidden sm:block h-full w-full object-cover opacity-25 motion-reduce:hidden pointer-events-none"
          src="https://framerusercontent.com/assets/Ok1lIhmkjhul4uVV0X2hRy4MJQ.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-overlay)" }} />
    </div>
  );
}
