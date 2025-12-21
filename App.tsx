
// import React, { useState } from 'react';
// import { PROJECTS } from './constants';
// import { Project } from './types';
// import ProjectGrid from './components/ProjectGrid';
// import ProjectDetail from './components/ProjectDetail';
// import ChatAssistant from './components/ChatAssistant';
// import { Book, ChevronRight, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

// const App: React.FC = () => {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [activeCategory, setActiveCategory] = useState<string>('All');

//   const filteredProjects = activeCategory === 'All' 
//     ? PROJECTS 
//     : PROJECTS.filter(p => p.category === activeCategory);

//   const scrollToSection = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#fcfaf7] text-[#1a1a1a]">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-50 bg-[#fcfaf7]/90 backdrop-blur-sm border-b border-stone-200">
//         <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <Book className="w-4 h-4 text-stone-600" />
//             <span className="font-semibold text-sm tracking-widest uppercase text-stone-500">Archive.Alex</span>
//           </div>
//           <div className="flex gap-8 text-[11px] font-bold text-stone-600 uppercase tracking-widest">
//             <button onClick={() => scrollToSection('about')} className="hover:text-black transition-colors">Biography</button>
//             <button onClick={() => scrollToSection('portfolio')} className="hover:text-black transition-colors">Portfolio</button>
//             <button className="hover:text-black transition-colors">Connect</button>
//           </div>
//         </div>
//       </nav>

//       {/* Biography Section */}
//       <section id="about" className="pt-32 pb-20 px-6 border-b border-stone-100">
//         <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-20">
//           <div className="w-full md:w-64 flex-shrink-0">
//             <div className="aspect-[4/5] bg-stone-100 border border-stone-200 p-1.5 shadow-sm overflow-hidden">
//               <img 
//                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
//                 alt="Portrait of Alex" 
//                 className="w-full h-full object-cover grayscale brightness-95"
//               />
//             </div>
//             <p className="text-[10px] uppercase tracking-widest text-stone-400 mt-4 text-center mono">
//               Fig. 1.1 — Portrait of the Researcher
//             </p>
//           </div>

//           <div className="flex-1">
//             <h1 className="text-3xl md:text-4xl font-bold mb-6 serif tracking-tight">
//               Investigating the tangibility of <br/> digital systems through engineering.
//             </h1>
//             <div className="w-12 h-px bg-stone-300 mb-8" />
            
//             <div className="space-y-6 text-stone-700 leading-relaxed text-base md:text-lg">
//               <p>
//                 I am Alex, a creative technologist specializing in physical computing and robotics. My practice involves the rigorous documentation and development of high-fidelity prototypes that explore human-machine interfaces.
//               </p>
//               <p>
//                 My work balances technical feasibility with experimental design, focusing on wearables that interpret biological data and robotics that navigate complex physical environments. The following index represents a collection of peer-reviewed technical challenges and successful implementations.
//               </p>
//             </div>
            
//             <div className="mt-10 flex items-center gap-6">
//               <button 
//                 onClick={() => scrollToSection('portfolio')}
//                 className="group flex items-center gap-2 text-stone-900 font-bold uppercase tracking-[0.2em] text-[11px] border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-500 transition-all"
//               >
//                 Proceed to Index
//                 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
//               </button>
              
//               <div className="flex gap-4 border-l border-stone-200 pl-6">
//                 <Github className="w-4 h-4 text-stone-400 cursor-pointer hover:text-black transition-colors" />
//                 <Linkedin className="w-4 h-4 text-stone-400 cursor-pointer hover:text-black transition-colors" />
//                 <Mail className="w-4 h-4 text-stone-400 cursor-pointer hover:text-black transition-colors" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Section */}
//       <main id="portfolio" className="max-w-5xl mx-auto px-6 py-24">
//         <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
//           <div>
//             <h2 className="text-2xl font-bold serif mb-2">Technical Index</h2>
//             <p className="text-sm text-stone-400 mono uppercase tracking-wider">A collection of research & builds</p>
//           </div>
          
//           <div className="flex flex-wrap gap-6 text-[11px] font-bold uppercase tracking-widest text-stone-400">
//             {['All', 'Hardware', 'Robotics', 'VR/AR', 'Wearables'].map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`transition-colors hover:text-black ${
//                   activeCategory === cat ? 'text-black border-b border-black' : ''
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         <ProjectGrid projects={filteredProjects} onProjectSelect={setSelectedProject} />
//       </main>

//       {/* Details Modal */}
//       {selectedProject && (
//         <ProjectDetail 
//           project={selectedProject} 
//           onClose={() => setSelectedProject(null)} 
//         />
//       )}

//       {/* Minimal AI Assistant */}
//       <ChatAssistant currentProject={selectedProject} />

