import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-[48px] lg:px-[64px] bg-white">
      <div className="max-w-[1480px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="w-full lg:w-1/2 aspect-[4/5] rounded-sm overflow-hidden bg-brand-offwhite"
          >
            <img 
              src="/assets/aazim-photo.jpg"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Right: Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-display text-4xl md:text-6xl mb-8 leading-tight tracking-tight lowercase"
            >
              connecting users, operations, and business goals.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 text-neutral-600 font-light text-lg md:text-xl leading-relaxed"
            >
              <p>
                I'm Aazim Aaif, a Product Designer focused on building systems, workflows, and digital experiences that bring together user needs, operational realities, and business objectives. I enjoy simplifying complex journeys and collaborating across teams to create products that are practical, scalable, and meaningful.
                <br />
                <br />
                Outside of design, I enjoy traveling, meeting people, and learning from the stories and experiences they share.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
