import { motion } from 'motion/react';
import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, SearchCode, LayoutTemplate, HelpCircle, FileText, CreditCard, Smartphone, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectImage from '../components/ProjectImage';

const IIMU_METADATA = {
  title: "IIM Udaipur Admissions Ecosystem",
  subtitle: "Designing an end-to-end admissions experience consisting of program-specific landing pages and a centralized portal to unify a fragmented journey.",
  details: [
    { label: "Client", value: "IIM Udaipur" },
    { label: "Organization", value: "Ken42" },
    { label: "Role", value: "Product Designer" },
    { label: "Duration", value: "4 Months" },
    { label: "Team Size", value: "~12 Members" },
    { label: "Focus", value: "Admissions UX • Lifecycle Portals • Scalability" }
  ]
};

export default function IIMUdaipurCaseStudy() {
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
            IIM Udaipur <br className="hidden md:inline" /> Admissions Ecosystem
          </motion.h1>
          
          <div className="space-y-12">
            <div className="max-w-4xl">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl font-light leading-snug text-brand-black/80"
              >
                {IIMU_METADATA.subtitle}
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
                <p className="text-base font-medium tracking-tight">Admissions UX • Lifecycle Portals • Scalability</p>
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
              src="/assets/iimu/iimu-hero.jpg"
              alt="Landing pages collage + core admissions portal dashboard visual showcasing IIM Udaipur branding compatibility." 
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

        {/* Highlight Callout - Systems Focused */}
        <section className="mb-40">
          <motion.div 
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            className="bg-[#C8A96B] p-8 md:p-16 rounded-sm text-brand-black relative overflow-hidden"
          >
            <div className="relative z-10 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-display font-semibold leading-tight text-brand-black">
                Design quality does not end at handoff. Ensuring that implemented experiences match design intent is equally important.
              </h2>
            </div>
          </motion.div>
        </section>

        {/* Content Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-8 space-y-40">
            
            {/* 00 - Overview */}
            <section id="overview" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">00 — overview</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">The Admissions Challenge</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-8">
                <p>
                  Admissions is often experienced as a collection of disconnected systems — marketing websites, registration forms, application portals, document submissions, interviews, payments, and offer management. While each step serves a specific purpose, the overall journey can become fragmented for applicants and operationally complex for institutions.
                </p>
                <p>
                  At IIM Udaipur, the goal was to create a unified admissions ecosystem that supports applicants from their first interaction with a program page all the way through enrollment.
                </p>
                <p>
                  Working through Ken42, I designed a suite of admissions experiences consisting of program-specific landing pages and a centralized admissions portal that enabled applicants to discover programs, submit applications, manage documents, track progress, receive offers, and complete payments.
                </p>
              </div>
            </section>

            {/* 01 - The Challenge */}
            <section id="challenge" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">01 — the challenge</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">Structuring Inherent Complexity</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-8">
                <p>
                  Admissions journeys are inherently complex. Applicants often need to move through multiple separate stages:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {[
                    "Discovering academic programs",
                    "Understanding complex eligibility criteria",
                    "Registering lead interest quickly",
                    "Completing lengthy detailed applications",
                    "Uploading and verifying multiple documents",
                    "Attending interviews and tracking schedules",
                    "Managing official offer letters",
                    "Completing heavy application & term payments"
                  ].map((item) => (
                    <div key={item} className="flex gap-4 p-5 bg-white border border-brand-black/5 rounded-sm items-center">
                      <CheckCircle2 className="w-5 h-5 text-brand-indicator shrink-0" />
                      <p className="text-sm font-medium leading-tight">{item}</p>
                    </div>
                  ))}
                </div>
                <p>
                  The core challenge was not only designing individual screens, but creating a connected experience that helps applicants understand where they are, what they need to do next, and how they can progress smoothly through the admissions lifecycle without losing momentum.
                </p>
              </div>
            </section>

            {/* 02 - Admissions Journey */}
            <section id="journey" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">02 — the admissions journey</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">Visualizing the Lifecycle</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-8">
                <p>
                  Before designing interfaces, it was critical to map out and understand the complete admissions lifecycle. This blueprint served as the true foundation for the entire digital and operational ecosystem.
                </p>

                <ProjectImage 
                  src="/assets/iimu/iimu-diagram.jpg" 
                  alt="Admissions Journey Diagram - Flow Visualizer Blueprint" 
                  aspectRatio="video"
                />
              </div>
            </section>

            {/* 03 - Designing for Multiple Programs */}
            <section id="programs" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">03 — multi-program framework</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">Consistency & Scalability</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-8">
                <p>
                  One of the first challenges was supporting nine distinct academic programs while maintaining a highly consistent user experience.
                </p>
                <p>
                  Although each program had unique curriculum content, eligibility criteria, schedules, and specific messaging, the underlying structure needed to remain scalable. Instead of building completely independent experiences, we established a shared core framework allowing content flexibility while preserving perfect grid layouts across all landing pages.
                </p>
                <div className="bg-white border border-brand-black/5 p-8 rounded-sm">
                  <p className="text-xs uppercase font-bold tracking-widest opacity-45 mb-4">Supported Academic Programs (The Nine Pillars)</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono font-medium">
                    <li>• MBA in Global Supply Chain Management</li>
                    <li>• MBA in Digital Enterprise Management</li>
                    <li>• Executive MBA</li>
                    <li>• Executive PhD</li>
                    <li>• Summer Program in Management</li>
                    <li>• Two-Year MBA (Domestic)</li>
                    <li>• Two-Year MBA (International)</li>
                    <li>• Regular PhD</li>
                    <li>• All Programs (Domestic Entrance)</li>
                  </ul>
                </div>
                <ProjectImage 
                  src="/assets/iimu/iimu-landing-page 1.jpg" 
                  alt="Landing Pages Overview Board (Desktop & Mobile Side-by-Side)" 
                  aspectRatio="video"
                />
                <ProjectImage
                src="/assets/iimu/iimu-landing-page 2.jpg"
                alt="Additional landing page layouts"
                aspectRatio="video"
                />
              </div>
            </section>

            {/* 04 - Lead Generation Experience */}
            <section id="leads" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">04 — lead acquisition</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">Lead Generation Experience</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-8">
                <p>
                  The landing pages served as the primary acquisition channel with one objective: Convert interested visitors into registered applicants.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-medium">
                  {["Program Information", "Eligibility Details", "Faculty Highlights", "Career Outcomes", "Application Timelines", "Registration Forms"].map((item) => (
                    <div key={item} className="p-4 border border-brand-black/5 rounded-sm bg-white">
                      {item}
                    </div>
                  ))}
                </div>
                <p>
                  Once a user submitted the structured registration form, their information entered the real-time admissions workflow and portal access credentials were automatically generated and dispatched.
                </p>
                <p className="text-sm font-semibold opacity-80 italic">
                  Key UX Consideration: A persistent application entry point ensured applicants could easily begin registration regardless of where they were within the long page.
                </p>
                <ProjectImage 
                  src="/assets/iimu/iimu-form-compo.jpg" 
                  alt="Landing Page + Registration Form Composition Visual Board" 
                  aspectRatio="video"
                />
              </div>
            </section>

            {/* 05 - Admissions Portal */}
            <section id="portal" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">05 — admissions portal</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">The Operational Center</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-8">
                <p>
                  Once registered, applicants entered the unified admissions portal, moving away from disparate systems. The portal acted as the central processing dashboard, offering immediate visibility into application progress, centralizing files, and boosting applicant confidence.
                </p>
                <ProjectImage 
                  src="/assets/iimu/iimu-portal-overview 1.jpg" 
                  alt="Portal Overview Board Showcase (Login, Dashboard, Program Discovery)" 
                  aspectRatio="video"
                />
                <ProjectImage
                src="/assets/iimu/iimu-portal-overview 1-1.jpg"
                alt="Portal overview additional screens"
                aspectRatio="video"
                />
                <div className="space-y-6">
                  <h4 className="text-xl font-bold">Designing the Applicant Dashboard</h4>
                  <p className="text-lg font-light leading-relaxed text-brand-black/70">
                    Instead of overwhelming users with raw administrative data, the dashboard focused strictly on immediate action items. Applicants could instantly view available programs, track document upload status, read critical cohort announcements, continue pending edits, and request direct query support.
                  </p>
                </div>
                <ProjectImage 
                  src="/assets/iimu/iimu-dashboard 1.jpg" 
                  alt="Applicant Dashboard - Full-Width Layout Visual" 
                  aspectRatio="video"
                />
                <ProjectImage
                src="/assets/iimu/iimu-dashboard 2.jpg"
                alt="Applicant dashboard variations"
                aspectRatio="video"
                />
              </div>
            </section>

            {/* 06 - Instruction-Led Journey */}
            <section id="instructions" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">06 — preparation forms</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">Instruction-Led Application</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-8">
                <p>
                  One of the most overlooked parts of admissions systems is preparing applicants before they enter lengthy forms. Many jump straight in without reading, leading to preventable form errors and delays.
                </p>
                <p>
                  To solve for this, we introduced a context-aware instruction screen prior to form launch (such as specific requirements for international candidates). It clarified requirements, highlighted eligibility deadlines, and reduced overall submission mistakes.
                </p>
                <ProjectImage 
                  src="/assets/iimu/iimu-instructions.jpg" 
                  alt="Instruction Screen Placeholder" 
                  aspectRatio="video"
                />
              </div>
            </section>

            {/* 07 - The Nine-Step Application Journey */}
            <section id="journey-steps" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">07 — steps breakdown</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">The Nine-Step Application</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-8">
                <p>
                  Because the actual data requirements were extensive, we systematically broke the form into nine coherent, structured stages, accompanied by a stepper progress timeline.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    "1. Basic Information", "2. Personal Details", "3. Qualifying Test Details",
                    "4. Work Experience", "5. Academic Details", "6. Additional Information",
                    "7. Document Uploads", "8. Preview Stage", "9. Declaration"
                  ].map((step) => (
                    <div key={step} className="p-4 bg-brand-black text-white text-xs font-mono rounded-sm font-semibold flex items-center min-h-[56px]">
                      {step}
                    </div>
                  ))}
                </div>
                <p className="text-sm italic opacity-75">
                  Design Goal: Drastically reduce cognitive load while keeping total visibility over complete progress. Applicants always knew precisely where they were, what sections remained, and what raw information was still pending.
                </p>
                <ProjectImage 
                  src="/assets/iimu/iimu-journey-board.jpg" 
                  alt="Application Journey Board (Personal Details + Academic + Stepper Navigation)" 
                  aspectRatio="video"
                />
              </div>
            </section>

            {/* 08 - Complex Application States */}
            <section id="states" className="space-y-12">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">08 — lifecycle states</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight">Managing Complex States</h3>
              </div>
              <div className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 space-y-8">
                <p>
                  Admissions is not a simple linear flow. Applicants cycle through multiple physical states depending on evaluations, interview performance, conditional offers, and payment processing.
                </p>
                <p>
                  We cataloged and designed distinct dashboard states for every scenario, resolving confusion by communicating precisely what action item was expected of the applicant next:
                </p>
                <p>
                  We identified and designed over 20 application states spanning admissions, interviews, offer management, document verification, and fee payments. By grouping these states into clear categories and surfacing the next required action, applicants could easily understand their current status and progress through the admissions journey with confidence.
                  
                </p>
                <div className="max-w-6xl mx-auto">
                <ProjectImage 
                  src="/assets/iimu/iimu-status-board.jpg" 
                  alt="Application Status Board Display (Various Status Card Screens)" 
                  className="h-[400px] md:h-[750px]"
                />
                </div>
              </div>
            </section>

            {/* 09 - Additional Features modules */}
            <section id="modules" className="space-y-24">
              <div className="space-y-4">
                <span className="text-display text-4xl opacity-10 block">09 — integrated system modules</span>
                <h3 className="text-5xl font-display font-semibold tracking-tight font-display">Sub-systems and Operations</h3>
              </div>

               {/* Offers and Payments */}
              <div className="space-y-12">
                <div className="space-y-4">
                  <h4 className="text-3xl font-display font-semibold">Offer & Payment Management</h4>
                  <p className="text-lg font-light leading-relaxed text-brand-black/70">
                    Built financial dashboards directly into the portal. The system supported clear term fee schedules, commitment fee deposits, official invoices, and full download history.
                  </p>
                </div>
                <ProjectImage 
                  src="/assets/iimu/iimu-payments.jpg" 
                  alt="Offer & Payment Board Dashboard Showcase" 
                  aspectRatio="video"
                />
              </div>

               {/* Document Uploads */}
              <div className="space-y-12">
                <div className="space-y-4">
                  <h4 className="text-3xl font-display font-semibold">Document Management</h4>
                  <p className="text-lg font-light leading-relaxed text-brand-black/70">
                    Provided transparent document verification status updates, preventing unnecessary student support tickets. Upload status markers clearly mapped: Uploaded, Under Review, Missing, Accepted.
                  </p>
                </div>
                <ProjectImage 
                  src="/assets/iimu/iimu-documents.jpg" 
                  alt="Document Management Verification Screen Board" 
                  aspectRatio="video"
                />
              </div>

               {/* Support Center */}
              <div className="space-y-12">
                <div className="space-y-4">
                  <h4 className="text-3xl font-display font-semibold">Applicant Support Experience</h4>
                  <p className="text-lg font-light leading-relaxed text-brand-black/70">
                    To avoid massive email queues, we introduced direct portal query creation, supporting real-time staff response notifications, status tracking, and structured historical conversations.
                  </p>
                </div>
                <ProjectImage 
                  src="/assets/iimu/iimu-queries 1.jpg" 
                  alt="Raise Query Board - FAQ Portal Screens" 
                  aspectRatio="video"
                />
                <ProjectImage
                src="/assets/iimu/iimu-queries 2.jpg"
                alt="Applicant support interactions"
                aspectRatio="video"
                />
              </div>

               {/* Responsive Experience */}
              <div className="space-y-12">
                <div className="space-y-4">
                  <h4 className="text-3xl font-display font-semibold">Mobile & Responsive Layouts</h4>
                  <p className="text-lg font-light leading-relaxed text-brand-black/70">
                    Because many applicants check updates from their phones, every dashboard view, document upload form, query response view, and notification layout was fully optimized for mobile responsiveness.
                  </p>
                </div>
                <div className="space-y-6">
                  <ProjectImage 
                  src="/assets/iimu/iimu-mobile 1.jpg"
                  alt="Mobile Experience - Dashboard and Application Flow"
                  aspectRatio="video"
                />

                <ProjectImage
                src="/assets/iimu/iimu-mobile 2.jpg"
                alt="Mobile Experience - Queries and Support"
                aspectRatio="video"
                />
              </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-40 h-fit space-y-16">
             <div className="space-y-8">
               <p className="text-[10px] uppercase font-black tracking-widest opacity-30">Inside the Process</p>
               <nav className="space-y-4">
                 {[
                   { label: "00 Overview", id: "overview" },
                   { label: "01 The Challenge", id: "challenge" },
                   { label: "02 Admissions Journey", id: "journey" },
                   { label: "03 Multi-Program Core", id: "programs" },
                   { label: "05 Admissions Portal", id: "portal" },
                   { label: "07 9-Step Application", id: "journey-steps" },
                   { label: "08 Complex States", id: "states" },
                   { label: "09 Sub-systems", id: "modules" },
                   { label: "Design QA Loop", id: "validation" }
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
          </aside>
        </div>

        {/* Scalability Section */}
        <section className="mt-40 space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="text-display text-4xl opacity-10 block">10 — designing for scalability</span>
            <h3 className="text-5xl font-display font-semibold tracking-tight">Structured Frameworks</h3>
            <p className="text-xl font-light leading-relaxed text-brand-black/70">
              Beyond individual applicant interactions, system scalability was a core mandate. To ease long-term administrative overhead and maintain layout unity, we standardized interactive components program-wide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Reusable Layouts", text: "Establishes unified headers, sidebar panels, and grid containers." },
              { title: "Shared Patterns", text: "Secures uniform actions for buttons, table states, status badges, and loading bars." },
              { title: "Standardized Forms", text: "Drives structured fields with consistent feedback inline validation." },
              { title: "Common Components", text: "Leverages identical document lists, FAQ items, and checkbook elements." }
            ].map((card, i) => (
              <div key={i} className="p-8 bg-white border border-brand-black/5 rounded-sm space-y-3">
                <p className="text-sm font-bold font-mono">{`0${i+1} · ${card.title}`}</p>
                <p className="text-xs opacity-60 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Execution Ownership */}
        <section className="mt-40 space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="text-display text-4xl opacity-10 block">11 — execution ownership</span>
            <h3 className="text-5xl font-display font-semibold">Beyond Design Delivery</h3>
            <p className="text-xl font-light leading-relaxed text-brand-black/70">
              My involvement extended far beyond sending passive visual handoffs. Content requirements continuously kept updating during early active sprints, requiring direct, on-the-fly collaboration with Product Managers, Developers, and core Stakeholders. 
            </p>
            <p className="text-xl font-light leading-relaxed text-brand-black/70">
              Daily Scrum sessions became a valuable tool to resolve layout bottlenecks, address development constraints, track mid-flight updates, and guarantee code consistency.
            </p>
          </div>
        </section>

        {/* UI/UX Review & Design Validation */}
        <section id="validation" className="mt-40 space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="text-display text-4xl opacity-10 block">12 — design qa & validation</span>
            <h3 className="text-5xl font-display font-semibold">Guarding Execution Quality</h3>
            <p className="text-xl font-light leading-relaxed text-brand-black/70">
              Post-MVP development, I executed comprehensive, system-wide UX reviews to ensure all implemented user flows adhered perfectly to design intentions. Every layout issue, spacing slip, or interaction lag was logged in structured boards and systematically resolved.
            </p>
          </div>
          <ProjectImage
            src="/assets/iimu/iimu-qa-board.jpg"
            alt="Design QA Validation Board showing UX review observations, developer fixes, verification status, and implementation tracking workflow."
            aspectRatio="video"
            />

        </section>

        {/* Key Learnings */}
        <section className="mt-40 space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="text-display text-4xl opacity-10 block">13 — key learnings</span>
            <h3 className="text-5xl font-display font-semibold">Systems Over Screens</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-brand-black/5 rounded-sm space-y-4">
              <h4 className="text-xl font-bold">Systems Thinking</h4>
              <p className="text-sm opacity-60 leading-relaxed">This project officially shifted my perspective from designing individual isolated interfaces to building complete ecosystems where every element impacts the next.</p>
            </div>
            <div className="p-8 bg-white border border-brand-black/5 rounded-sm space-y-4">
              <h4 className="text-xl font-bold">Balancing Complexity</h4>
              <p className="text-sm opacity-60 leading-relaxed">Structuring heavy workflows, dense regulatory compliance steps, and multi-stage paths without introducing friction for student users is a core skill.</p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section id="reflection" className="mt-40 mb-32 border-t border-brand-black/5 pt-32">
          <div className="max-w-4xl space-y-12">
            <div className="space-y-4">
              <span className="text-display text-4xl opacity-10 block">14 — reflection</span>
              <h3 className="text-5xl font-display font-semibold tracking-tight">Closing Thoughts</h3>
            </div>
            <div className="text-2xl md:text-3xl font-light leading-snug text-brand-black/80 space-y-12">
              <p>
                This project strengthened my understanding of product design as a systems discipline rather than a screen-design discipline. 
              </p>
              <p>
                Beyond standard interface building, my contributions to workflow design, execution reviews, daily developer alignments, and UI validations highlighted how design decisions can directly optimize backend operation, scaling flexibility, and multi-team collaboration. The IIM Udaipur Admissions Ecosystem remains a highly influential project shaping how I approach cross-functional design today.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Next Project Link */}
        <section className="mt-40">
           <Link 
            to="/works/mca-player-registration" 
            className="group block p-12 md:p-24 bg-brand-black text-white hover:bg-brand-accent hover:text-brand-black transition-all duration-700 ease-premium"
           >
             <p className="text-[10px] lowercase font-semibold tracking-[0.3em] opacity-40 mb-4 group-hover:opacity-100 transition-opacity">next case study</p>
             <div className="flex justify-between items-end">
               <h4 className="text-5xl md:text-8xl font-display font-semibold tracking-tighter">MCA Player Registration Portal</h4>
               <ArrowUpRight className="w-16 h-16 md:w-32 md:h-32 mb-2 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700" />
             </div>
           </Link>
        </section>
      </main>
    </div>
  );
}
