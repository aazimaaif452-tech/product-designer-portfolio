import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-end px-6 md:px-[48px] lg:px-[64px] pt-32 pb-[22vh] overflow-hidden bg-brand-offwhite">
      {/* Background Orb */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-brand-accent/5 blur-[150px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-[1480px] mx-auto w-full relative flex flex-col justify-end">
        <div className="space-y-6 md:space-y-8 text-left w-full">
          {/* Top Copy */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs sm:text-sm lg:text-[14px] font-medium tracking-tight opacity-75 lg:whitespace-nowrap lg:overflow-visible">
              I'm Aazim Aaif — a product designer crafting thoughtful digital experiences with clarity, structure, and purpose.
            </p>
          </motion.div>

          {/* Main Heading */}
          <div className="overflow-visible">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
              className="text-[17vw] sm:text-[13vw] md:text-[12vw] lg:text-[10.5vw] xl:text-[9.8vw] text-display font-bold leading-none mb-0 tracking-tighter lowercase md:whitespace-nowrap"
            >
              product designer
            </motion.h1>
          </div>

          {/* Bottom copy + CTA */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-16 pt-2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-xl md:max-w-2xl"
            >
              <p className="text-base md:text-lg font-normal leading-relaxed tracking-tight text-brand-black/70">
                Designing products, systems, and workflows that connect users, operations, and business goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex shrink-0 w-fit ml-auto"
            >
              <a
                href="#work"
                className="group relative px-8 py-4 md:px-10 md:py-5 bg-brand-accent text-brand-black rounded-sm overflow-hidden flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 w-fit"
              >
                <span className="relative z-10 font-bold lowercase tracking-widest text-sm md:text-base">view my work</span>
                <ArrowDownRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
