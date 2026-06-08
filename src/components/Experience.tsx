import { motion } from 'motion/react';

const experiences = [
  { company: 'Turbostart', role: 'Associate Product Designer', year: 'December 2024 — May 2026' },
  { company: 'Awign Enterprises Pvt Ltd', role: 'Product Design Intern', year: 'July 2024 — December 2024' },
  { company: 'Bblewrap Innovations Pvt Ltd', role: 'UIUX Design Intern', year: 'March 2024 — July 2024' },
  { company: 'Touchworld Technology LLC', role: 'UI Design Intern', year: 'August 2023 — October 2023' },
  { company: 'Udhaivi healthcare Pvt. Ltd', role: 'UI Design Intern', year: 'September 2022 — December 2022' },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-[48px] lg:px-[64px] bg-white">
      <div className="max-w-[1480px] mx-auto">
        <div className="space-y-12">
          <div className="flex items-center justify-between border-b border-brand-black/10 pb-4">
            <span className="text-sm lowercase font-semibold tracking-[0.25em] opacity-50">experience</span>
            <span className="text-sm lowercase font-semibold tracking-[0.25em] opacity-50">period</span>
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="flex justify-between items-center py-6">
                <div>
                  <h4 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:pl-4 transition-all duration-500">
                    {exp.company}
                  </h4>
                  <p className="text-base opacity-50 group-hover:pl-4 transition-all duration-500">{exp.role}</p>
                </div>
                <span className="text-sm font-normal opacity-60 italic">{exp.year}</span>
              </div>
              <motion.div 
                className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-accent group-hover:w-full transition-all duration-700 ease-premium"
              />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-black/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
