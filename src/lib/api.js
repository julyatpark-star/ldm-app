// Frontend ↔ backend contract for the chat endpoint.
//
// POST {VITE_API_BASE_URL}/api/chat
// Body: {
//   sessionId: string | null,   // null on the first message of a new session
//   message: string,            // user's latest input
//   history: Message[]          // prior messages in this session (excluding the new one)
// }
// Response: {
//   sessionId: string,
//   sessionTitle?: string,                  // present on session-creation reply
//   personaResponses: [{ personaId, message }],
//   parameterDeltas: { [parameterName]: number }
// }
//
// When VITE_API_BASE_URL is empty the module returns a deterministic-feeling
// mock so the frontend works end-to-end without the backend.

import { personas, allParameters } from '../data/personas.js';

const BASE = (import.meta?.env?.VITE_API_BASE_URL || '').replace(/\/+$/, '');

export async function chat({ sessionId, message, history }) {
  if (BASE) {
    const res = await fetch(`${BASE}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, message, history }),
    });
    if (!res.ok) throw new Error(`chat failed: ${res.status}`);
    return res.json();
  }
  return mockChat({ sessionId, message, history });
}

// ─── Mock ────────────────────────────────────────────────────────────────────

const RESPONSE_POOL = {
  commander: [
    "Let's be concrete. What's the one decision we have to make right now?",
    "I'll take point on this — give me the green light and I'll move.",
    "We're overthinking. Pick a direction, commit, and adjust in flight.",
    "Tell me who owns this. Until someone owns it, nothing happens.",
  ],
  facilitator: [
    'Before we react, can you tell us what each person is actually feeling about this?',
    "I want to hear from everyone involved. Let's not skip the quiet voices.",
    "There's a real issue underneath the surface — let's name it together.",
    'What if we slowed down for ten minutes and made sure we share the same picture?',
  ],
  strategist: [
    "If we zoom out, what's the second-order effect of the choice you're leaning toward?",
    "There are two failure modes here. The obvious one and the slow one. Mind if I lay them out?",
    "I'd want to see this written down before we commit. The trade-offs aren't all visible yet.",
    "We've optimized for speed before and paid for it. Worth checking if that's the same trap.",
  ],
  supporter: [
    'That sounds heavy. How are *you* doing in the middle of it?',
    "Whatever you decide, I'd start by making sure the team feels safe enough to be honest.",
    "I think there's a person at the center of this who hasn't been heard yet. Can we go there?",
    "It's okay to not have the answer yet. Naming the discomfort is already a kind of leadership.",
  ],
  adaptive: [
    "Depends a lot on the people involved. What's the style you've seen them respond best to?",
    "Different rooms need different leaders. What does this room actually need from you right now?",
    "I'd ask what's worked for you in a similar moment before — and what was missing.",
    'Try framing the same message three different ways. One of them lands.',
  ],
};

const PARAM_KEYWORDS = [
  { match: /\b(decide|decision|choose|pick|going with|call it)\b/i, params: ['Decision-Making', 'Execution Speed'] },
  { match: /\b(deadline|urgent|asap|crunch|now|today|tonight)\b/i, params: ['Execution Speed', 'Stress Management'] },
  { match: /\b(feel|feeling|burned out|tired|stressed|anxious|exhausted)\b/i, params: ['Empathy', 'Emotional Awareness', 'Psychological Safety'] },
  { match: /\b(listen|hear|understand|perspective|opinion|voice)\b/i, params: ['Communication Style', 'Inclusive Communication'] },
  { match: /\b(plan|priorit|risk|trade.?off|long.?term|strateg)\b/i, params: ['Analytical Thinking', 'Prioritization', 'Risk Awareness'] },
  { match: /\b(conflict|fight|disagree|argument|tension|clash|frustrat)\b/i, params: ['Conflict Resolution', 'Communication Style'] },
  { match: /\b(culture|style|background|language|across|cross.?cultural)\b/i, params: ['Cultural Adaptability', 'Communication Flexibility', 'Situational Awareness'] },
  { match: /\b(team|together|everyone|us|we)\b/i, params: ['Team Motivation', 'Leadership Tendencies'] },
  { match: /\b(quiet|silent|disengag|withdraw|distant)\b/i, params: ['Emotional Awareness', 'Psychological Safety'] },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function paramDeltas(message) {
  const deltas = {};
  for (const { match, params } of PARAM_KEYWORDS) {
    if (match.test(message)) {
      for (const p of params) deltas[p] = (deltas[p] || 0) + 1;
    }
  }
  if (Object.keys(deltas).length === 0) {
    const random = allParameters[Math.floor(Math.random() * allParameters.length)];
    deltas[random] = 1;
  }
  return deltas;
}

function generateTitle(message) {
  const words = message.trim().replace(/\s+/g, ' ').split(' ').slice(0, 8);
  let title = words.join(' ');
  if (message.split(' ').length > 8) title += '…';
  // Capitalize first character.
  return title.charAt(0).toUpperCase() + title.slice(1);
}

function newSessionId() {
  return `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function mockChat({ sessionId, message }) {
  const eligible = personas.filter((p) => RESPONSE_POOL[p.id]);
  const len = message.trim().length;
  // 1-3 responders. Short messages get fewer, long ones get more.
  const count = len < 30 ? 1 : len < 100 ? 2 : 3;
  const responders = shuffle(eligible).slice(0, count);

  const personaResponses = responders.map((p) => {
    const options = RESPONSE_POOL[p.id];
    const msg = options[Math.floor(Math.random() * options.length)];
    return { personaId: p.id, message: msg };
  });

  const out = {
    sessionId: sessionId || newSessionId(),
    personaResponses,
    parameterDeltas: paramDeltas(message),
  };
  if (!sessionId) out.sessionTitle = generateTitle(message);

  // Simulate a touch of latency so the "thinking" indicator is visible.
  return new Promise((resolve) =>
    setTimeout(() => resolve(out), 500 + Math.random() * 400)
  );
}
