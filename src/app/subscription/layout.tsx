import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suscripción a Reli",
  description:
    "Suscríbete a Reli y accede a nuestras herramientas de IA. Elige el plan que mejor se adapte a tus necesidades.",
  keywords: "Reli, suscripción, planes, herramientas de IA, elegir plan",
  openGraph: {
    title: "Suscripción a Reli - Elige Tu Plan",
    description:
      "Suscríbete a Reli y accede a nuestras herramientas de IA. Elige el plan que mejor se adapte a tus necesidades.",
    type: "website",
  },
  twitter: {
    title: "Suscripción a Reli - Elige Tu Plan",
    description: "Suscríbete a Reli y elige el plan perfecto para ti.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SubscriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
