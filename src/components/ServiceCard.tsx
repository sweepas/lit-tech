import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "../app/data/data"; // Assuming services is imported here

const ServiceCard = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between h-full"
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
            <h3 className="ml-4 text-lg font-semibold text-gray-700">
              {service.name}
            </h3>
          </div>

          <p className="text-gray-600 mb-4">{service.description}</p>

          {/* <div className="mt-auto">
            <Link
              href={service.link}
              className="inline-block mt-4 bg-violet-500 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition"
            >
              Learn more
            </Link>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
