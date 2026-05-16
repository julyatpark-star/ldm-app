import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import OnboardingLayout from '../../components/OnboardingLayout.jsx';
import Button from '../../components/Button.jsx';
import { useOnboarding } from '../../context/OnboardingContext.jsx';

export default function Ready() {
  const navigate = useNavigate();
  const { data } = useOnboarding();
  const displayName = data.name?.trim() || 'leader';

  const handleStart = () => {
    // First scenario will live at /scenario/1 once built. Stub for now.
    alert(
      `Scenario 1 coming next.\n\nProfile collected for ${displayName}:\n${JSON.stringify(
        data,
        null,
        2
      )}`
    );
  };

  return (
    <OnboardingLayout
      step={5}
      footer={
        <>
          <Button
            variant="ghost"
            onClick={() => navigate('/onboarding/meet-your-team')}
          >
            <ArrowLeft size={18} /> Back
          </Button>
          <Button variant="hero" size="lg" onClick={handleStart}>
            Start your first scenario <Sparkles size={18} />
          </Button>
        </>
      }
    >
      <div className="flex flex-col items-center text-center gap-8 py-16">
        <div
          className="dot-pattern h-6 w-32 text-primary opacity-60"
          aria-hidden
        />

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl">
          Ready when you are, {displayName}.
        </h1>

        <p className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed">
          You&rsquo;ll move through five scenarios. Each one tests a different
          dimension of leadership. There&rsquo;s no right answer — only the
          choices you can defend.
        </p>
      </div>
    </OnboardingLayout>
  );
}
