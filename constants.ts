import { Project } from './types';

// Use Vite's BASE_URL so assets work both locally and on subpaths (e.g., GitHub Pages).
// Assumes your images are in: public/img/...
const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`;

export const PROJECTS: Project[] = [
  {
    id: 'volleynaut',
    title: 'VolleyNaut',
    category: 'Embodied Interaction Systems',
    description:
      'A VR-based tactical training and analysis system for sitting volleyball athletes, supporting embodied understanding of movement and team coordination.',
    fullDocumentation:
      'VolleyNaut reconstructs gameplay and training scenarios in an immersive 3D environment. Athletes and coaches explore tactics through interactive viewpoints, spatial replay, and comparative motion inspection. The system emphasizes embodied reasoning over abstract notation and has been deployed with national teams in real training contexts.',
    videoUrl: 'https://www.youtube.com/embed/KVYygG_WyCg?si=2DkkTrk2LwhLc8DF',
    thumbnail: asset('img/volleynaut.png'),
    tags: ['Embodied Interaction', 'Sports Training', 'Spatial Reasoning'],
    techStack: ['Unity', 'C#', '3D Interaction', 'VR']
  },
  {
    id: 'vair-xr',
    title: 'VAIR (XR Version)',
    category: 'Embodied Interaction Systems',
    description:
      'An immersive injury analysis system integrating biomechanics data with multi-perspective XR visualization for expert reasoning.',
    fullDocumentation:
      'VAIR-XR supports expert-driven analysis of injury events by embedding motion and biomechanics data within an immersive spatial context. Experts compare movements across time, viewpoints, and players, examining how perception and perspective shape interpretation of injury mechanisms.',
    videoUrl: 'https://www.youtube.com/embed/88oHvOCzHpM?si=469aqRW06aI59WCt',
    thumbnail: asset('img/VAIR-XR.png'),
    tags: ['Biomechanics', 'Expert Tools', 'XR Analysis'],
    techStack: ['Unity', 'C#', 'Motion Data', 'XR Interaction']
  },
  {
    id: 'accessible-ar-sports',
    title: 'Augmented Reality for Supporting Accessible Sports Spectating and Training',
    category: 'Augmented & Accessible Perception',
    description:
      'An AR system that explores how sports spectating and learning can be made accessible through alternative perceptual representations.',
    fullDocumentation:
      'This project investigates AR as a medium for translating fast-paced sports dynamics into accessible spatial cues and contextual overlays. It examines how augmenting perception—rather than replicating broadcast visuals—can enable more inclusive engagement with sports.',
    // NOTE: If your UI expects a YouTube embed iframe, use a YouTube URL here instead of a PNG.
    // Keeping it as an asset path since that’s what you provided.
    videoUrl: asset('img/ARforAcc.png'),
    thumbnail: asset('img/ARforAcc.png'),
    tags: ['Accessibility', 'AR', 'Perceptual Augmentation'],
    techStack: ['Unity', 'AR SDKs', 'Spatial Annotation', 'Interaction Design']
  },
  {
    id: 'luminescent-flora',
    title: 'Luminescent Flora: The Breath of Life',
    category: 'Bio-Responsive & Calm Technologies',
    description:
      'A bio-responsive interactive experience where breathing input drives the growth and transformation of a virtual ecosystem.',
    fullDocumentation:
      'Luminescent Flora maps human respiration to generative visual processes, connecting breath rhythms to the lifecycle of virtual plants and water droplets. The project explores calm technology, embodied biofeedback, and the affective impact of slow, physiological interaction.',
    videoUrl: 'https://www.youtube.com/embed/tiOGuC2EnrA?si=9qkGfkTdQVSx_7_u',
    thumbnail: asset('img/breathing.png'),
    tags: ['Biofeedback', 'Embodiment', 'Calm Technology'],
    techStack: ['Unity', 'Sensor Integration', 'Generative Systems']
  },
  {
    id: 'tacticast',
    title: 'TactiCast',
    category: 'Embodied Interaction Systems',
    description:
      'An immersive tactical explanation and training system that supports perspective-aware understanding of team sports tactics.',
    fullDocumentation:
      'TactiCast translates coach-defined tactics into frame-by-frame player and ball trajectories, reconstructing them in an interactive 3D environment. The system emphasizes tactical sensemaking by allowing users to explore plays from multiple viewpoints and by providing intelligent perspective guidance at decision-critical moments. Rather than automating interpretation, TactiCast balances computational guidance with user agency to support shared understanding between coaches and players.',
    videoUrl: 'https://www.youtube.com/embed/VIFwG36J_DM?si=PGQaskUdXp8UmPJI',
    thumbnail: asset('img/TactiCast.png'),
    tags: ['Tactical Sensemaking', 'Sports Analytics', 'Perspective Guidance'],
    techStack: ['Unity', 'C#', 'Trajectory Analysis', 'XR Interaction']
  },
  {
    id: 'card-gesture-module',
    title: 'Card Game Gesture Module',
    category: 'Embodied Interaction Systems',
    description:
      'A gesture-based interaction module for hybrid physical–digital card games, designed to preserve physicality while enabling digital augmentation.',
    fullDocumentation:
      'This project explores how hand gestures and spatial interaction can extend traditional tabletop games with digital effects. The system focuses on low-latency interaction, expressive input, and maintaining the social and tactile qualities of physical play.',
    videoUrl: 'https://www.youtube.com/embed/UTu9s0Uw9cI?si=J0aBlR0one4zfbf6',
    thumbnail: asset('img/cardgame_gesture_module.png'),
    tags: ['Gesture Interaction', 'Hybrid Interfaces', 'Playful Systems'],
    techStack: ['Unity', 'C#', 'Gesture Recognition', 'Interactive Systems']
  }
];
