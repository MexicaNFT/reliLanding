import React from "react";
import {
  Shield,
  FileText,
  UserCheck,
  Share,
  Server,
  Clock,
  RefreshCw,
  Mail,
} from "lucide-react";

interface PolicySectionProps {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}
export const metadata = {
  title: "Política de Privacidad",
  description: "Nuestra Política de Privacidad y Datos",
};

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

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#e6f7f4] via-white to-[#e6f7f4] text-gray-800">
        {/* Encabezado */}
        <header className="py-20 text-center bg-[#1ABC9C] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNjZmQzZDQiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-6xl font-extrabold mb-4 mt-6">
              Política de <span className="text-[#e6f7f4]">Privacidad</span>
            </h1>
            <p className="text-2xl max-w-2xl mx-auto">
              Protegiendo tu privacidad con transparencia y cuidado
            </p>
          </div>
        </header>

        {/* Contenido Principal */}
        <main className="max-w-4xl mx-auto px-4 py-16 flex-grow">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-12 transform transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-[#1ABC9C] mb-4">
              Nuestro Compromiso
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              En Reli.Ai, estamos comprometidos con la protección de la
              privacidad de nuestros usuarios y garantizando que sus datos sean
              manejados con cuidado y seguridad.
            </p>
          </div>

          {/* Secciones */}
          <PolicySection
            icon={<FileText className="w-8 h-8 text-white" />}
            title="Introducción"
            content="Reli.Ai está comprometido con la protección de la privacidad y la seguridad de la información personal de nuestros usuarios. Esta Política de Privacidad describe nuestras prácticas para la recolección, uso y divulgación de información que puede usarse para identificar o contactar a un usuario."
          />

          <PolicySection
            icon={<UserCheck className="w-8 h-8 text-white" />}
            title="Recolección de Información"
            content="Recopilamos información personal de los usuarios cuando se registran en nuestro sitio web, como nombre, dirección de correo electrónico y otros datos de contacto. También recopilamos información no identificable personalmente, como direcciones IP, tipos de navegador y patrones de uso del sitio web."
          />

          <PolicySection
            icon={<Shield className="w-8 h-8 text-white" />}
            title="Uso de la Información"
            content={
              <>
                <p className="text-lg text-gray-700 mb-4">
                  Utilizamos la información recopilada para proporcionar,
                  mantener y mejorar nuestros servicios. Esto incluye:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                  <li>Registrar usuarios y gestionar sus cuentas</li>
                  <li>
                    Personalizar la experiencia del usuario y proporcionar
                    soporte al cliente
                  </li>
                  <li>
                    Comunicarnos con los usuarios acerca de nuestros servicios,
                    promociones y actualizaciones
                  </li>
                  <li>
                    Monitorizar y analizar los patrones de uso para mejorar
                    nuestros servicios
                  </li>
                  <li>
                    Garantizar la seguridad e integridad de nuestros sistemas
                  </li>
                </ul>
              </>
            }
          />

          <PolicySection
            icon={<Share className="w-8 h-8 text-white" />}
            title="Compartir Información"
            content={
              <>
                <p className="text-lg text-gray-700 mb-4">
                  No vendemos ni compartimos información personal con terceros,
                  excepto:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                  <li>
                    Cuando sea necesario para cumplir con obligaciones legales o
                    proteger nuestros derechos
                  </li>
                  <li>
                    Con proveedores de servicios que nos ayudan a operar nuestro
                    negocio, sujetos a acuerdos de confidencialidad
                  </li>
                </ul>
              </>
            }
          />

          <PolicySection
            icon={<Server className="w-8 h-8 text-white" />}
            title="Almacenamiento y Seguridad de Datos"
            content="Utilizamos Amazon Web Services (AWS) Amplify Server para almacenar los datos de los usuarios de manera segura. Empleamos medidas de seguridad y encriptación de nivel industrial para proteger los datos de los usuarios contra accesos no autorizados o divulgaciones."
          />

          <PolicySection
            icon={<Clock className="w-8 h-8 text-white" />}
            title="Retención de Datos"
            content="Conservamos la información personal durante el tiempo necesario para cumplir con los fines para los que fue recopilada, o según lo exija la ley."
          />

          <PolicySection
            icon={<RefreshCw className="w-8 h-8 text-white" />}
            title="Cambios a Esta Política de Privacidad"
            content="Podemos actualizar esta Política de Privacidad de vez en cuando. Alentamos a los usuarios a revisar periódicamente la política para ver los cambios."
          />

          <PolicySection
            icon={<Mail className="w-8 h-8 text-white" />}
            title="Información de Contacto"
            content="Si tienes alguna pregunta o inquietud sobre nuestra Política de Privacidad, por favor contáctanos en support@reli.ai."
          />
        </main>

        {/* Pie de página */}
        <footer className="py-8 text-center ">
          <p className="text-gray-600 mb-2">
            © 2024 Reli AI. Todos los derechos reservados.
          </p>
          <p className="text-gray-500">
            Para preguntas o inquietudes, contáctanos en{" "}
            <a
              href="mailto:support@reli.ai"
              className="text-[#1ABC9C] hover:underline transition duration-300"
            >
              support@reli.ai
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default PrivacyPolicy;
