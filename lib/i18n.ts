export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const copy = {
  en: {
    brandLine: "Quebec Board of Black Educators",
    nav: [
      ["About", "/about"], ["Programs", "/programs"], ["Impact", "/impact"],
      ["Events", "/events"], ["Get involved", "/get-involved"], ["Resources", "/resources"],
    ],
    register: "Register", donate: "Donate", explore: "Explore programs", discover: "Discover QBBE",
  },
  fr: {
    brandLine: "Quebec Board of Black Educators",
    nav: [
      ["À propos", "/about"], ["Programmes", "/programs"], ["Impact", "/impact"],
      ["Événements", "/events"], ["S’impliquer", "/get-involved"], ["Ressources", "/resources"],
    ],
    register: "S’inscrire", donate: "Faire un don", explore: "Explorer les programmes", discover: "Découvrir QBBE",
  },
} as const;

export function localePath(locale: Locale, path = "") {
  return `/${locale}${path === "/" ? "" : path}`;
}
