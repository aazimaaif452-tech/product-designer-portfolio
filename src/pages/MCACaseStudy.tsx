import { motion } from 'motion/react';
import { useRef, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectImage from '../components/ProjectImage';

const MCA_METADATA = {
  title: "MCA Player Registration Portal",
  subtitle: "Designing a guided onboarding experience for seasonal cricket player registrations and auction participation.",
  details: [
    { label: "Industry", value: "Sports Technology" },
    { label: "Role", value: "Product Designer" },
    { label: "Platform", value: "Mobile + Desktop Web App" },
    { label: "Focus", value: "Onboarding • Registration UX • Adaptive Forms" }
  ]
};
export default function MCACaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-offwhite min-h-screen">
      <main className="max-w-[1480px] mx-auto px-6 md:px-[48px] lg:px-[64px] pt-40 pb-32">
        {/* Back Button within the grid margin */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="group inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-brand-black/5 hover:bg-brand-black hover:text-white transition-all pointer-events-auto"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold lowercase tracking-widest leading-none">back to projects</span>
          </Link>
        </div>

        {/* Hero Section */}
        <header className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10vw] md:text-[8vw] font-display font-semibold leading-none tracking-tighter mb-8"
          >
            {MCA_METADATA.title}
          </motion.h1>
          
          <div className="space-y-12">
            <div className="max-w-4xl">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl font-light leading-snug text-brand-black/80"
              >
                {MCA_METADATA.subtitle}
              </motion.p>
            </div>
            
            {/* Horizontal details with divider */}
            <div className="border-t border-brand-black/25 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-[10px] lowercase font-semibold tracking-[0.3em] opacity-40 mb-2">role</p>
                <p className="text-base font-medium tracking-tight">Product Designer</p>
              </div>
              <div>
                <p className="text-[10px] lowercase font-semibold tracking-[0.3em] opacity-40 mb-2">year</p>
                <p className="text-base font-medium tracking-tight">2025</p>
              </div>
              <div>
                <p className="text-[10px] lowercase font-semibold tracking-[0.3em] opacity-40 mb-2">focus</p>
                <p className="text-base font-medium tracking-tight">Onboarding • Registration UX • Adaptive Forms</p>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Image Section */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <ProjectImage 
              src="/assets/mca/mca-hero.png" 
              alt="Onboarding collage + success screen mockup showing cricket-inspired UI elements." 
              aspectRatio="sixteen-nine"
            />
            <motion.div 
              className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-brand-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <ArrowUpRight className="text-brand-black w-6 h-6" />
            </motion.div>
          </motion.div>
        </section>

        {/* The Challenge Callout */}
        <section className="mb-40">
          <motion.div 
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            className="bg-[#C96A3D] p-8 md:p-16 rounded-sm text-white relative overflow-hidden"
          >
            <div className="relative z-10 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-display font-semibold leading-tight max-w-4xl text-white">
                The challenge wasn’t just collecting player information — it was designing a long-form registration process that players would actually complete without friction or drop-offs.
              </h2>
            </div>
          </motion.div>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Main Narrative */}
          <div className="lg:col-span-8 space-y-40">
            
            {/* 00 - Overview */}
            <section id="overview" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">00 — overview</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">The Context</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-8">
                <p>
                  Mumbai Cricket Association (MCA) required a seasonal player registration platform where registered players could verify eligibility, complete onboarding, and register for auction participation using their MCA registration credentials.
                </p>
                <p>
                  The submitted information later contributed toward auction eligibility and base-price calculation, making the onboarding flow both operationally important and highly detail-oriented.
                </p>
              </div>
            </section>

            {/* 01 - The Challenge */}
            <section id="challenge" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">01 — the challenge</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">Complexity at Scale</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-8">
                <p>
                  The registration journey involved multiple verification steps, profile setup stages, and role-specific questions. Since the process was naturally long, the experience risked feeling overwhelming and transactional.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                  {[
                    "Simplify a lengthy registration journey",
                    "Reduce cognitive overload during onboarding",
                    "Maintain motivation throughout the process",
                    "Create a structured yet immersive experience",
                    "Support different player profiles dynamically"
                  ].map((item) => (
                    <div key={item} className="flex gap-4 p-6 bg-white border border-brand-black/5 rounded-sm">
                      <CheckCircle2 className="w-6 h-6 text-brand-indicator shrink-0" />
                      <p className="text-lg font-medium tracking-tight leading-tight">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 02 - Design Approach */}
            <section id="approach" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">02 — design approach</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">Guided Journey</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-8">
                <p>
                  Instead of treating registration as a transactional form-filling process, the experience was designed to feel closer to a guided player onboarding journey.
                </p>
                <p>
                  The registration flow was intentionally broken into smaller stages to reduce cognitive load and make progression feel more achievable. The visual tone, copywriting, and interactions were designed to feel aspirational and cricket-driven rather than administrative.
                </p>
              </div>
              <ProjectImage 
                src="/assets/mca/mca-diagram.png" 
                alt="FLOW DIAGRAM — Onboarding, Verification, Role Forms, and Base Price." 
                aspectRatio="video"
                fit="contain"
              />
            </section>

            {/* 03 - Mobile Experience */}
            <section id="mobile" className="space-y-24">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">03 — mobile experience</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">First-Class Design</h3>
              </div>
              
              <div className="space-y-16">
                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold italic">Guided Onboarding</h4>
                  <p className="text-xl font-light leading-relaxed text-brand-black/70">
                    The onboarding screens introduced the experience using cricket-inspired language and visual storytelling. Instead of presenting registration as a formal administrative task, the onboarding positioned the process as the beginning of a player’s cricketing journey.
                  </p>
                </div>
                <ProjectImage
                   src="/assets/mca/mca-onboarding.png"
                   alt="Guided onboarding experience"
                   aspectRatio="sixteen-nine"
                />
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold italic">Verification & Trust</h4>
                  <p className="text-xl font-light leading-relaxed text-brand-black/70">
                    Players verified themselves using their MCA registration number, registered mobile number, and OTP authentication. The flow was designed to feel secure while reducing unnecessary friction.
                  </p>
                </div>
                <ProjectImage 
                  src="/assets/mca/mca-verification.png" 
                  alt="OTP + Verification Screen Montage showing secure OTP validation." 
                  aspectRatio="video"
                />
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold italic">Structured Registration Flow</h4>
                  <p className="text-xl font-light leading-relaxed text-brand-black/70">
                    Instead of presenting all questions at once, the registration process used a stepper-based flow to progressively collect information.
                  </p>
                </div>
                <ProjectImage 
                  src="/assets/mca/mca-stepper.png" 
                  alt="Stepper-based UI highlights representing step-by-step registration stages." 
                  aspectRatio="video"
                />
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <ProjectImage
                src="/assets/mca/mca-registration-1.png"
                alt="Registration flow detail 1"
                className="h-[650px]"
                />
                <ProjectImage
                src="/assets/mca/mca-registration-2.png"
                alt="Registration flow detail 2"
                className="h-[650px]"
                />
                </div>
                
                </div>
                
              <div className="space-y-12">
                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold italic">Adaptive Role-Based Forms</h4>
                  <p className="text-xl font-light leading-relaxed text-brand-black/70">
                    The registration flow dynamically adjusted based on the player’s selected proficiency and role. Different question sets were shown for batsmen, bowlers, all-rounders, and wicketkeepers.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <ProjectImage 
                    src="/assets/mca/mca-bowler.png" 
                    alt="Bowler specific dynamic eligibility forms" 
                    className="h-[650px]"
                  />
                  <ProjectImage 
                    src="/assets/mca/mca-batsman.png" 
                    alt="Batsman specific dynamic eligibility forms" 
                    className="h-[650px]"
                  />
                </div>
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold italic">Final Auction Reveal</h4>
                  <p className="text-xl font-light leading-relaxed text-brand-black/70">
                    Instead of ending the process with a generic confirmation screen, the registration concluded with the player’s calculated auction base price.
                  </p>
                </div>
                <ProjectImage 
                  src="/assets/mca/mca-valuation.png" 
                  alt="Success Screen (Player Registration Base Price Calculation)" 
                  className="h-[650px]"
                  className="bg-transparent"
                />
              </div>
            </section>

          </div>

          {/* Sidebar / Table of Contents / Additional Info */}
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-40 h-fit space-y-16">
             <div className="space-y-8">
               <p className="text-[10px] uppercase font-black tracking-widest opacity-30">Inside the Process</p>
               <nav className="space-y-4">
                 {[
                   { label: "Overview", id: "overview" },
                   { label: "The Challenge", id: "challenge" },
                   { label: "Design Approach", id: "approach" },
                   { label: "Mobile Experience", id: "mobile" },
                   { label: "Cross-Device UX", id: "cross-device" },
                   { label: "Reflection", id: "reflection" }
                 ].map((link) => (
                   <a 
                    key={link.id} 
                    href={`#${link.id}`}
                    className="block text-sm font-medium opacity-60 hover:opacity-100 hover:text-brand-black transition-all"
                   >
                     {link.label}
                   </a>
                 ))}
               </nav>
             </div>

             <div className="p-8 bg-white border border-brand-black/5 rounded-sm space-y-6">
                <p className="text-[10px] uppercase font-black tracking-widest opacity-30">Key Metric</p>
                <div className="space-y-1">
                  <p className="text-4xl font-display font-semibold">5000+</p>
                  <p className="text-sm font-light opacity-60">Player registrations supported through a structured onboarding, verification, and eligibility workflow.</p>
                </div>
             </div>
          </aside>
        </div>

        {/* 04 - Cross Device */}
        <section id="cross-device" className="mt-24 space-y-4">
          <div className="max-w-4xl space-y-6">
            <span className="text-display text-4xl opacity-10 block">04 — cross-device experience</span>
            <h3 className="text-5xl font-display font-semibold tracking-tight">Fluid Continuity</h3>
            <p className="text-xl font-light leading-relaxed text-brand-black/70">
              Although the registration flow was primarily optimized for mobile users, the experience was also adapted for larger screens while preserving the same sense of progression and immersion. 
              On desktop, more breathing room improved readability, while cricket-inspired backgrounds created atmosphere.
            </p>
          </div>
          <div className="space-y-2">
            <ProjectImage
              src="/assets/mca/mca-responsive-1.png"
              alt="Responsive experience 1"
              aspectRatio="sixteen-nine"
              className="max-h-[500px]"
                />

            <ProjectImage
            src="/assets/mca/mca-responsive-2.png"
            alt="Responsive experience 2"
            aspectRatio="sixteen-nine"
            className="max-h-[500px]"
            />

            <ProjectImage
            src="/assets/mca/mca-responsive-3.png"
            alt="Responsive experience 3"
            aspectRatio="sixteen-nine"
            className="max-h-[500px]"
            />
            </div>
        </section>

        {/* 06 - Reflection */}
        <section id="reflection" className="mt-40 mb-32 border-t border-brand-black/5 pt-32">
          <div className="max-w-4xl space-y-12">
            <div className="space-y-4">
              <span className="text-display text-4xl opacity-10 block">06 — reflection</span>
              <h3 className="text-5xl font-display font-semibold tracking-tight">Closing Thoughts</h3>
            </div>
            <div className="text-2xl md:text-3xl font-light leading-snug text-brand-black/80 space-y-12">
              <p>
                This project reinforced how long-form onboarding experiences can feel significantly lighter when users are given clear progression, contextual guidance, and emotional feedback throughout the journey.
              </p>
              <p>
                The most impactful design decision was transforming a static registration flow into a guided onboarding experience tailored to different player profiles and screen sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Next Project Footer Link */}
        <section className="mt-40">
           <Link 
            to="/works/ken42-alumni-experience" 
            className="group block p-12 md:p-24 bg-brand-black text-white hover:bg-brand-accent hover:text-brand-black transition-all duration-700 ease-premium"
           >
             <p className="text-[10px] lowercase font-semibold tracking-[0.3em] opacity-40 mb-4 group-hover:opacity-100 transition-opacity">next case study</p>
             <div className="flex justify-between items-end">
               <h4 className="text-5xl md:text-8xl font-display font-semibold tracking-tighter">Alumni Experience Platform</h4>
               <ArrowUpRight className="w-16 h-16 md:w-32 md:h-32 mb-2 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700" />
             </div>
           </Link>
        </section>
      </main>
    </div>
  );
}
