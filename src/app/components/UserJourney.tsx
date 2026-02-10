"use client";

import Image from "next/image";

/**
 * User Journey section component.
 * Displays a user story/persona.
 *
 * @returns {JSX.Element} The rendered User Journey section.
 */
export default function UserJourney() {
  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Section Badge */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <div className="bg-[#d8dff1] border border-neutral-200 rounded-full px-8 py-2">
            <p className="font-inter font-semibold text-lg lg:text-[22px] leading-[30px] text-gray-700 text-center">
              Un Ejemplo
            </p>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">
          {/* User Image Container */}
          <div className="relative flex-shrink-0">
            {/* Main user image */}
            <div className="relative w-[300px] h-[220px] sm:w-[400px] sm:h-[280px] lg:w-[510px] lg:h-[326px] rounded-xl shadow-[2px_-2px_20px_0px_rgba(0,0,0,0.1)] overflow-hidden bg-white">
              <Image
                src="/assets/miguel_ejemplo.png"
                alt="Miguel - Tax Lawyer working on laptop"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* User Story Text */}
          <div className="flex flex-col gap-4 lg:gap-6 flex-1 text-center lg:text-left lg:pt-12">
            <h3 className="font-inter font-semibold italic text-2xl sm:text-3xl lg:text-[36px] leading-tight text-[#36454f]">
              Miguel, 31 años, abogado fiscalista
            </h3>
            <div className="flex flex-col gap-4 lg:gap-6 font-inter font-normal text-base leading-relaxed text-[#585858]">
              <p>
                Miguel recibe la alerta: se actualizaron anexos de la Miscelánea Fiscal y el cliente pregunta
                “¿qué cambió y qué aplica a nuestro caso?”.
              </p>
              <p>
                Antes, abría el DOF, buscaba PDFs, comparaba versiones, copiaba citas a mano y se le iba media mañana entre anexos, reglas y referencias cruzadas.
              </p>
              <p>
                En Reli Research, Miguel ve el documento en la Gaceta el día que sale. Lo consulta en 1 minuto con Document Intelligence para entender cuáles fueron los cambios relevantes.
              </p>
              <p>
                Agrega los nuevos documentos a un Paquete de Investigación Fiscal, tiene el corpus actualizado. Y lo puede consultar en el futuro desde su celular en menos de 1 minuto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
