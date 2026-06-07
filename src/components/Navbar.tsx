import { motion, useScroll, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { Copy, Check, ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const emailAddress = 'aazimaaif452@gmail.com';

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: 'about', href: isHomePage ? '#about' : '/#about' },
    { name: 'works', href: isHomePage ? '#work' : '/#work' },
    { name: 'contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-[48px] lg:px-[64px]',
          (isScrolled || isMobileMenuOpen) && 'bg-brand-offwhite/85 backdrop-blur-md py-4 border-b border-brand-black/5'
        )}
      >
        <div className="max-w-[1480px] mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-12">
            <Link 
              to="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display text-2xl font-semibold tracking-tighter hover:opacity-75 transition-opacity"
            >
              Aa.
            </Link>
            <div className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm tracking-tight font-medium text-brand-black/60 hover:text-brand-black transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-8">
            <div className="hidden sm:flex items-center gap-3 bg-brand-black/[0.03] hover:bg-brand-black/[0.06] border border-brand-black/5 py-1.5 px-3 rounded-sm transition-all text-xs font-mono">
              <a
                href={`mailto:${emailAddress}`}
                className="text-brand-black/80 hover:text-brand-black hover:opacity-80 font-medium tracking-tight transition-colors"
              >
                {emailAddress}
              </a>
              <button
                onClick={handleCopyEmail}
                className="text-brand-black/40 hover:text-brand-black transition-colors flex items-center justify-center p-0.5 relative"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <span className="flex items-center text-[10px] text-brand-indicator font-mono font-medium tracking-tight">
                    copied
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            
            <a 
              href="https://example.com/aazimaaif-resume" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex text-sm font-semibold border-b border-brand-black pb-0.5 hover:opacity-70 hover:border-brand-black/70 items-center gap-1 transition-all"
            >
              Resume
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center p-2 text-brand-black focus:outline-none hover:opacity-70 transition-opacity"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full screen mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-offwhite z-40 flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-8 max-w-sm mt-16">
              <p className="text-[10px] lowercase font-semibold tracking-[0.3em] opacity-30 select-none">navigation</p>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-5xl font-display font-semibold lowercase text-brand-black/40 hover:text-brand-black transition-colors tracking-tighter"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="h-[1px] w-full bg-brand-black/10 my-4" />
              
              <div className="space-y-4">
                <p className="text-[10px] lowercase font-semibold tracking-[0.3em] opacity-30 select-none">contact</p>
                <div className="flex items-center gap-3 bg-brand-black/[0.03] border border-brand-black/5 py-3 px-4 rounded-sm justify-between w-full">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm font-mono text-brand-black/80 hover:text-brand-black font-medium tracking-tight transition-colors truncate"
                  >
                    {emailAddress}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="text-brand-black/40 hover:text-brand-black transition-colors flex items-center justify-center p-1 relative shrink-0"
                    title="Copy email"
                  >
                    {copied ? (
                      <span className="text-[10px] text-brand-indicator font-mono font-medium tracking-tight">
                        copied
                      </span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <a 
                  href="https://example.com/aazimaaif-resume" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold border-b border-brand-black pb-0.5 hover:opacity-70 hover:border-brand-black/70 inline-flex items-center gap-1 transition-all mt-2"
                >
                  Resume
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
