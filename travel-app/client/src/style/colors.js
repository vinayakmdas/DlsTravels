// ──────────────────────────────────────────────
// VoyageGo design tokens
// Import these wherever you need a color in JS
// (charts, inline styles, dynamic gradients, etc).
//
// IMPORTANT (Tailwind v4): Tailwind classes like
// bg-brand-primary read their values from the
// @theme block in src/index.css, NOT from this
// file directly (v4 dropped tailwind.config.js
// color reading). This file is the "spec" / the
// values you copy into index.css's @theme block,
// and what you import directly in JS. Keep both
// in sync whenever you add a color here.
// ──────────────────────────────────────────────

export const colors = {
  // Backgrounds
  bgDark: '#0D0A1A',        // hero / page background (near-black violet)
  bgDarkSoft: '#15102B',    // secondary dark surface (cards on dark bg)

  // Brand / accent
  primary: '#8B5CF6',       // violet-500 — main brand color
  primaryLight: '#C4B5FD',  // violet-300 — gradient headline text, hover states
  primaryDark: '#6D28D9',   // violet-700 — pressed states
  accentPink: '#D946EF',    // used at the end of CTA gradients

  // Text
  textOnDark: '#F5F3FF',     // headline text on dark hero
  textOnDarkMuted: '#B9B2CC',// paragraph text on dark hero
  textOnLight: '#1F1B2E',    // nav links, text on the glass navbar
  textMuted: '#6B6580',      // captions, helper text

  // Glass navbar
  navBg: 'rgba(255, 255, 255, 0.85)',
  navBorder: 'rgba(255, 255, 255, 0.3)',

  // Utility
  white: '#FFFFFF',
  border: 'rgba(255, 255, 255, 0.12)',

  // Booking form (light section)
  formBg: '#FFFFFF',          // white card background
  formBadgeBg: '#EDE7FB',     // "Booking" pill background
  formBadgeText: '#6D28D9',   // "Booking" pill text
  formBorder: '#E6E1F5',      // input / card borders
  formTextMuted: '#6B6580',   // helper text, placeholders
  formStepBg: '#7C3AED',      // numbered circle background
  formSelectedBg: '#F3EEFE',  // selected toggle background (AC, One Way...)
  formSelectedBorder: '#A78BFA', // selected toggle border
};

// Reusable gradients (used for headline text + CTA button)
export const gradients = {
  heroHeadline: `linear-gradient(90deg, ${colors.primaryLight}, ${colors.primary})`,
  ctaButton: `linear-gradient(90deg, ${colors.primary}, ${colors.accentPink})`,
};