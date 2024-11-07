import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";

const services = [
  {
    name: "IT Procurement",
    description:
      "Our procurement services are more than just sourcing hardware; they represent a bespoke journey towards empowering your operations with the right tech solutions.",
    link: "/solutions/it-procurement",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad42b6b60ce3902b417df_008-integration.svg",
  },
  {
    name: "Wifi Portal",
    description:
      "Unlock the full potential of your guest WiFi with our Captive WiFi platform- a powerful tool designed to transform a simple internet access point into a comprehensive engagement and marketing platform.",
    link: "/solutions/wifi-portal",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad3e0dae6aa4f358d126b_006-mobile-data.svg",
  },
  {
    name: "Compliance",
    description:
      "Our dedicated approach ensures your systems not only meet but exceed the necessary regulatory and security standards.",
    link: "/solutions/compliance",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad42b6b60ce3902b417df_008-integration.svg",
  },
  {
    name: "Integration Support",
    description:
      "By bridging the gap between various business tools, we not only streamline your processes but also enhance your overall efficiency and productivity.",
    link: "/solutions/integration-support",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad4039a658b656c504f22_007-big-data.svg",
  },
  {
    name: "Tech Stack Support",
    description:
      "Our approach integrates expert consulting with all managed service solutions, ensuring your business benefits from top-tier expertise and innovation.",
    link: "/solutions/tech-stack-support",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad3f25d7d6f42908c86d9_009-procurement.svg",
  },
  {
    name: "Mobile Data",
    description:
      "Elevate your business connectivity with our advanced 4G and 5G mobile data services, meticulously designed to ensure your operations never miss a beat.",
    link: "/solutions/mobile-data",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad3e0dae6aa4f358d126b_006-mobile-data.svg",
  },
  {
    name: "Voice Services",
    description:
      "With the approaching PSTN switch-off, transitioning to VoIP services and telephony isn't just beneficial—it's essential.",
    link: "/solutions/voice-services",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad3be625190ab78241807_005-voice.svg",
  },
  {
    name: "Hardware Repair",
    description:
      "Our team understands that the backbone of your business relies heavily on technology. That's why our Hardware Repair services are designed to ensure your equipment remains in peak condition, minimizing downtime and maintaining productivity.",
    link: "/solutions/hardware-repair",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad37fe93f024b472cb5e1_003-cloud.svg",
  },
  {
    name: "Cloud & Data",
    description:
      "Make the right technology investments at the right time and on the right platforms to drive innovation, increase customer loyalty and grow your business.",
    link: "/solutions/cloud-data",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad3be625190ab78241807_005-voice.svg",
  },
  {
    name: "Cyber Security",
    description:
      "In the digital age, cyber security is not just an option; it's a necessity. We understand that protecting your digital assets goes beyond mere defense—it’s about enabling your business to thrive in a landscape filled with threats.",
    link: "/solutions/cyber-security",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad16b5b345153cf4b8988_002-security.svg",
  },
  {
    name: "Office 365",
    description:
      "At SupportWizard, we specialise in transforming the way you work with our comprehensive Office 365 solutions, designed to meet the unique needs of your enterprise.",
    link: "/solutions/office-365",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad155326a855d48ac5c67_Microsoft_365_(2022).svg",
  },
  {
    name: "IT Support",
    description:
      "Elevate your business with our comprehensive IT Support services, meticulously crafted to meet your every need.",
    link: "/solutions/it-support",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad12317128b72db15aaf1_001-support.svg",
  },
];

const Services = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div
          id="services"
          className="flex flex-col items-start px-4 py-8 lg:px-16 lg:py-12 bg-gray-100"
        >
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row w-full mb-8">
            <div className="lg:w-1/2">
              <h1 className="font-bold text-2xl text-gray-700 tracking-tight mb-4 lg:text-6xl lg:leading-tight">
                We Got <span className="text-violet-600">IT</span> Sorted
              </h1>
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-700 lg:text-lg lg:leading-relaxed">
                LIT helps companies manage their mission-critical systems and
                operations while modernizing IT, optimizing data, and
                strengthening security and scalability across their business.
                Trusted by some of the UK’s most recognized companies and
                organizations, LIT drives enhanced performance, competitiveness,
                and customer experience throughout their IT environments.
                Discover how we deliver excellence for our customers and team.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-violet-100 text-violet-900">
                    <Image
                      loading="lazy"
                      src={service.icon}
                      alt={service.name}
                      className="h-10 w-10"
                      width={40}
                      height={40}
                    />
                  </div>
                  <h3 className="ml-4 text-size-medium-2 font-bold  text-gray-700 ">
                    <strong>{service.name}</strong>
                  </h3>
                </div>
                <div className="w-richtext">
                  <p>{service.description}</p>
                </div>
                <div className="mt-4">
                  <a
                    href={service.link}
                    className="inline-block mt-4 bg-violet-500 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition"
                  >
                    <a>Learn more</a>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};
export default Services;
