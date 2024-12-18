import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ServiceCard from "./ServiceCard";
import { services } from "../app/data/data";

const Services = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div
          id="services"
          className="flex flex-col items-start px-4 py-20 lg:px-16 lg:py-20 bg-gray-100"
        >
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row w-full mb-8">
            <div className="lg:w-1/2">
              <h1 className="font-bold text-2xl text-gray-700 tracking-tight mb-4 lg:text-6xl lg:leading-tight">
                What We <span className="text-violet-600">Do</span>
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

          <ServiceCard />
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Services;
