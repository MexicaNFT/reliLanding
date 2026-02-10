import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Reli",
  description: "Términos y condiciones de uso de Reli",
};

const DataPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#d8dff1] via-white to-[#d8dff1] text-gray-800">
      <header className="py-20 text-center bg-[#3758f9] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNjZmQzZDQiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]" />
        </div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 mt-6">
            Términos y <span className="text-[#d8dff1]">Condiciones</span>
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16 flex-grow">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p className="text-2xl font-bold text-[#3758f9]">TÉRMINOS Y CONDICIONES DE USO</p>
            <p>Última actualización: 06/02/2026</p>

            <p className="font-semibold text-[#3758f9]">PROEMIO Y ACEPTACIÓN</p>
            <p>
              Bienvenido a Reli (en adelante, la “Plataforma”), operada por MEXICANFTIMES S.A DE
              C.V. (en adelante, la “Empresa”), con domicilio en Hacienda del Ciervo 22,
              Huixquilucan, Estado de México.
            </p>
            <p>
              Al hacer clic en la casilla “Acepto los Términos y Condiciones” y completar el
              proceso de registro, Usted (en adelante, el “Usuario”) manifiesta su consentimiento
              expreso y sin reservas para obligarse bajo el presente Contrato de Adhesión, de
              conformidad con el artículo 1803 del Código Civil Federal (consentimiento expreso
              por medios electrónicos) y con el marco de equivalencia funcional de mensajes de
              datos del Código de Comercio, cuando aplique.
            </p>
            <p>
              Si no está de acuerdo con estos términos, deberá abstenerse de utilizar la
              Plataforma
            </p>

            <p className="font-semibold text-[#3758f9]">
              NATURALEZA DEL SERVICIO Y DESLINDE DE RESPONSABILIDAD
            </p>
            <p>
              La Empresa provee una herramienta tecnológica (SaaS) que permite al Usuario realizar
              investigación jurídica y legislativa, consultar normativa mexicana y
              generar/organizar contenidos y documentos de apoyo (en adelante, el “Servicio”).
            </p>
            <p>
              EL USUARIO RECONOCE Y ACEPTA QUE LA EMPRESA NO ES UN DESPACHO DE ABOGADOS NI PRESTA
              SERVICIOS DE ASESORÍA JURÍDICA PROFESIONAL.
            </p>
            <p>La Plataforma no sustituye el consejo legal de un abogado.</p>
            <p>
              El usuario reconoce que cualquier contenido generado por modelos de IA o plantillas
              requiere revisión humana antes de su uso.
            </p>
            <p>
              El Usuario reconoce que toda responsabilidad por el uso del contenido generado por la
              plataforma recae en su responsabilidad y la Empresa no se hace responsable por
              reacciones u hechos realizados por los contenidos generados en la Plataforma.
            </p>

            <p className="font-semibold text-[#3758f9]">
              LICENCIA DE USO Y PROPIEDAD INTELECTUAL:
            </p>
            <p>
              De la Plataforma: La Empresa otorga al Usuario una licencia limitada, revocable, no
              exclusiva e intransferible para utilizar la Plataforma conforme a estos TyC y las
              reglas aplicables de distribución (incluyendo, cuando corresponda, las reglas de la
              tienda de aplicaciones).
            </p>
            <p>
              Todos los derechos de propiedad intelectual sobre el software, diseño, algoritmos,
              marcas y bases de datos pertenecen exclusivamente a la Empresa o a sus licitantes.
            </p>
            <p>
              Queda prohibida la ingeniería inversa, copia, extracción de datos, reventa del
              software o cualquier uso que viole derechos de propiedad intelectual o seguridad.
            </p>
            <p>
              Del Contenido del Usuario: El Usuario conserva la plena propiedad de los datos que
              introduce y del contenido que genera. El Usuario otorga a la Empresa un permiso
              únicamente para alojar, procesar, respaldar y visualizar dicha información con el fin
              de prestar o mejorar el Servicio.
            </p>

            <p className="font-semibold text-[#3758f9]">CUENTA DE USUARIO Y SEGURIDAD</p>
            <p>
              El Usuario es el único responsable de mantener la confidencialidad de sus
              credenciales de acceso.
            </p>
            <p>
              El Usuario se compromete a notificar inmediatamente a support@reli.ai cualquier uso
              no autorizado o incidente de seguridad relacionado con su cuenta.
            </p>

            <p className="font-semibold text-[#3758f9]">PRECIOS, PAGOS Y SUSCRIPCIONES</p>
            <p>
              Tarifas: La Plataforma puede ofrecer planes de suscripción y compras dentro de la
              app. En iOS, las compras dentro de la app y su facturación se realizan a través de ,
              conforme a sus reglas y condiciones aplicables.
            </p>
            <p>
              Renovación automática: En caso de suscripciones gestionadas por la tienda de
              aplicaciones, la renovación/cancelaciòn se administra desde la configuración de la
              cuenta del Usuario en dicha tienda.
            </p>
            <p>
              Facturación (CFDI): El Usuario podrá solicitar su CFDI conforme a los mecanismos
              habilitados por la Empresa y dentro de los plazos fiscales aplicables.
            </p>

            <p className="font-semibold text-[#3758f9]">
              POLÍTICA DE REEMBOLSOS Y DERECHO DE REVOCACIÓN
            </p>
            <p>
              Para compras efectuadas a través de (App Store / In-App Purchases), las solicitudes
              de reembolso se rigen por el proceso y criterios de Apple.
            </p>
            <p>
              Para compras directas (si existieran) realizadas fuera de la tienda de aplicaciones,
              cualquier política de reembolso se aplicará en la medida permitida por la Ley Federal
              de Protección al Consumidor; el Usuario reconoce que, tratándose de servicios,
              existen supuestos y excepciones relacionados con el momento de prestación del
              servicio.
            </p>

            <p className="font-semibold text-[#3758f9]">LIMITACION DE RESPONSABILIDAD</p>
            <p>En la medida máxima permitida por la Ley Aplicable en México:</p>
            <p>
              La responsabilidad total acumulada de la Empresa hacia el Usuario por cualquier
              reclamación derivada de estos términos no excederá la cantidad total pagada por el
              Usuario a la Empresa en los últimos seis (6) meses anteriores al evento que dio
              origen a la reclamación.
            </p>
            <p>
              La Empresa no será responsable por daños indirectos, consecuentes, lucro cesante,
              pérdida de datos o de oportunidades de negocio.
            </p>

            <p className="font-semibold text-[#3758f9]">USO DE INTELIGENCIA ARTIFICIAL Y DATOS</p>
            <p>
              La Política de Datos publicada por la Empresa establece que, por defecto, los datos
              enviados a través de su herramienta no se utilizan para entrenar modelos, salvo que
              el Usuario opte explícitamente por compartir datos para ese fin.
            </p>
            <p>
              El usuario puede borrar las conversaciones y datos que ha subido a la plataforma en
              el momento que desee; adicionalmente, se retendrán las conversaciones borradas por 30
              días para monitoreo de abuso.
            </p>

            <p className="font-semibold text-[#3758f9]">JURISDICCIÓN Y LEY APLICABLE</p>
            <p>
              Para la interpretación y cumplimiento de este contrato, las partes se someten a las
              leyes federales de México y a la jurisdicción de los tribunales competentes en la
              Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles por
              sus domicilios presentes o futuros.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center">
        <p className="text-gray-600 mb-2">
          © {new Date().getFullYear()} Reli AI. Todos los derechos reservados.
        </p>
        <p className="text-gray-500">
          Para preguntas o inquietudes, visita nuestra página de{" "}
          <a
            href="/support"
            className="text-[#3758f9] hover:underline transition duration-300"
          >
            Soporte
          </a>
        </p>
      </footer>
    </div>
  );
};

export default DataPolicy;
