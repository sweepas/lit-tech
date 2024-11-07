import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const customers = [
  {
    name: "Restaurants",
    description:
      "LIT helps companies manage essential systems, modernize IT, optimize data, and ensure security across their operations. Trusted by top UK organizations, LIT boosts performance, competitiveness, and customer experience in IT.",
    pictureUrl: "/images/restaurants.jpg",
    link: "/costumers/restaurants",
  },
  {
    name: "Co-Working Spaces",
    description:
      "LIT supports co-working spaces with streamlined management, advanced IT solutions, and secure data handling, enabling a productive and collaborative work environment.",
    pictureUrl: "/images/co-working.jpg",
    link: "/costumers/co-working-spaces",
  },
  {
    name: "Retail",
    description:
      "Retailers trust LIT to manage their IT infrastructure, optimize data, and secure transactions, providing a seamless experience for customers and driving growth.",
    pictureUrl: "/images/retail.jpg",
    link: "/costumers/retail",
  },
  {
    name: "Offices",
    description:
      "From IT modernization to data security, LIT helps office environments operate efficiently, ensuring seamless workflows and safeguarding critical data.",
    pictureUrl: "/images/offices.jpg",
    link: "/costumers/offices",
  },
  {
    name: "Hotels",
    description:
      "LIT empowers hotels to deliver a superior guest experience with reliable IT solutions, optimized data management, and robust security measures.",
    pictureUrl: "/images/hotels.jpg",
    link: "/costumers/hotels",
  },
];

const OurCustomers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-8 lg:px-16 lg:py-12 bg-gray-100" id="customers">
      <div className="text-center mb-8">
        <h1 className="font-bold text-2xl text-gray-700 tracking-tight lg:text-5xl lg:leading-tight">
          Who We <span className="text-violet-600">Work</span> With
        </h1>
        <p className="text-gray-700 lg:text-lg lg:leading-relaxed mt-2">
          LIT provides your organization with greater control, advanced
          insights, and features tailored for enterprise users.
        </p>
      </div>

      <Slider {...settings}>
        {customers.map((customer) => (
          <div key={customer.name} className="p-4">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden p-4">
              <div className="relative w-full" style={{ height: "250px" }}>
                <Image
                  src={customer.pictureUrl}
                  alt={customer.name}
                  className="absolute inset-0"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  width={500}
                  height={400}
                />
              </div>

              <div className="p-6 text-center flex-grow">
                <h3 className="text-xl font-bold text-gray-700">
                  {customer.name}
                </h3>
                <a
                  href={customer.link}
                  className="inline-block mt-4 bg-violet-500 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurCustomers;
