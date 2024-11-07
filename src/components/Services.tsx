import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ServiceCard from "./ServiceCard";

const services = [
  {
    name: "IT Procurement",
    description:
      "Our IT procurement service goes beyond just sourcing hardware, providing you with a customized approach to equip your operations with the right technology solutions.",
    link: "/solutions/it-procurement",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad42b6b60ce3902b417df_008-integration.svg",
  },
  {
    name: "Wifi Portal",
    description:
      "Transform your guest WiFi into a powerful engagement and marketing tool with our Captive WiFi platform, designed to offer much more than basic internet access.",
    link: "/solutions/wifi-portal",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad3e0dae6aa4f358d126b_006-mobile-data.svg",
  },
  {
    name: "Compliance",
    description:
      "We take a proactive approach to ensure that your systems not only meet regulatory and security standards but surpass them, keeping your operations secure and compliant.",
    link: "/solutions/compliance",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad42b6b60ce3902b417df_008-integration.svg",
  },
  {
    name: "Integration Support",
    description:
      "By connecting various business tools, we streamline your workflows and boost your productivity, creating an integrated system that enhances overall efficiency.",
    link: "/solutions/integration-support",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad4039a658b656c504f22_007-big-data.svg",
  },
  {
    name: "Tech Stack Support",
    description:
      "Our service blends expert consulting with managed solutions to ensure your business receives the highest level of expertise and innovation, optimizing your tech stack.",
    link: "/solutions/tech-stack-support",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad3f25d7d6f42908c86d9_009-procurement.svg",
  },
  {
    name: "Mobile Data",
    description:
      "Enhance your connectivity with our advanced mobile data services, ensuring seamless 4G and 5G coverage that keeps your operations running smoothly at all times.",
    link: "/solutions/mobile-data",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad3e0dae6aa4f358d126b_006-mobile-data.svg",
  },
  {
    name: "Voice Services",
    description:
      "As the PSTN switch-off approaches, transitioning to VoIP and telephony services is not just advantageous—it’s crucial for staying ahead in communication technology.",
    link: "/solutions/voice-services",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad3be625190ab78241807_005-voice.svg",
  },
  {
    name: "Hardware Repair",
    description:
      "We understand the importance of technology in your business, which is why our Hardware Repair services are designed to minimize downtime and keep your equipment in top working condition.",
    link: "/solutions/hardware-repair",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad37fe93f024b472cb5e1_003-cloud.svg",
  },
  {
    name: "Cloud & Data",
    description:
      "Investing in the right technology platforms at the right time is key to fostering innovation, increasing customer loyalty, and driving the growth of your business.",
    link: "/solutions/cloud-data",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad3be625190ab78241807_005-voice.svg",
  },
  {
    name: "Cyber Security",
    description:
      "In today’s digital landscape, securing your digital assets is vital. We go beyond traditional defense to ensure your business thrives in a world full of cyber threats.",
    link: "/solutions/cyber-security",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad16b5b345153cf4b8988_002-security.svg",
  },
  {
    name: "Office 365",
    description:
      "At SupportWizard, we specialize in optimizing how you work with our Office 365 solutions, tailored to meet the specific needs of your organization.",
    link: "/solutions/office-365",
    icon: "https://cdn.prod.website-files.com/651ac396a00c6890f0a9adfd/651ad155326a855d48ac5c67_Microsoft_365_(2022).svg",
  },
  {
    name: "IT Support",
    description:
      "Our IT Support service is designed to elevate your business by providing comprehensive, reliable assistance that caters to all of your technology needs.",
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
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Services;
