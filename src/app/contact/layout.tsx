import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto Reli - Comienza Tu Viaje",
  description:
    "Ponte en contacto con Reli. Completa nuestro formulario de contacto para comenzar tu viaje con nuestros servicios.",
  keywords: "Reli, contacto, envío de formulario, servicios de IA",
  openGraph: {
    title: "Contacto Reli - Comienza Tu Viaje",
    description:
      "Ponte en contacto con Reli. Completa nuestro formulario de contacto para comenzar tu viaje con nuestros servicios.",
    type: "website",
  },
  twitter: {
    title: "Contacto Reli ",
    description:
      "Ponte en contacto con Reli. Completa nuestro formulario de contacto.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
