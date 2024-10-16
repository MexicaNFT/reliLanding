import React from "react";

const Product: React.FC = () => {
  return (
    <div>
      <div className="text-center my-16 md:my-24">
        <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#36454F] mb-4">
          Producto
        </h2>
        <p className="font-poppins text-base sm:text-lg md:text-xl text-[#787878] max-w-3xl mx-auto leading-tight md:leading-[28px]">
          En Reli.Ai puedes encontrar una cartera de productos desarrollados
          para abogados y equipos legales de todas las áreas y ámbitos
        </p>
      </div>

      <div className="relative w-full max-w-[1000px] aspect-[1200/700] mx-auto mb-10 sm:mb-16 border-2 border-[#dcdfe1] rounded-xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-fit"
        >
          <source src="/assets/product.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Product;
