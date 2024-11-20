import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

const partnersData = [
  { name: "2n", logoUrl: "/images/2n.svg" },
  { name: "crestron", logoUrl: "/images/crestron.png" },
  { name: "Dell Technologies", logoUrl: "/images/Dellsvg.svg" },
  { name: "Logitech", logoUrl: "/images/logitech.png" },
  { name: "Salto inspired access logo", logoUrl: "/images/salto.png" },
  { name: "Hikvision", logoUrl: "/images/hikvision.png" },
  { name: "Ubiquiti logo", logoUrl: "/images/ubiquiti.png" },
  { name: "Ring logo", logoUrl: "/images/ring.png" },
];

const Partners = () => {
  return (
    <div
      className="bg-cover bg-center inset-0 w-full h-screen py-8 z-10 bg-fixed"
      style={{
        backgroundImage: `url('/images/gurkin.jpg')`,
      }}
      id="partners"
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="relative w-full h-full">
          <MaxWidthWrapper>
            <div className="relative z-50 flex flex-col align-middle items-center justify-center w-full h-full bg-opacity-80 bg-white p-8 mt-5 lg:mt-20 rounded-3xl overflow-y-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-700 text-center">
                Our <span className="text-violet-700">Partners</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-md sm:text-lg max-w-prose text-center mx-auto text-muted-foreground hidden sm:block">
                We collaborate with leading entities in the IT industry to
                deliver unparalleled reliability and instill a sense of
                tranquility.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 mt-6 sm:mt-8">
                {partnersData.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name}
                      width={200}
                      height={150}
                      className="object-contain sm:w-24 sm:h-16 md:w-32 md:h-20 lg:w-48 lg:h-28"
                    />
                  </div>
                ))}
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </div>
  );
};

export default Partners;
