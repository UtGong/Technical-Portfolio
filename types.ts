
export type ProjectCategory = 'Hardware' | 'Robotics' | 'VR/AR' | 'Wearables';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  fullDocumentation: string;
  videoUrl: string;
  thumbnail: string;
  tags: string[];
  techStack: string[];
  gitUrl?: string; // ← add this
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
