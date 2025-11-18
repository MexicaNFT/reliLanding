import Image from "next/image";

interface SecurityItemProps {
  icon: any;
}

/**
 * A component that displays a single security item with an icon.
 *
 * @param {object} props - The props for the component.
 * @param {any} props.icon - The icon to display for the security item.
 * @returns {JSX.Element} The rendered security item.
 */
const SecurityItem: React.FC<SecurityItemProps> = ({ icon }) => (
  <div className="flex flex-col items-center rounded-lg">
    <Image
      src={icon}
      alt={""}
      width={251}
      height={268}
      className="mb-2"
      style={{ objectFit: "cover" }}
    />
  </div>
);

/**
 * A component that displays a security section with a title, description, and a list of security items.
 *
 * @returns {JSX.Element} The rendered security section.
 */
export default function Seguridad() {
  return (
    <section className="p-4">
      <div className="text-center my-8 md:my-12">
        <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#36454F] mb-4">
          Seguridad
        </h2>
        <p className="font-poppins text-base sm:text-lg md:text-xl text-[#787878] max-w-3xl mx-auto leading-tight md:leading-[28px]">
          Trabajando en infraestructura desarrollada con AWS, Reli está
          construido para apegarse a los estándares de seguridad más completos.
          Así blindamos tus datos.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-gray-100 p-4 mt-4 w-3/5 mx-auto border border-gray-300 rounded-lg">
          <SecurityItem icon={"/assets/aa.png"} />
          <SecurityItem icon={"/assets/bb.png"} />
          <SecurityItem icon={"/assets/cc.png"} />
        </div>
      </div>
    </section>
  );
}
