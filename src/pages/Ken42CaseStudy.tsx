import { motion } from 'motion/react';
import { useRef, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, SearchCode, LayoutTemplate, Users, MessageSquare, Zap, MonitorSmartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectImage from '../components/ProjectImage';

const KEN42_METADATA = {
  title: "Alumni Experience Platform",
  subtitle: "Designing a scalable alumni engagement ecosystem for institutions to strengthen networking, mentorship, events, and community-driven engagement.",
  details: [
    { label: "Role", value: "Product Designer" },
    { label: "Platforms", value: "Web + Responsive Layouts" },
    { label: "Team", value: "PMs, Developers, Design Team" },
    { label: "Focus", value: "Ecosystem Design • Mentorship • Design QA" }
  ]
};

export default function Ken42CaseStudy() {
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
            {KEN42_METADATA.title}
          </motion.h1>
          
          <div className="space-y-12">
            <div className="max-w-4xl">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl font-light leading-snug text-brand-black/80"
              >
                {KEN42_METADATA.subtitle}
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
                <p className="text-base font-medium tracking-tight">2026</p>
              </div>
              <div>
                <p className="text-[10px] lowercase font-semibold tracking-[0.3em] opacity-40 mb-2">focus</p>
                <p className="text-base font-medium tracking-tight">White-label Architecture • Modular Frameworks</p>
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
              src="/assets/alumni/alumni-hero.jpg" 
              alt="UI screens, diagrams, and annotations showcasing the alumni ecosystem modules." 
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

        {/* Highlight Callout - Ecosystem Focused */}
        <section className="mb-40">
          <motion.div 
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            className="bg-brand-black p-8 md:p-16 rounded-sm text-white relative overflow-hidden"
          >
            <div className="relative z-10 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-display font-semibold leading-tight max-w-4xl text-white">
                Rather than designing isolated modules, we approached the platform as a connected ecosystem—where onboarding, networking, and mentorship work in unison.
              </h2>
            </div>
          </motion.div>
        </section>

        {/* Content Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-8 space-y-40">
            
            {/* 01 - The Challenge */}
            <section id="challenge" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">01 — the challenge</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">Closing the Gap</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-8">
                <p>
                  Institutions were struggling with low alumni engagement, fragmented mentorship systems, outdated alumni experiences, and weak networking opportunities.
                </p>
                <p>
                  The goal was to create a scalable alumni relationship ecosystem that could support multiple institutions through reusable modules, white-label branding, and long-term engagement experiences.
                </p>
              </div>
            </section>

            {/* 02 - Ecosystem Design */}
            <section id="ecosystem" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">02 — alumni relationship ecosystem</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">Connected Flow</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70">
                <p>
                  The platform was approached as a journey where onboarding, networking, mentorship, events, and groups worked together. We moved away from siloing features to creating a continuous engagement loop.
                </p>
              </div>
              <ProjectImage 
                src="/assets/alumni/alumni-diagram.jpg" 
                alt="Ecosystem Flow Diagram - Visualizing the interconnected modules and user transitions." 
                aspectRatio="video"
              />
            </section>

            {/* 03 - Onboarding */}
            <section id="onboarding" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">03 — onboarding & verification</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">Establishing Trust</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-8">
                <p>
                  The onboarding flow was designed to establish trust and institutional authenticity. The six-stage process focused on verification while maintaining visual progression.
                </p>

              </div>
              <div className="space-y-6">
              <ProjectImage 
                src="/assets/alumni/alumni-onboarding-1.jpg" 
                alt="Onboarding Journey Screens - Establishing trust and institutional authenticity." 
                aspectRatio="video"
              />

              <ProjectImage 
              src="/assets/alumni/alumni-onboarding-2.jpg"
              alt="Alumni onboarding screens"
              aspectRatio="video"
              />
              </div>
            </section>

            {/* 04 - Networking */}
            <section id="networking" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">04 — networking experience</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">Meaningful Discovery</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-12">
                <p>
                  The networking module focused on alumni discovery, profile visibility, and meaningful connections. Key features included search filters, messaging flows, and "Willingness-to-help" indicators.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-4">
                     <Users className="w-8 h-8 text-brand-accent" />
                     <p className="text-lg font-bold">Alumni Discovery</p>
                     <p className="text-sm opacity-60">Smart search and discovery based on shared interests and professional history.</p>
                   </div>
                   <div className="space-y-4">
                     <MessageSquare className="w-8 h-8 text-brand-accent" />
                     <p className="text-lg font-bold">Messaging Flows</p>
                     <p className="text-sm opacity-60">Secure, internal communication channels for professional inquiries.</p>
                   </div>
                </div>
              </div>
              <div className="space-y-6">
              <ProjectImage 
                src="/assets/alumni/alumni-networking-1.jpg" 
                alt="Networking Experience Screens / Annotations - Meaningful alumni discovery and connection flows." 
                aspectRatio="video"
              />

              <ProjectImage
              src="/assets/alumni/alumni-networking-2.jpg"
              alt="Alumni networking features"
              aspectRatio="video"
               />
               </div>
            </section>

            {/* 05 - Mentorship */}
            <section id="mentorship" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">05 — mentorship experience</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">Evolving Relationships</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70">
                <p>
                  One of the more complex product challenges involved deciding how mentorship interactions should emerge from networking relationships while still maintaining mentorship as an independent module.
                </p>
              </div>
              <ProjectImage 
                src="/assets/alumni/alumni-mentorship.jpg" 
                alt="Mentorship Experience Screens / Annotations - Evolving relationships module." 
                aspectRatio="video"
              />
            </section>

            {/* 06 - Community Engagement */}
            <section id="community" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">06 — community engagement</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">Recurring Loops</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70">
                <p>
                  Events and groups were designed to encourage recurring alumni participation beyond one-time networking. These modules helped institutions create stronger community engagement loops.
                </p>
              </div>
              <div className="space-y-6">
              <ProjectImage 
                src="/assets/alumni/alumni-community-1.jpg"
                alt="Events & Groups Screens Montage - Recurring engagement loops." 
                aspectRatio="video"
              />

              <ProjectImage
              src="/assets/alumni/alumni-community-2.jpg"
              alt="Community groups"
              aspectRatio="video"
              />

              <ProjectImage
              src="/assets/alumni/alumni-community-3.jpg"
              alt="Community discussions"
              aspectRatio="video"
              />

              <ProjectImage
              src="/assets/alumni/alumni-community-4.jpg"
              alt="Community engagement"
              aspectRatio="video"
              />
              </div>
            </section>

            {/* 07 - Technical Constraints */}
            <section id="technical" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">07 — responsive & technical constraints</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">White-Label Scalability</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-12">
                <p>
                  The project involved several implementation and scalability constraints—most notably the Salesforce LWC implementation and dynamic institution branding.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Salesforce LWC implementation",
                    "White-label architecture",
                    "Dynamic institution branding",
                    "Restricted mobile component behaviors"
                  ].map(c => (
                    <div key={c} className="flex gap-4 p-4 border border-brand-black/5 rounded-sm items-center">
                      <Zap className="w-4 h-4 text-brand-accent shrink-0" />
                      <p className="text-sm font-medium">{c}</p>
                    </div>
                  ))}
                </div>
              </div>
              <ProjectImage 
                src="/assets/alumni-responsive-layouts.jpg" 
                alt="Responsive Constraints / Comparative Layouts - White-Label Scalability solutions." 
                aspectRatio="video"
              />
            </section>

            {/* 08 - Design QA */}
            <section id="validation" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">08 — design qa & validation</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">Execution Quality</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-8">
                <p>
                  Post-MVP development, a dedicated UI/UX review process was conducted to validate implementation quality across modules. We tracked observations in structured review sheets.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Functional', 'Visual', 'Interaction', 'Responsive'].map(check => (
                    <div key={check} className="p-6 bg-white border border-brand-black/5 rounded-sm text-center">
                      <p className="text-sm font-bold">{check}</p>
                      <p className="text-[10px] uppercase tracking-widest opacity-40 mt-1">Validation</p>
                    </div>
                  ))}
                </div>
              </div>
              <ProjectImage 
                src="/assets/alumni/alumni-qa-validation.jpg" 
                alt="Design QA Validation - Screenshots and Spreadsheets of structural reviews." 
                aspectRatio="video"
              />
            </section>

          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-40 h-fit space-y-16">
             <div className="space-y-8">
               <p className="text-[10px] uppercase font-black tracking-widest opacity-30">Inside the Process</p>
               <nav className="space-y-4">
                 {[
                   { label: "01 Challenge", id: "challenge" },
                   { label: "02 Ecosystem", id: "ecosystem" },
                   { label: "03 Onboarding", id: "onboarding" },
                   { label: "04 Networking", id: "networking" },
                   { label: "05 Mentorship", id: "mentorship" },
                   { label: "08 Validation", id: "validation" },
                   { label: "09 Reflection", id: "reflection" }
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
                <p className="text-[10px] uppercase font-black tracking-widest opacity-30">Key Focus</p>
                <div className="space-y-1">
                  <p className="text-2xl font-display font-semibold">Scalable UX</p>
                  <p className="text-xs font-light opacity-60">Modular components designed for multi-institution white-labeling.</p>
                </div>
             </div>
          </aside>
        </div>

        {/* 09 - Reflection */}
        <section id="reflection" className="mt-40 mb-32 border-t border-brand-black/5 pt-32">
          <div className="max-w-4xl space-y-12">
            <div className="space-y-4">
              <span className="text-display text-4xl opacity-10 block">09 — reflection</span>
              <h3 className="text-5xl font-display font-semibold tracking-tight">Closing Thoughts</h3>
            </div>
            <div className="text-2xl md:text-3xl font-light leading-snug text-brand-black/80 space-y-12">
              <p>
                This project strengthened my understanding of designing interconnected digital ecosystems under real-world technical and operational constraints.
              </p>
              <p>
                It reinforced the importance of scalable systems thinking, implementation awareness, execution validation, and long-term engagement design.
              </p>
            </div>
          </div>
        </section>

        {/* Next Link */}
        <section className="mt-40">
           <Link 
            to="/works/iim-udaipur-admissions" 
            className="group block p-12 md:p-24 bg-brand-black text-white hover:bg-brand-accent hover:text-brand-black transition-all duration-700 ease-premium"
           >
             <p className="text-[10px] lowercase font-semibold tracking-[0.3em] opacity-40 mb-4 group-hover:opacity-100 transition-opacity">next case study</p>
             <div className="flex justify-between items-end">
               <h4 className="text-5xl md:text-8xl font-display font-semibold tracking-tighter">IIM Udaipur Admissions Ecosystem</h4>
               <ArrowUpRight className="w-16 h-16 md:w-32 md:h-32 mb-2 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700" />
             </div>
           </Link>
        </section>
      </main>
    </div>
  );
}
