import { dark } from "@clerk/themes";

/**
 * Dark theme for Clerk modals (sign-in, sign-up) that matches the app's color palette.
 * Uses Clerk's prebuilt `dark` theme as a base, then overrides variables to match
 * this app's `.dark` palette from `app/globals.css` — indigo base with amber
 * "safelight" primary and cyan "proof-light" accent.
 *
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/themes
 * @see https://clerk.com/docs/guides/customizing-clerk/appearance-prop/variables
 */
export const clerkModalAppearance = {
  theme: dark,
  variables: {
    // Primary brand color - amber safelight, matches the app's primary color
    colorPrimary: "oklch(0.7686 0.1647 70.0842)",
    colorPrimaryForeground: "oklch(0.1448 0 0)",

    // Background and foreground colors - matches the app's dark indigo theme
    colorBackground: "oklch(0.2103 0.0159 285.8852)",
    colorForeground: "oklch(0.9551 0.0058 285.8852)",

    // Card and surface colors - matches the app's card colors
    colorCard: "oklch(0.2489 0.0179 285.8852)",
    colorCardForeground: "oklch(0.9551 0.0058 285.8852)",

    // Input field colors - matches the app's input colors
    colorInput: "oklch(0.2739 0.0192 285.8852)",
    colorInputForeground: "oklch(0.9551 0.0058 285.8852)",

    // Secondary colors - matches the app's secondary colors
    colorSecondary: "oklch(0.2739 0.0192 285.8852)",
    colorSecondaryForeground: "oklch(0.9551 0.0058 285.8852)",

    // Muted colors for subtle elements
    colorMuted: "oklch(0.2489 0.0179 285.8852)",
    colorMutedForeground: "oklch(0.7137 0.0192 285.8852)",

    // Accent colors - cyan proof-light
    colorAccent: "oklch(0.7449 0.1225 200.5321)",
    colorAccentForeground: "oklch(0.1448 0 0)",

    // Border colors
    colorBorder: "oklch(0.2739 0.0192 285.8852)",

    // Shadow and ring colors
    colorRing: "oklch(0.7686 0.1647 70.0842)",

    // Typography
    fontFamily:
      "Sora, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",

    // Border radius to match app's design
    borderRadius: "0.625rem",
    borderRadiusSmall: "0.375rem",
    borderRadiusLarge: "0.875rem",
  },
  elements: {
    // Ensure consistent spacing and typography
    formButtonPrimary: {
      backgroundColor: "oklch(0.7686 0.1647 70.0842)",
      color: "oklch(0.1448 0 0)",
      "&:hover": {
        backgroundColor: "oklch(0.72 0.1647 70.0842)",
      },
      "&:active": {
        backgroundColor: "oklch(0.67 0.1647 70.0842)",
      },
    },
    formButtonReset: {
      backgroundColor: "oklch(0.2739 0.0192 285.8852)",
      color: "oklch(0.9551 0.0058 285.8852)",
      borderColor: "oklch(0.2739 0.0192 285.8852)",
      "&:hover": {
        backgroundColor: "oklch(0.3 0.0192 285.8852)",
      },
    },
    card: {
      backgroundColor: "oklch(0.2489 0.0179 285.8852)",
      borderColor: "oklch(0.2739 0.0192 285.8852)",
    },
    headerTitle: {
      color: "oklch(0.9551 0.0058 285.8852)",
      fontFamily:
        "Sora, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    headerSubtitle: {
      color: "oklch(0.7137 0.0192 285.8852)",
    },
    socialButtonsBlockButton: {
      backgroundColor: "oklch(0.2739 0.0192 285.8852)",
      color: "oklch(0.9551 0.0058 285.8852)",
      borderColor: "oklch(0.2739 0.0192 285.8852)",
      "&:hover": {
        backgroundColor: "oklch(0.3 0.0192 285.8852)",
      },
    },
    formFieldInput: {
      backgroundColor: "oklch(0.2739 0.0192 285.8852)",
      color: "oklch(0.9551 0.0058 285.8852)",
      borderColor: "oklch(0.2739 0.0192 285.8852)",
      "&:focus": {
        borderColor: "oklch(0.7686 0.1647 70.0842)",
        boxShadow: "0 0 0 1px oklch(0.7686 0.1647 70.0842)",
      },
    },
    footerActionLink: {
      color: "oklch(0.7686 0.1647 70.0842)",
      "&:hover": {
        color: "oklch(0.72 0.1647 70.0842)",
      },
    },
  },
} as const;
