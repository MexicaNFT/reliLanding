import Image from "next/image";
import {
  HelpCircle,
  RefreshCw,
  Book,
  Building,
  Globe,
  FileText,
} from "lucide-react";

type CardProps = {
  icon: React.ElementType;
  text: string;
};

function Card({ icon: Icon, text }: CardProps) {
  return (
    <div className="border border-[#1ABC9C] rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
      <div className="text-gray-600">
        <Icon size={20} />
      </div>
      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  );
}

export default function MiguelProfile() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="flex flex-col md:flex-row gap-12 mb-12">
        <div className="w-full md:w-1/3">
          <div className="mb-4">
            <Image
              src="/assets/image3.png"
              alt="Miguel profile"
              width={250}
              height={180}
              className="rounded-md"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-700 mt-4">
            Miguel, 31 años
          </h1>
          <h2 className="text-xl font-semibold text-gray-600">
            Abogado Fiscalista
          </h2>
        </div>

        <div className="w-full md:w-2/3 flex items-end">
          <p className="text-gray-600 leading-relaxed mt-4 md:mt-0">
            Miguel es un abogado. Él trabaja en un despacho grande de la ciudad
            de México en donde gran parte de su trabajo es estar al tanto de las
            actualizaciones de las disposiciones fiscales vigentes aplicables
            para sus clientes. Hoy, Miguel solo se dedica a cerrar más clientes
            y casos porque Reli ya hace el trabajo pesado.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card icon={HelpCircle} text="+20K Dudas Atendidas" />
        <Card icon={RefreshCw} text="Actualizado Diario" />
        <Card icon={Book} text="Toda la Normativa de Todos los Estados" />
        <Card icon={Building} text="Toda la Normativa a Nivel Federal" />
        <Card
          icon={Globe}
          text="Toda la Normativa en Tratados Internacionales"
        />
        <Card
          icon={FileText}
          text="Toda la Normativa en Tratados Internacionales"
        />
      </div>
    </div>
  );
}
