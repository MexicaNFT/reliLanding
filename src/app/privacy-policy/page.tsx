import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Nuestra Política de Privacidad y Datos",
};

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#d8dff1] via-white to-[#d8dff1] text-gray-800">
      <header className="py-20 text-center bg-[#3758f9] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNjZmQzZDQiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]" />
        </div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 mt-6">
            Política de <span className="text-[#d8dff1]">Privacidad</span>
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16 flex-grow">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p className="text-2xl font-bold text-[#3758f9]">Aviso de Privacidad Integral</p>
            <p>Última actualización: 06/02/2026</p>
            <p>
              Reli.Ai, en adelante el “Responsable”, como parte de MEXICANFTIMES, S.A DE C.V.,
              con domicilio en Hacienda del Ciervo 22, Huixquilucan, Estado de México, es
              responsable del uso y protección de sus datos personales, y al respecto le informa
              lo siguiente.
            </p>

            <p className="font-semibold text-[#3758f9]">DATOS PERSONALES QUE RECABAMOS</p>
            <p>
              Para la presentación de nuestros servicios Legaltech podemos recabar, según uso de
              la Plataforma, las siguientes categorías:
            </p>
            <p>
              Datos de Identificación y Contacto: nombre, correo electrónico, información de
              contacto y datos asociados a la cuenta.
            </p>
            <p>
              Datos de uso: identificadores del dispositivo/cuenta, métricas de uso y, en su
              caso, historial de búsqueda (cuando se habilita en la app/plataforma).
            </p>
            <p>
              Datos Patrimoniales y Financieros: si el pago ocurre mediante compras dentro de la
              app, la transacción es procesada por la tienda de aplicaciones (no recibimos el
              CVV); si existe facturación directa fuera de la tienda, se recaban datos fiscales y
              de facturación necesarios.
            </p>
            <p>
              Datos Sensibles: en caso de que el Usuario ingrese información sensible dentro de
              documentos o consultas, se tratará conforme a las reglas de consentimiento expreso
              aplicables cuando corresponda.
            </p>

            <p className="font-semibold text-[#3758f9]">FINALIDADES DEL TRATAMIENTO</p>
            <p>Finalidades Primarias (necesarias):</p>
            <p>Creación y gestión de cuenta de usuario.</p>
            <p>
              Prestación del servicio de investigación/consulta y generación/gestión de contenidos
              y documentos.
            </p>
            <p>Soporte técnico y atención a clientes (contacto: support@reli.ai).</p>
            <p>Finalidades Secundarias (no necesarias):</p>
            <p>
              Envío de comunicaciones informativas, promociones y actualizaciones del Servicio.
            </p>
            <p>
              Analítica y mejora del Servicio mediante información no identificable personalmente
              (por ejemplo, patrones de uso agregados).
            </p>
            <p>
              Si usted no desea que sus datos sean tratados para finalidades secundarias, puede
              enviar un correo a support@reli.ai manifestando su negativa.
            </p>

            <p className="font-semibold text-[#3758f9]">ÉTICA DE DATOS E INTELIGENCIA ARTIFICIAL</p>
            <p>Política aplicable (modelo “Privacidad por defecto con opt-in”):</p>
            <p>
              De acuerdo con la Política de Datos del Responsable por defecto los datos enviados
              por clientes a través de nuestras herramientas no se usan para entrenar modelos,
              salvo que el Usuario opte explícitamente por compartir datos para ese propósito;
              asimismo, se menciona una retención máxima de 30 días para monitoreo de abuso y mal
              uso, salvo obligación legal.
            </p>

            <p className="font-semibold text-[#3758f9]">TRANSFERENCIA DE DATOS</p>
            <p>Sus datos pueden ser transferidos a:</p>
            <p>
              Autoridades competentes (por requerimiento legal): por ejemplo, o, cuando exista
              obligación legal o requerimiento válido.
            </p>
            <p>Proveedores de Servicios:</p>
            <p>
              Cuando el almacenamiento/hosting del servicio opere en GCS, según su política
              pública consultable en:
            </p>
            <p>
              Cuando la herramienta use una integración para procesar solicitudes y generar
              respuestas, conforme a la Política de Datos.
            </p>
            <p>
              Para gestionar compras dentro de la app y suscripciones cuando corresponda.
            </p>

            <p className="font-semibold text-[#3758f9]">DERECHOS ARCO</p>
            <p>
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus
              datos personales.
            </p>
            <p>
              Para ejercer sus derechos ARCO, deberá enviar una solicitud a support@reli.ai
              conteniendo:
            </p>
            <p>Nombre del titular y medio para comunicarle la respuesta.</p>
            <p>Documentos que acrediten su identidad.</p>
            <p>
              Descripción clara de los datos respecto de los que busca ejercer el derecho.
            </p>
            <p>
              Plazos: El Responsable comunicará la determinación adoptada en un plazo máximo de 20
              días hábiles y, si procede, hará efectiva la solicitud dentro de los 15 días hábiles
              siguientes.
            </p>

            <p className="font-semibold text-[#3758f9]">USO DE COOKIES</p>
            <p>
              En nuestra página de internet podemos utilizar cookies y tecnologías para monitorear
              comportamiento de navegación (como dirección IP, tipo de navegador y sistema
              operativo) y mejorar la experiencia del usuario.
            </p>

            <p className="font-semibold text-[#3758f9]">CAMBIOS AL AVISO DE PRIVACIDAD</p>
            <p>
              El presente aviso de privacidad puede sufrir modificaciones derivadas de nuevos
              requerimientos legales o de nuestras propias necesidades. Nos comprometemos a
              mantenerlo informado sobre los cambios a través de nuestro sitio web oficial
              (reli.ai)
            </p>

            <p className="font-semibold">ÚLTIMA ACTUALIZACIÓN: 06/02/2025</p>
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

export default PrivacyPolicy;
