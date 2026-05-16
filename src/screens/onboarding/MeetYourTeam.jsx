import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import OnboardingLayout from '../../components/OnboardingLayout.jsx';
import Button from '../../components/Button.jsx';
import PersonaCard from '../../components/PersonaCard.jsx';
import { useOnboarding } from '../../context/OnboardingContext.jsx';
import { personas } from '../../data/personas.js';

export default function MeetYourTeam() {
  const navigate = useNavigate();
  const { data } = useOnboarding();
  const displayName = data.name?.trim() || 'you';

  return (
    <OnboardingLayout
      step={4}
      footer={
        <>
          <Button
            variant="ghost"
            onClick={() => navigate('/onboarding/about-you')}
          >
            <ArrowLeft size={18} /> Back
          </Button>
          <Button
            variant="primary"
            onClick={() => navigate('/onboarding/ready')}
          >
            Continue <ArrowRight size={18} />
          </Button>
        </>
      }
    >
      <div className="flex flex-col gap-10 py-4">
        <header className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-3">
            <div
              className="dot-pattern h-5 w-20 text-primary opacity-60"
              aria-hidden
            />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Meet Your Team
            </span>
            <div
              className="dot-pattern h-5 w-20 text-primary opacity-60"
              aria-hidden
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Five personas. One leader: {displayName}.
          </h1>
          <p className="text-sm text-text-secondary max-w-md">
            Each one is a tool. Master when to switch.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {personas.map((persona, i) => (
            <PersonaCard key={persona.id} persona={persona} index={i} />
          ))}
        </div>
      </div>
    </OnboardingLayout>
  );
}
