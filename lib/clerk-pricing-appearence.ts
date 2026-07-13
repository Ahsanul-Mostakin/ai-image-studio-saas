import { dark } from "@clerk/themes";

/**
 * Dark + brand colors for `<PricingTable />` and billing checkout.
 * Uses Clerk's prebuilt `dark` theme, then overrides variables to match
 * this app's `.dark` palette (see `app/globals.css`).
 *
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/themes
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/variables
 */
export const clerkPricingAppearance = {
  theme: dark,
  variables: {
    colorPrimary: "oklch(0.8 0.15 55)",
    colorPrimaryForeground: "oklch(0.15 0.02 250)",
    colorBackground: "oklch(0.15 0.02 250)",
    colorForeground: "oklch(0.94 0.015 85)",
    colorInput: "oklch(0.32 0.02 250)",
    colorInputForeground: "oklch(0.94 0.015 85)",
    colorNeutral: "oklch(0.68 0.02 90)",
  },
} as const;
