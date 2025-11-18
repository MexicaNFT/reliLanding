import React from "react";
import { Shield, Book, Clock } from "lucide-react";

interface PolicySectionProps {
  title: string;
  content: string;
  icon: React.ReactNode;
}

export const metadata = {
  title: "Política de Datos",
  description: "Nuestra Política de Privacidad y Datos",
};

/**
 * A component that displays a section of the data policy with a title, content, and an icon.
 *
 * @param {object} props - The props for the component.
 * @param {string} props.title - The title of the policy section.
 * @param {string} props.content - The content of the policy section.
 * @param {React.ReactNode} props.icon - The icon for the policy section.
 * @returns {JSX.Element} The rendered policy section.
 */
const PolicySection: React.FC<PolicySectionProps> = ({
  title,
  content,
  icon,
}) => (
  <div className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="bg-[#1ABC9C] p-3 rounded-full mr-4">{icon}</div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-lg leading-relaxed text-gray-700">{content}</p>
    </div>
  </div>
);

/**
 * A component that displays the company's data policy.
 * It includes sections on Introduction, Data Usage, and Data Retention.
 *
 * @returns {JSX.Element} The rendered data policy page.
 */
const DataPolicy: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#e6f7f4] via-white to-[#e6f7f4] text-gray-800">
        {/* Header */}
        <header className="py-20 text-center bg-[#1ABC9C] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNjZmQzZDQiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-6xl font-extrabold mb-4 mt-6">
              Política de <span className="text-[#e6f7f4]">Datos</span>
            </h1>
            <p className="text-2xl max-w-2xl mx-auto">
              Protegiendo tu privacidad con transparencia y cuidado
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-16 flex-grow">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-12 transform transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-[#1ABC9C] mb-4">
              Nuestro Compromiso
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              En Reli.Ai, priorizamos la privacidad y seguridad de los datos de
              nuestros clientes. Hemos diseñado nuestras políticas de uso y
              retención de datos de acuerdo con las directrices de OpenAI para
              garantizar el manejo responsable de tu información.
            </p>
          </div>

          <PolicySection
            icon={<Book className="w-8 h-8 text-white" />}
            title="Introducción"
            content="En Reli.Ai, priorizamos la privacidad y seguridad de los datos de nuestros clientes. Hemos diseñado nuestras políticas de uso y retención de datos de acuerdo con las directrices de OpenAI para garantizar el manejo responsable de tu información. Esta Política de Datos describe nuestras prácticas y procedimientos para los datos enviados a través de nuestra caja de herramientas de Reli.Ai, que está construida sobre la API de OpenAI."
          />

          <PolicySection
            icon={<Shield className="w-8 h-8 text-white" />}
            title="Uso de Datos"
            content="A partir del 1 de abril de 2023, Reli.Ai y OpenAI no utilizarán los datos enviados por los clientes a través de nuestra API para entrenar o mejorar nuestros modelos, a menos que decidas explícitamente compartir tus datos con nosotros para este propósito. Puedes optar por compartir datos durante el proceso de creación de herramientas. Por defecto, no utilizaremos los datos enviados por los clientes a través de nuestra API para entrenar modelos de OpenAI o mejorar nuestras ofertas de servicios. Los datos enviados por el usuario para el ajuste fino solo se usarán para ajustar el modelo del cliente. Sin embargo, permitiremos que los usuarios opten por compartir sus datos para mejorar el rendimiento del modelo. Compartir tus datos asegurará que futuras iteraciones del modelo mejoren para tus casos de uso. Los datos enviados a la API antes del 1 de abril de 2023 pueden haber sido utilizados para mejoras si el cliente no había optado anteriormente por no compartir los datos."
          />

          <PolicySection
            icon={<Clock className="w-8 h-8 text-white" />}
            title="Retención de Datos"
            content="Cualquier dato enviado a través de la API se retendrá para fines de monitoreo de abuso y mal uso durante un máximo de 30 días, después de lo cual se eliminará (a menos que la ley exija lo contrario). Esto se aplica tanto a las solicitudes de los usuarios como a las respuestas, así como a los datos de entrenamiento enviados para ajustar modelos a través del endpoint de archivos. Un número limitado de empleados autorizados de Reli.Ai y OpenAI, así como contratistas externos especializados sujetos a obligaciones de confidencialidad y seguridad, pueden acceder a estos datos únicamente para investigar y verificar el abuso sospechado. Los clientes empresariales que implementen casos de uso con baja probabilidad de mal uso pueden solicitar que no se almacenen en absoluto los datos de la API, incluso para monitoreo de seguridad y prevención. OpenAI aún puede tener clasificadores de contenido que marquen cuando se sospeche que los datos contienen abuso de la plataforma. Los datos enviados por el usuario a través del endpoint de archivos, por ejemplo, para ajustar un modelo, se retendrán hasta que el usuario elimine el archivo. Para más información sobre las protecciones técnicas, certificaciones de seguridad, almacenamiento de datos, cifrado y otros detalles relevantes, consulta nuestra sección de preguntas frecuentes. Si tienes alguna pregunta o inquietud sobre nuestra política de datos, contáctanos en reli.ai/support."
          />
        </main>

        {/* Footer */}
        <footer className="py-8 text-center">
          <p className="text-gray-600 mb-2">
            © {new Date().getFullYear()} Reli AI. Todos los derechos reservados.
          </p>
          <p className="text-gray-500">
          Para preguntas o inquietudes, visita nuestra página de{" "}
          <a
              href="/support"
              className="text-[#1ABC9C] hover:underline transition duration-300"
            >
              Soporte
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default DataPolicy;
