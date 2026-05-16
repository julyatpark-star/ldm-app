// 5 mentor personas. Each maxes out one leadership parameter.
// Image paths are placeholders — replace /public/personas/*.png with your designed assets.

export const personas = [
  {
    id: 'driver',
    name: 'The Driver',
    essence: 'MOMENTUM',
    tagline: 'I move first, refine later — momentum is the strategy.',
    description: 'Pushes the team to ship and hit ambitious goals.',
    colorVar: '--color-persona-driver',
    colorClass: 'text-persona-driver',
    borderColorClass: 'border-persona-driver',
    image: '/personas/driver.png',
    fallbackShape: 'lightning',
    parameter: 'EXECUTION',
    lesson: 'Momentum beats perfection when stakes are time-bound.',
  },
  {
    id: 'critic',
    name: 'The Critic',
    essence: 'RIGOR',
    tagline: 'I attack the idea, not the person — that\u2019s how we ship something that lasts.',
    description: 'Sharpens decisions through tough, honest questions.',
    colorVar: '--color-persona-critic',
    colorClass: 'text-persona-critic',
    borderColorClass: 'border-persona-critic',
    image: '/personas/critic.png',
    fallbackShape: 'target',
    parameter: 'CRITICAL THINKING',
    lesson: 'Dissent is a gift if you can separate the idea from the ego.',
  },
  {
    id: 'strategist',
    name: 'The Strategist',
    essence: 'VISION',
    tagline: 'Every choice has a second-order consequence — I see them before we commit.',
    description: 'Sees the long game and connects the dots others miss.',
    colorVar: '--color-persona-strategist',
    colorClass: 'text-persona-strategist',
    borderColorClass: 'border-persona-strategist',
    image: '/personas/strategist.png',
    fallbackShape: 'network',
    parameter: 'STRATEGIC VISION',
    lesson: 'Some decisions deserve pause, not pace.',
  },
  {
    id: 'empath',
    name: 'The Empath',
    essence: 'CARE',
    tagline: 'Leadership isn\u2019t what\u2019s said — it\u2019s what no one said and you noticed.',
    description: "Reads the room and protects the team's energy.",
    colorVar: '--color-persona-empath',
    colorClass: 'text-persona-empath',
    borderColorClass: 'border-persona-empath',
    image: '/personas/empath.png',
    fallbackShape: 'heart',
    parameter: 'EMOTIONAL INTELLIGENCE',
    lesson: 'Leadership isn\u2019t loud. It\u2019s noticing.',
  },
  {
    id: 'bridger',
    name: 'The Bridger',
    essence: 'ALIGN',
    tagline: 'What sounds like \u201Cyes\u201D in your world might mean \u201Cno\u201D in mine.',
    description: 'Translates across teams and turns conflict into trust.',
    colorVar: '--color-persona-bridger',
    colorClass: 'text-persona-bridger',
    borderColorClass: 'border-persona-bridger',
    image: '/personas/bridger.png',
    fallbackShape: 'bridge',
    parameter: 'CULTURAL INTELLIGENCE',
    lesson: '"Yes" doesn\u2019t mean the same thing everywhere.',
  },
];

export const roleOptions = [
  'Developer',
  'Designer',
  'PM',
  'Founder',
  'Marketer',
  'Student',
  'Other',
];

export const pressureOptions = [
  'Take charge',
  'Seek consensus',
  'Step back and analyze',
];

export const conflictOptions = [
  'Push back directly',
  'Find common ground',
  'Ask more questions',
];

export const growthAreaOptions = [
  'Conflict management',
  'Decision-making',
  'Cross-cultural communication',
  'Reading the room',
  'Time pressure handling',
];
