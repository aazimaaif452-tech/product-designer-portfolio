import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  metadata: string[];
  highlightedMetadata?: string;
  color: string;
  image: string;
  link: string;
}

const featuredProject: Project = {
  id: 'iimu',
  title: 'IIM Udaipur Admissions Ecosystem',
  description: 'Designed and delivered a multi-program admissions ecosystem spanning 9 landing pages and a centralized admissions portal supporting the complete applicant journey.',
  tags: [
    'Higher Education',
    'Admissions Platform',
    'Systems Design'
  ],
  metadata: ['9 Academic Programs', '4 Months'],
  highlightedMetadata: 'End-to-End Ownership',
  color: '#0E0E0E',
  image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2670&auto=format&fit=crop',
  link: '/works/iim-udaipur-admissions'
};

const selectedProjects: Project[] = [
  {
    id: 'mca',
    title: 'MCA Player Registration Portal',
    description: 'A guided onboarding experience for seasonal cricket registrations, transforming a complex multi-role form into a structured and aspirational journey.',
    tags: [
      'Sports Tech',
      'Registration Portal',
      'Workflow Design'
    ],
    metadata: ['Adaptive Role-Based Forms', 'Guided Workflows', '5000+ Player Registrations'],
    color: '#0A0A0A',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2670&auto=format&fit=crop',
    link: '/works/mca-player-registration'
  },
  {
    id: 'ken42',
    title: 'Alumni Experience Platform',
    description: 'A scalable alumni engagement platform designed to strengthen networking, mentorship, and community-driven participation.',
    tags: [
      'Community Platform',
      'Alumni Engagement',
      'Platform Design'
    ],
    metadata: ['White-label Architecture', 'Execution Validation', 'Modular Frameworks'],
    color: '#151515',
    image: 'https://images.unsplash.com/photo-1523240715181-310f9d1f05ad?q=80&w=2670&auto=format&fit=crop',
    link: '/works/ken42-alumni-experience'
  }
];

function ProjectCard({ project }: { project: Project; key?: string }) {
  return (
    <div 
      style={{ backgroundColor: project.color }} 
      className="w-full rounded-sm overflow-hidden flex flex-col lg:flex-row border border-white/5 group lg:min-h-[460px] transition-all duration-500 hover:border-brand-accent/20"
    >
      {/* Visual Side - Rendered on TOP on mobile and tablet, RIGHT on desktop */}
      <div className="w-full lg:w-1/2 relative min-h-[300px] md:min-h-[400px] lg:min-h-full overflow-hidden order-first lg:order-last group/image">
        <img
          src={project.image}
          alt={`${project.title} Case Study Cover`}
          className="absolute inset-0 w-full h-full object-cover scale-105 group-hover/image:scale-100 transition-transform duration-[1200ms] ease-out grayscale group-hover/image:grayscale-0 opacity-80 md:opacity-75 group-hover/image:opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-black/25 group-hover/image:bg-brand-black/0 transition-colors duration-700" />
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between text-white lg:min-h-[460px] order-last lg:order-first">
        <div className="space-y-6">
          {/* Three Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-sm border border-white/10 text-white/50 bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Title */}
          <h3 className="text-3xl md:text-4xl lg:text-[42px] font-display font-semibold leading-tight tracking-tight pt-2">
            {project.title}
          </h3>

          {/* Short Summary */}
          <p className="text-base text-white/80 leading-relaxed font-light">
            {project.description}
          </p>

          {/* Highlighted Metadata of Featured Project */}
          {project.highlightedMetadata && (
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-brand-accent/[0.12] border border-brand-accent/30 py-2 px-4 rounded-sm text-brand-accent">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
                <span className="text-xs uppercase font-mono tracking-widest font-bold">
                  {project.highlightedMetadata}
                </span>
              </div>
            </div>
          )}

          {/* Metadata Section */}
          <div className="pt-6 border-t border-white/10">
            <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-white/40 block mb-3">Project Metadata</span>
            <div className="flex flex-wrap gap-4 md:gap-x-6 gap-y-2">
              {project.metadata.map((meta) => (
                <div key={meta} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/60" />
                  <span className="text-xs font-mono text-white/80 tracking-tight">
                    {meta}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* view case study CTA */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <Link 
            to={project.link}
            className="group inline-flex items-center gap-4 text-sm font-semibold tracking-tight text-white hover:text-brand-accent transition-colors"
          >
            <span>view case study</span>
            <span className="transform group-hover:translate-x-1.5 transition-transform duration-300 font-bold">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Works() {
  return (
    <section id="work" className="relative py-32 px-6 md:px-[48px] lg:px-[64px] bg-brand-offwhite">
      {/* Featured Case Study Header & Title section */}
      <div className="max-w-[1480px] mx-auto mb-12 relative z-10 animate-fade-in">
        <span className="text-[10px] md:text-xs uppercase font-mono tracking-[0.3em] text-brand-black/40 block mb-3 font-semibold">
          Flagship Case Study
        </span>
        <h2 className="text-display text-4xl md:text-6xl font-semibold tracking-tight lowercase">
          featured case study
        </h2>
      </div>

      {/* Featured Core (IIM Udaipur) Card layout */}
      <div className="max-w-[1480px] mx-auto mb-32 relative z-10 w-full">
        <ProjectCard project={featuredProject} />
      </div>

      {/* Selected Work Header & Title section */}
      <div className="max-w-[1480px] mx-auto mb-16 relative z-10 border-t border-brand-black/5 pt-20">
        <span className="text-[10px] md:text-xs uppercase font-mono tracking-[0.3em] text-brand-black/40 block mb-3 font-semibold">
          Supporting Work
        </span>
        <h2 className="text-display text-4xl md:text-6xl font-semibold tracking-tight lowercase">
          selected works
        </h2>
      </div>

      {/* Selected Working Stack List with consistent vertical spacer */}
      <div className="max-w-[1480px] mx-auto space-y-12 md:space-y-16 relative z-10 w-full">
        {selectedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
