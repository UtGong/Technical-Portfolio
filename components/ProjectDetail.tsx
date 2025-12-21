
import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, ArrowLeft } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-8">
      <div
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-5xl h-full max-h-[100vh] md:max-h-[90vh] bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row border border-stone-200 animate-in fade-in zoom-in duration-300">

        {/* Visual Content (Demonstration) */}
        <div className="w-full md:w-3/5 bg-stone-50 flex flex-col border-r border-stone-100">
          <div className="relative flex-1 bg-black">
            <iframe
              src={project.videoUrl}
              className="w-full h-full aspect-video border-none"
              title={project.title}
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-6 bg-white border-t border-stone-100">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] bg-stone-50 border border-stone-100 overflow-hidden grayscale hover:grayscale-0 transition-all">
                <img src={`https://picsum.photos/seed/${project.id}1/600/450`} alt="Micro-analysis 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] bg-stone-50 border border-stone-100 overflow-hidden grayscale hover:grayscale-0 transition-all">
                <img src={`https://picsum.photos/seed/${project.id}2/600/450`} alt="Micro-analysis 2" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="mt-4 text-[10px] text-stone-400 font-mono uppercase tracking-widest text-center">
              Multimedia Documentation & Case Study Imagery
            </p>
          </div>
        </div>

        {/* Textual Documentation (Abstract) */}
        <div className="w-full md:w-2/5 flex flex-col h-full bg-white relative">
          <div className="p-8 md:p-12 flex-1 overflow-y-auto no-scrollbar">
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-2 rounded-full hover:bg-stone-50 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-12">
              <header>
                <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mb-4">
                  Field: {project.category}
                </div>
                <h2 className="text-4xl font-bold serif mb-6">{project.title}</h2>
                <div className="w-full h-px bg-stone-100" />
              </header>

              <section>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-stone-400">Technical Abstract</h4>
                <p className="text-stone-800 leading-relaxed serif text-lg">
                  {project.fullDocumentation}
                </p>
              </section>

              <section>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-stone-400">Implementation Stack</h4>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-bold uppercase tracking-widest border border-stone-200 px-3 py-1 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section className="pb-8">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-stone-400">Research Focus</h4>
                <ul className="space-y-3">
                  {project.tags.map(tag => (
                    <li key={tag} className="flex items-center gap-3 text-sm text-stone-600 serif italic">
                      <div className="w-1 h-1 rounded-full bg-stone-300" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <div className="p-8 border-t border-stone-100 bg-stone-50/50">
            {project.gitUrl && (
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-stone-900 text-white font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-stone-700 transition-colors flex items-center justify-center gap-3"
              >
                <ExternalLink className="w-3 h-3" />
                Source Documentation (Git)
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
