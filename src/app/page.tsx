"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {
  ImageDown,
  FileBadge2,
  Sprout,
  Cctv,
  MonitorCheck,
  Router,
  Network,
  MonitorPlay,
  Handshake,
} from "lucide-react";
import Banner from "@/components/ui/banner";
import Partners from "@/components/Partners";
import SocialLinks from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import React from "react";
import Services from "@/components/Services";
import OurCostumers from "@/components/OurCostumers";

const perks = [
  {
    name: "Innovative solutions",
    Icon: MonitorCheck,
    description:
      "At London IT we pride ourselves on staying up to date with new technologies and innovations.",
  },
  {
    name: "Our Quality Guarantee",
    Icon: FileBadge2,
    description:
      "Our expert team ensures guaranteed quality in every aspect of our services, delivering excellence that exceeds expectations. With their extensive experience and dedication, you can trust in the reliability and superiority of our solutions.",
  },
  {
    name: "Leading partnerships",
    Icon: Handshake,
    description:
      "We collaborate with leading entities in the IT industry to deliver unparalleled reliability and instill a sense of tranquility.",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <Banner />
        <div className="relative z-30 flex flex-col items-center justify-center h-full py-20 mx-auto text-center max-w-3xl">
          <MaxWidthWrapper>
            <h2 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl">
              <span className="inline-block animate-fade-in-up-delay-0">
                Elevating&nbsp;
              </span>
              <span className="text-violet-700 inline-block animate-fade-in-up-delay-1">
                Connectivity<span className=" text-gray-700">, &nbsp;</span>
              </span>
              <span className="inline-block animate-fade-in-up-delay-2">
                Simplifying&nbsp;
              </span>
              <span className="text-violet-700 inline-block animate-fade-in-up-delay-3">
                IT<span className=" text-gray-700">.&nbsp;</span>
              </span>
            </h2>
            <p className="mt-6 text-lg max-w-prose text-muted-foreground animate-fade-in-up-delay-3">
              Welcome to London IT solutions. Tailored IT and network solutions
              for your home and business.
            </p>
            <div className="mt-6 flex justify-center items-center text-gray-700 text-2xl">
              <SocialLinks />
            </div>
            <div className="flex flex-col justify-center items-center sm:flex-row gap-4 mt-6">
              <Link href="/#services">
                <Button variant="ghost">Our Services</Button>
              </Link>
              <Link
                href="/contact-us"
                className={`${buttonVariants()} bg-violet-500 hover:bg-violet-800`}
              >
                Get in touch &rarr;
              </Link>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>

      <div className="relative z-30 bg-white overflow-hidden">
        <div className="h-full z-40">
          <Services />
        </div>
        <div>
          <Partners />
        </div>
        <div>
          <OurCostumers />
        </div>
        <div
          className="bg-local bg-cover bg-center inset-x-0 top-0 w-full min-h-screen  z-10 pt-20 md:bg-fixed"
          style={{
            backgroundImage: `url('/images/dell.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          id="about"
        >
          <MaxWidthWrapper>
            <div className="md:py-20 mx-auto p-10 flex flex-col items-center max-w-3xl bg-opacity-80 rounded-3xl bg-gray-700">
              <h3 className="text-2xl py-10 font-bold tracking-tight text-white sm:text-6xl">
                <span className="text-violet-600">Professionals</span> at work
              </h3>

              <h4 className="text-xl md:py-10 font-bold text-white">
                Welcome to a realm where expertise converges with innovation
              </h4>

              <p className="text-white">
                Embark on a transformative journey with LIT, where seasoned
                professionals are dedicated to exceeding your IT, AV,
                networking, and CCTV requirements. With a wealth of experience
                and technical expertise, we integrate cutting-edge solutions
                precisely tailored to your business needs. From complex network
                setups to advanced audiovisual installations and robust CCTV
                systems, our committed team at LIT ensures excellence in every
                endeavor. Navigating the digital landscape with passion, we
                empower your business to thrive. Think of LIT as the architects
                of your technological success, where professionalism is the
                cornerstone of our commitment to delivering seamless and
                innovative digital solutions.
              </p>
            </div>
          </MaxWidthWrapper>
        </div>

        <section className="border-t border-b border-gray-200">
          <MaxWidthWrapper className="py-20">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg-gap-y-0">
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-violet-100 text-violet-900">
                      {React.createElement(perk.Icon, {
                        className: "w-1/2 h-1/2",
                      })}
                    </div>
                  </div>
                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MaxWidthWrapper>
        </section>
      </div>
    </>
  );
}
