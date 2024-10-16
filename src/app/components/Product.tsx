import React from "react";
import Image from "next/image";
import Assistant from "../assets/Assistant.png";

const Product: React.FC = () => {
  return (
    <div>
      <div className="text-center my-16 md:my-24">
        <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#36454F] mb-4">
          Product
        </h2>
        <p className="font-poppins text-base sm:text-lg md:text-xl text-[#787878] max-w-3xl mx-auto leading-tight md:leading-[28px]">
          En Reli.Ai puedes encontrar una cartera de productos desarrollados
          para abogados y equipos legales de todas las áreas y ámbitos
        </p>
      </div>

      <div className="relative w-full max-w-[1000px] aspect-[1200/700] mx-auto mb-10 sm:mb-16 border-2 border-[#dcdfe1] rounded-xl overflow-hidden">
        <Image
          src={Assistant}
          alt="Hero image"
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Product;
