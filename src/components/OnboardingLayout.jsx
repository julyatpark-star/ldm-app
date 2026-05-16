import ProgressBar from './ProgressBar.jsx';

/**
 * Shared layout chrome for onboarding steps:
 *   - top bar with logo + progress
 *   - centered content
 *   - sticky-feel footer for nav buttons
 *
 * Pass `step` (1..5) and `totalSteps` (5).
 */
export default function OnboardingLayout({
  step,
  totalSteps = 5,
  children,
  footer,
}) {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="px-6 md:px-10 pt-6 pb-4 flex items-center gap-6">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center font-bold text-base glow-primary">
            L
          </div>
          <span className="font-semibold tracking-tight">LDM</span>
        </div>
        <div className="flex-1 max-w-2xl">
          <ProgressBar current={step} total={totalSteps} />
        </div>
        <span className="text-xs text-text-muted tabular-nums shrink-0">
          {step} / {totalSteps}
        </span>
      </header>

      {/* Content */}
      <section className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-3xl animate-fade-in">{children}</div>
      </section>

      {/* Footer */}
      {footer && (
        <footer className="px-6 md:px-10 py-6 border-t border-divider">
          <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
            {footer}
          </div>
        </footer>
      )}
    </main>
  );
}
