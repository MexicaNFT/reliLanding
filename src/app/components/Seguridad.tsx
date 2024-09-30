import Image from "next/image";
import aa from "../assets/aa.png";
import bb from "../assets/bb.png";
import cc from "../assets/cc.png";

interface SecurityItemProps {
  icon: any;
  title: string;
}

const SecurityItem: React.FC<SecurityItemProps> = ({ icon, title }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
    <Image src={icon} alt={title} width={64} height={64} className="mb-2" />
    <h3 className="text-center font-semibold">{title}</h3>
  </div>
);

export default function Seguridad() {
  return (
    <section className="p-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Seguridad</h2>
        <p className="text-base mb-6 text-center max-w-2xl mx-auto">
          Trabajando en infraestructura desarrollada por AWS, Reli está
          construido para apegarse a los estándares de seguridad más completos.
          Así blindamos tus datos.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <SecurityItem icon={aa} title="NOM 151" />
          <SecurityItem icon={bb} title="ISO-27000" />
          <SecurityItem icon={cc} title="SCO2" />
        </div>
      </div>
    </section>
  );
}
