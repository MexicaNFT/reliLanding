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
    <Image
      src={icon}
      alt={title}
      width={125}
      height={164}
      className="mb-2"
      style={{ objectFit: "cover" }}
    />
    <h3 className="text-center font-semibold">{title}</h3>
  </div>
);

export default function Seguridad() {
  return (
    <section className="p-4 ">
      <div className="text-center my-16 md:my-24">
        <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#36454F] mb-4">
          Seguridad
        </h2>
        <p className="font-poppins text-base sm:text-lg md:text-xl text-[#787878] max-w-3xl mx-auto leading-tight md:leading-[42px]">
          Trabajando en infraestructura desarrollada por AWS, Reli está
          construido para apegarse a los estándares de seguridad más completos.
          Así blindamos tus datos.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 bg-gray-100 p-4 mt-8">
          <SecurityItem icon={aa} title="NOM 151" />
          <SecurityItem icon={bb} title="ISO-27000" />
          <SecurityItem icon={cc} title="SCO2" />
        </div>
      </div>
    </section>
  );
}
