"use client";
import { useState } from "react";

export function NewsletterForm({ locale }: { locale: "en" | "fr" }) {
  const [email, setEmail] = useState(""); const [message, setMessage] = useState(""); const [busy, setBusy] = useState(false);
  async function submit(event: React.FormEvent) { event.preventDefault(); setBusy(true); const res = await fetch("/api/newsletter", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, locale }) }); setMessage(res.ok ? (locale === "en" ? "You’re on the list. Thank you." : "Vous êtes inscrit·e. Merci.") : (locale === "en" ? "Please try again." : "Veuillez réessayer.")); setBusy(false); }
  return <form onSubmit={submit} aria-label="Newsletter signup"><div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap" }}><input aria-label="Email address" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={locale === "en" ? "Your email address" : "Votre adresse courriel"} style={{ minHeight: 48, padding: ".7rem", flex: 1 }} /><button className="button button--gold" disabled={busy}>{locale === "en" ? "Stay connected" : "Rester informé"}</button></div>{message && <p role="status">{message}</p>}</form>;
}
