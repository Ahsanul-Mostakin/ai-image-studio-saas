import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Get started and explore the studio.",
    features: [
      "10 generations / month",
      "All 6 styles",
      "Standard resolution",
      "Image history",
    ],
    cta: "Get Started",
    href: "/studio",
    disabled: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "More generations for regular creators.",
    features: [
      "100 generations / month",
      "Priority queue",
      "HD resolution",
      "Image history",
    ],
    cta: "Coming Soon",
    href: "#",
    disabled: true,
  },
  {
    name: "Studio",
    price: "$29",
    period: "/month",
    description: "For power users and small teams.",
    features: [
      "Unlimited generations",
      "Fastest queue",
      "4K resolution",
      "Priority support",
    ],
    cta: "Coming Soon",
    href: "#",
    disabled: true,
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-shell mt-6 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="caps-sm inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-primary">
            Pricing
          </p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            Simple plans for every creator
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Start free today. Pro and Studio plans are launching soon.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-[1.5rem] border border-border/60 bg-card/40 p-6 shadow-lg shadow-primary/5"
            >
              <h3 className="font-serif text-xl text-foreground">
                {plan.name}
              </h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {plan.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-foreground/90"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              {plan.disabled ? (
                <button
                  disabled
                  className="mt-6 w-full cursor-not-allowed rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm font-medium text-muted-foreground"
                >
                  {plan.cta}
                </button>
              ) : (
                <Link
                  href={plan.href}
                  className="mt-6 w-full rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  {plan.cta}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
