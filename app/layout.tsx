import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "QBBE — Quebec Board of Black Educators", template: "%s | QBBE" },
  description: "Empowering students, strengthening families and transforming education across Quebec.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
