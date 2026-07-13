import { dark } from "@clerk/themes";

/**
 * Dark theme for Clerk modals (sign-in, sign-up) that matches the app's color palette.
 * Uses Clerk's prebuilt `dark` theme as a base, then overrides variables to match
 * this app's `.dark` palette from `app/globals.css`.
 *
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/themes
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/variables
 */
export const clerkModalAppearance = {
  theme: dark,
  variables: {
    // Primary brand color - matches the app's primary color
    colorPrimary: "oklch(0.72 0.18 145)",
    colorPrimaryForeground: "oklch(0.15 0.02 250)",

    // Background and foreground colors - matches the app's dark theme
    colorBackground: "oklch(0.15 0.02 250)",
    colorForeground: "oklch(0.94 0.015 85)",

    // Card and surface colors - matches the app's card colors
    colorCard: "oklch(0.2 0.02 250)",
    colorCardForeground: "oklch(0.94 0.015 85)",

    // Input field colors - matches the app's input colors
    colorInput: "oklch(0.32 0.02 250)",
    colorInputForeground: "oklch(0.94 0.015 85)",

    // Secondary colors - matches the app's secondary colors
    colorSecondary: "oklch(0.26 0.02 250)",
    colorSecondaryForeground: "oklch(0.85 0.03 200)",

    // Muted colors for subtle elements
    colorMuted: "oklch(0.22 0.02 250)",
    colorMutedForeground: "oklch(0.68 0.02 90)",

    // Accent colors
    colorAccent: "oklch(0.74 0.13 200)",
    colorAccentForeground: "oklch(0.12 0.02 250)",

    // Border colors
    colorBorder: "oklch(0.32 0.02 250)",

    // Danger / destructive
    colorDanger: "oklch(0.6122 0.2082 22.241)",

    // Shadow and ring colors
    colorRing: "oklch(0.72 0.18 145)",

    // Typography
    fontFamily:
      "Sora, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",

    // Border radius to match app's design
    borderRadius: "0.625rem",
    borderRadiusSmall: "0.375rem",
    borderRadiusLarge: "0.875rem",
  },
  elements: {
    formButtonPrimary: {
      backgroundColor: "oklch(0.72 0.18 145)",
      color: "oklch(0.15 0.02 250)",
      "&:hover": {
        backgroundColor: "oklch(0.67 0.18 145)",
      },
      "&:active": {
        backgroundColor: "oklch(0.62 0.18 145)",
      },
    },
    formButtonReset: {
      backgroundColor: "oklch(0.26 0.02 250)",
      color: "oklch(0.94 0.015 85)",
      borderColor: "oklch(0.32 0.02 250)",
      "&:hover": {
        backgroundColor: "oklch(0.3 0.02 250)",
      },
    },
    card: {
      backgroundColor: "oklch(0.2 0.02 250)",
      borderColor: "oklch(0.32 0.02 250)",
    },
    headerTitle: {
      color: "oklch(0.94 0.015 85)",
      fontFamily:
        "Sora, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    headerSubtitle: {
      color: "oklch(0.68 0.02 90)",
    },
    socialButtonsBlockButton: {
      backgroundColor: "oklch(0.26 0.02 250)",
      color: "oklch(0.94 0.015 85)",
      borderColor: "oklch(0.32 0.02 250)",
      "&:hover": {
        backgroundColor: "oklch(0.3 0.02 250)",
      },
    },
    formFieldInput: {
      backgroundColor: "oklch(0.32 0.02 250)",
      color: "oklch(0.94 0.015 85)",
      borderColor: "oklch(0.32 0.02 250)",
      "&:focus": {
        borderColor: "oklch(0.72 0.18 145)",
        boxShadow: "0 0 0 1px oklch(0.72 0.18 145)",
      },
    },
    footerActionLink: {
      color: "oklch(0.72 0.18 145)",
      "&:hover": {
        color: "oklch(0.67 0.18 145)",
      },
    },
  },
} as const;
