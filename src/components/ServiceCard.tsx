import React from "react";
import Image from "next/image";
import Link from "next/link";

type Service = {
  name: string;
  description: string;
  link: string;
  icon: string;
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
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
        <h3 className="ml-4 text-size-medium-2 font-bold text-gray-700">
          <strong>{service.name}</strong>
        </h3>
      </div>
      <div className="w-richtext">
        <p>{service.description}</p>
      </div>
      <div className="mt-4">
        <Link
          href={service.link}
          className="inline-block mt-4 bg-violet-500 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