//       <footer className="max-w-5xl mx-auto px-6 py-20 border-t border-stone-200">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-stone-400 text-[10px] font-mono uppercase tracking-[0.3em]">
//           <p>© 2024 Alex Portfolio // Research Repository</p>
//           <div className="flex gap-10">
//             <a href="#" className="hover:text-black transition-colors">GitHub</a>
//             <a href="#" className="hover:text-black transition-colors">Journal</a>
//             <a href="#" className="hover:text-black transition-colors">Contact</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { PROJECTS } from './constants';
import { Project } from './types';
import ProjectGrid from './components/ProjectGrid';
import ProjectDetail from './components/ProjectDetail';
// import ChatAssistant from './components/ChatAssistant';
import { Book, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#1a1a1a]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fcfaf7]/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Book className="w-4 h-4 text-stone-600" />
            <span className="font-semibold text-sm tracking-widest uppercase text-stone-500">
              Ut Gong // Technical Portfolio
            </span>
          </div>

          <div className="flex gap-8 text-[11px] font-bold text-stone-600 uppercase tracking-widest">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-black transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="hover:text-black transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('connect')}
              className="hover:text-black transition-colors"
            >
              Connect
            </button>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="pt-32 pb-20 px-6 border-b border-stone-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-20">
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="aspect-[4/5] bg-stone-100 border border-stone-200 p-1.5 shadow-sm overflow-hidden">
              <img
                src="./img/portfolio.JPG"
                alt="Portrait of Ut (Jo Jo) Gong"
                className="w-full h-full object-cover brightness-95"
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 serif tracking-tight">
              Building hardware-forward HCI systems that make <br />
              perception, motion, and reasoning interactable.
            </h1>
            <div className="w-12 h-px bg-stone-300 mb-8" />

            <div className="space-y-6 text-stone-700 leading-relaxed text-base md:text-lg">
              <p>
                I’m <span className="font-semibold text-stone-900">Ut (“Jo Jo”) Gong</span> (they/them), an HCI and
                interactive systems researcher focused on <span className="font-semibold text-stone-900">embodied interaction</span>,
                XR, and technical prototyping for real-world domain users (sports performance, injury/rehab, and health communication).
              </p>

              <p>
                My work emphasizes <span className="font-semibold text-stone-900">human–computer integration</span>:
                translating complex signals (movement, tactics, constraints, and context) into interfaces people can
                perceive, manipulate, and learn from—across laptops, VR/AR, and increasingly wearable / device-augmented setups.
              </p>

              <p className="text-stone-600">
                This portfolio prioritizes projects with strong engineering depth: XR pipelines, multi-view / multi-device systems,
                sensing and feedback integration where applicable, and research prototypes deployed with domain experts.
                Each entry includes video documentation and a concise build breakdown.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group flex items-center gap-2 text-stone-900 font-bold uppercase tracking-[0.2em] text-[11px] border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-500 transition-all"
              >
                View projects
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex gap-4 border-l border-stone-200 pl-6">
                <a
                  href="https://github.com/UtGong"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 text-stone-400 cursor-pointer hover:text-black transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jojo-gong/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-stone-400 cursor-pointer hover:text-black transition-colors" />
                </a>
                <a href="mailto:jojogong3736@gmail.com" aria-label="Email">
                  <Mail className="w-4 h-4 text-stone-400 cursor-pointer hover:text-black transition-colors" />
                </a>
              </div>
            </div>

            <div className="mt-8 text-[11px] uppercase tracking-widest text-stone-400 mono">
              Focus: embodied interaction · XR systems · sensing/feedback · domain deployment
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <main id="portfolio" className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
          <div>
            <h2 className="text-2xl font-bold serif mb-2">Project Index</h2>
            <p className="text-sm text-stone-400 mono uppercase tracking-wider">
              Research prototypes and engineered systems (with video documentation)
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-[11px] font-bold uppercase tracking-widest text-stone-400">
            {['All', 'Embodied Interaction Systems', 'Augmented & Accessible Perception', 'Bio-Responsive & Calm Technologies'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`transition-colors hover:text-black ${
                  activeCategory === cat ? 'text-black border-b border-black' : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <ProjectGrid projects={filteredProjects} onProjectSelect={setSelectedProject} />
      </main>

      {/* Details Modal */}
      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {/* Minimal AI Assistant */}
      {/* <ChatAssistant currentProject={selectedProject} /> */}

      {/* Connect Section */}
      <section id="connect" className="max-w-5xl mx-auto px-6 pb-24">
        <div className="border-t border-stone-200 pt-14">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="max-w-xl">
              <h3 className="text-xl font-bold serif mb-3">Connect</h3>
              <p className="text-stone-600 leading-relaxed">
                For Pedro Lopes’ lab applications, I will email my CV and portfolio link to{' '}
                <span className="font-semibold text-stone-900">apply-at-uchicago.edu</span>.
                This site is designed to foreground engineering details, build artifacts, and videos per the lab’s
                hardware-forward HCI expectations.
              </p>
              <p className="text-stone-600 leading-relaxed mt-4">
                Primary site: <span className="font-semibold text-stone-900">utgong.com</span>
              </p>
            </div>

            <div className="text-[11px] uppercase tracking-widest text-stone-400 mono">
              <div className="mb-2">Links</div>
              <div className="space-y-2">
                <a href="https://utgong.com" className="block hover:text-black transition-colors">
                  Website
                </a>
                <a href="https://github.com/" className="block hover:text-black transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/" className="block hover:text-black transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:apply-at-uchicago.edu" className="block hover:text-black transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="max-w-5xl mx-auto px-6 py-16 border-t border-stone-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-stone-400 text-[10px] font-mono uppercase tracking-[0.3em]">
          <p>© 2025 Ut Gong // Hardware-forward HCI Portfolio</p>
          <div className="flex gap-10">
            <a href="https://utgong.com" className="hover:text-black transition-colors">
              Website
            </a>
            <a href="#" className="hover:text-black transition-colors">
              CV
            </a>
            <a href="#connect" onClick={() => scrollToSection('connect')} className="hover:text-black transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
