import React from "react";

/**
 * A component that displays a product section with a title, description, and a video.
 *
 * @returns {JSX.Element} The rendered product component.
 */
const Product = () => {
  return (
    <div className="px-4 sm:px-6">
      <div className="text-center my-16 md:my-24">
        <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#36454F] mb-4">
          Producto
        </h2>
        <p className="font-poppins text-base sm:text-lg md:text-xl text-[#787878] max-w-3xl mx-auto leading-tight md:leading-[28px]">
          En Reli.Ai puedes encontrar una cartera de productos desarrollados
          para abogados y equipos legales de todas las áreas y ámbitos
        </p>
      </div>

      {/* Background container with grid pattern */}
      <div className="relative py-8 mb-10 sm:mb-16">
        {/* Grid background */}
        <div className="absolute inset-0 bg-white">
          <div
            className="absolute inset-0 bg-repeat h-full w-full"
            style={{
              backgroundImage: `
                   linear-gradient(to right, #e2f8fc 1px, transparent 1px),
                   linear-gradient(to bottom, #e2f8fc 1px, transparent 1px)
                 `,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        {/* Video container */}
        <div className="relative w-full max-w-[1000px] aspect-[1200/700] mx-auto border-2 border-[#dcdfe1] rounded-xl overflow-hidden bg-white">
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
    </div>
  );
};

export default Product;
