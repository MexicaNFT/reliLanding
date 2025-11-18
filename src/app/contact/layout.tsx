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

/**
 * The layout for the contact page.
 * It sets the metadata for the page and renders the children.
 *
 * @param {object} props - The props for the component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The rendered contact layout.
 */
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
