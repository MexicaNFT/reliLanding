import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Reli',
  description: 'Política de privacidad de Reli',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Política de Privacidad
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Información que Recopilamos
            </h2>
            <p className="text-gray-700 mb-4">
              En Reli, recopilamos información que nos proporcionas directamente cuando:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Creas una cuenta</li>
              <li>Utilizas nuestros servicios</li>
              <li>Te comunicas con nosotros</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Uso de la Información
            </h2>
            <p className="text-gray-700">
              Utilizamos la información recopilada para proporcionar, mantener y mejorar nuestros servicios,
              así como para desarrollar nuevas funcionalidades.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Compartir Información
            </h2>
            <p className="text-gray-700">
              No compartimos tu información personal con empresas, organizaciones o individuos externos,
              excepto en los casos descritos en esta política.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Seguridad de los Datos
            </h2>
            <p className="text-gray-700">
              Implementamos medidas de seguridad diseñadas para proteger tu información contra acceso,
              alteración, divulgación o destrucción no autorizados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Tus Derechos
            </h2>
            <p className="text-gray-700">
              Tienes derecho a acceder, actualizar o eliminar tu información personal en cualquier momento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Contacto
            </h2>
            <p className="text-gray-700">
              Si tienes preguntas sobre esta Política de Privacidad, contáctanos en:{' '}
              <a href="mailto:privacy@reli.com" className="text-blue-600 hover:text-blue-800">
                privacy@reli.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
