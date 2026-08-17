export function formatDate(date: string, locale: "en" | "fr") {
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-CA" : "en-CA", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${date}T12:00:00`));
}
