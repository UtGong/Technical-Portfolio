
import React from 'react';
import { Project } from '../types';
import { Play } from 'lucide-react';

interface ProjectGridProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onProjectSelect }) => {
  return (
    <div className="grid grid-cols-1 gap-20">
      {projects.map((project, index) => (
        <article 
          key={project.id}
          className="group flex flex-col md:flex-row gap-10 items-start cursor-pointer transition-opacity hover:opacity-90"
          onClick={() => onProjectSelect(project)}
        >
          <div className="w-full md:w-1/2 relative bg-stone-100 border border-stone-200 overflow-hidden">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="bg-white/90 backdrop-blur text-stone-900 p-4 border border-stone-200 shadow-xl flex items-center gap-3">
                 <Play className="w-4 h-4 fill-stone-900" />
                 <span className="text-xs font-bold uppercase tracking-widest">Open Documentation</span>
               </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col pt-2">
            <div className="flex items-center gap-4 text-[10px] font-mono text-stone-400 uppercase tracking-[0.2em] mb-4">
              <span>Nº {String(index + 1).padStart(2, '0')}</span>
              <span className="w-4 h-px bg-stone-200" />
              <span>{project.category}</span>
            </div>
            <h3 className="text-3xl font-bold serif mb-4 group-hover:text-stone-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-stone-600 text-lg leading-relaxed serif italic mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-auto">
              {project.techStack.map(tech => (
                <span key={tech} className="text-[11px] font-bold uppercase tracking-widest text-stone-900">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProjectGrid;
