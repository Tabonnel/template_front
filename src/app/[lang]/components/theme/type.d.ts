/* eslint-disable no-unused-vars */

type ThemeColorsValues =
  | "currentColor"
  | "hsl(var(--background))"
  | "hsl(var(--foreground))"
  | "hsl(var(--card))"
  | "hsl(var(--card-foreground))"
  | "hsl(var(--popover))"
  | "hsl(var(--popover-foreground))"
  | "hsl(var(--primary))"
  | "hsl(var(--primary-foreground))"
  | "hsl(var(--secondary))"
  | "hsl(var(--tertiary))"
  | "hsl(var(--secondary-foreground))"
  | "hsl(var(--muted))"
  | "hsl(var(--muted-foreground))"
  | "hsl(var(--accent))"
  | "hsl(var(--accent-foreground))"
  | "hsl(var(--destructive))"
  | "hsl(var(--destructive-foreground))"
  | "hsl(var(--border))"
  | "hsl(var(--input))"
  | "hsl(var(--ring))";

type ColorNames =
  | "border"
  | "input"
  | "ring"
  | "background"
  | "foreground"
  | "primary"
  | "primary-foreground"
  | "secondary"
  | "secondary-foreground"
  | "tertiary"
  | "destructive"
  | "destructive-foreground"
  | "muted"
  | "muted-foreground"
  | "accent"
  | "accent-foreground"
  | "popover"
  | "popover-foreground"
  | "card"
  | "card-foreground";

interface ThemeColors {
  [key: string]: ThemeColorsValues | { [key: string]: ThemeColorsValues };
}
