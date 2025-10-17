export type ProjectCategory = 'All' | 'Simulation' | 'UAV Systems' | 'Defense Systems' | 'Thermal Science'

export interface Project {
  title: string
  subtitle: string
  description: string
  metrics: string[]
  tags: string[]
  year: string
  category: ProjectCategory
  featured?: boolean
  link?: string
  thumbnail: string
}

export interface TimelineItem {
  title: string
  organization: string
  location: string
  period: string
  bullets: string[]
  category: 'Experience' | 'Education'
}

export const projects: Project[] = [
  {
    title: 'Autonomous Fixed-Wing UAV for Immersive Aerial Advertising',
    subtitle: 'INAV-guided airframe with modular payload bay',
    description:
      'Led the complete lifecycle design of a carbon-reinforced fixed-wing platform that can autonomously tow dynamic banners and stream telemetry with sub-meter precision.',
    metrics: [
      '12.5 min endurance flight-validated in field trials',
      '9 km command-and-control range with redundant RF link',
      '18% mass reduction through topology-optimized rib geometry',
    ],
    tags: ['UAV Systems', 'Autopilot', 'Composites', 'Systems Integration'],
    year: '2025',
    category: 'UAV Systems',
    featured: true,
    thumbnail: 'uav-orbit.svg',
  },
  {
    title: 'Vortex Cannon Anti-Drone Countermeasure',
    subtitle: 'CFD + FSI validation for non-lethal defense',
    description:
      'Simulated vortex ring generation to characterize impulse transfer on micro UAVs and optimized nozzle geometry for a deployable defense asset.',
    metrics: [
      '38% stronger core circulation with adaptive nozzle lip',
      'CFD mesh fidelity: 9.3M cells with y+ < 1 across boundary layer',
      'FSI loop reduced diaphragm stress by 22% under resonance',
    ],
    tags: ['ANSYS Fluent', 'FSI', 'OpenFOAM', 'Defense'],
    year: '2024',
    category: 'Defense Systems',
    thumbnail: 'vortex-array.svg',
  },
  {
    title: 'Mars Pathfinder UAV Concept',
    subtitle: 'Thin-atmosphere lift augmentation study',
    description:
      'Developed a conceptual survey UAV with variable-sweep wings sized for the Martian atmosphere, including propulsion trade-offs and entry scenario simulations.',
    metrics: [
      'Lift-to-drag improved by 24% via adaptive camber control',
      'Validated stability margins across 0.2–0.6 Mach regimes',
      'Thermal subsystem sized for -80°C survival margin',
    ],
    tags: ['Conceptual Design', 'Propulsion Sizing', 'Mission Analysis'],
    year: '2024',
    category: 'UAV Systems',
    thumbnail: 'mars-sweep.svg',
  },
  {
    title: 'Unsteady Natural Convection Mapper',
    subtitle: 'OpenFOAM solver tuning for conjugate heat transfer',
    description:
      'Built a buoyantPimpleFoam configuration for transient conjugate heat transfer to benchmark duct geometries for passive thermal control.',
    metrics: [
      'Captured 2.6x faster thermal stabilization with fin re-profiling',
      'Solver acceleration: 35% faster through adaptive Courant scheduling',
      'Post-processing automated via Python + ParaView catalysts',
    ],
    tags: ['OpenFOAM', 'Heat Transfer', 'CFD Automation'],
    year: '2023',
  category: 'Simulation',
    thumbnail: 'thermal-wave.svg',
  },
]

export const filters: ProjectCategory[] = [
  'All',
  'UAV Systems',
  'Defense Systems',
  'Simulation',
  'Thermal Science',
]

export const timeline: TimelineItem[] = [
  {
    title: 'Summer Intern & Tech Cord Assistant',
    organization: 'High Energy Materials Research Laboratory (HEMRL), DRDO',
    location: 'Pune, India',
    period: 'Jun 2024 – Aug 2024',
    bullets: [
      'Built CFD-driven workflow to model vortex ring impact on Group-1 UAVs and iterated nozzle geometry to extend effective range.',
      'Integrated FSI studies to tune diaphragm behavior and mitigate cyclic fatigue while boosting thrust output.',
    ],
    category: 'Experience',
  },
  {
    title: 'Aerospace Research Intern',
    organization: 'Feynman Aerospace',
    location: 'Remote · Mumbai, India',
    period: 'Mar 2024 – Jun 2024',
    bullets: [
      'Executed XFLR5 aerodynamic sweeps across 12 airfoils, benchmarking lift curve slopes and drag polars for UAV mission envelopes.',
      'Synthesized Reynolds-number dependent insights to guide rapid concept selection for client-specific payload ranges.',
    ],
    category: 'Experience',
  },
  {
    title: 'B.Tech Aerospace Engineering',
    organization: 'Amity University Mumbai',
    location: 'Mumbai, India',
    period: '2021 – 2025',
    bullets: [
      'Capstone: Autonomous fixed-wing UAV for commercial advertising with INAV autopilot, telemetry, and mission planning stack.',
      'NASA Space Apps Global Qualifier · ISRO IRoC-U Finalist · Acceleron Aerospace Journal publication on drag reduction.',
    ],
    category: 'Education',
  },
]
