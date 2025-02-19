import Image from "next/image";

type WelcomeBannerProps = {
  text: string;
};

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ text }) => {
  return (
    <div className="flex justify-center gap-x-1 bg-white py-2 px-4 rounded-full w-max mx-auto mb-6 border border-[#E5E5E5]">
      <Image
        src="/assets/favicon.ico"
        alt="Reli"
        width={30}
        height={30}
        style={{ objectFit: "contain" }}
      />
      <h1 className="text-[#1ABC9C] text-xl font-semibold">{text}</h1>
    </div>
  );
};

export default WelcomeBanner;
