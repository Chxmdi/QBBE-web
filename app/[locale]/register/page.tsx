import { Suspense } from "react";
import { notFound } from "next/navigation";
import { RegistrationForm } from "@/components/registration-form";
import { isLocale } from "@/lib/i18n";
export default async function RegisterPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <Suspense><RegistrationForm locale={locale} /></Suspense>; }
