import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'aazimaaif452@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative bg-brand-black text-brand-offwhite py-32 px-6 md:px-[48px] lg:px-[64px] min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[40vw] font-display font-semibold leading-none lowercase">Aaif</h2>
      </div>

      <div className="max-w-[1480px] mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          <h2 className="text-display text-5xl md:text-[100px] leading-[0.9] tracking-tighter lowercase">
            every product has a story.
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="space-y-8 max-w-xl">
              <p className="text-2xl md:text-3xl font-light opacity-65 leading-snug">
                I enjoy understanding how products, people, and businesses connect. If you’re working on something interesting, I’d be happy to hear about it.
              </p>
              
              <div>
                <a 
                  href="mailto:aazimaaif452@gmail.com"
                  className="group inline-flex items-center gap-2 text-xl md:text-2xl font-semibold text-brand-accent hover:text-white transition-all duration-300"
                >
                  <span className="border-b-2 border-brand-accent/40 group-hover:border-white transition-all pb-1">Get in touch</span>
                  <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-[1480px] mx-auto w-full pt-32 relative z-10">
        <div className="h-[1px] w-full bg-white/10 mb-12" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-4">
            <p className="text-[10px] lowercase font-semibold tracking-[0.3em] opacity-30">socials</p>
            <ul className="flex gap-8">
              <li>
                <a 
                  href="https://www.linkedin.com/in/aazim-aif-147bb9232/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-light hover:text-brand-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://www.behance.net/0bb78371" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-light hover:text-brand-accent transition-colors"
                >
                  Behance
                </a>
              </li>
            </ul>
          </div>

          <div className="text-left md:text-right space-y-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs font-semibold lowercase tracking-widest border-b border-brand-accent pb-1 hover:border-white transition-colors"
            >
              back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
