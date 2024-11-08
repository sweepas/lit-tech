import ServiceCard from "@/components/ServiceCard";
import { customers } from "../../data/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const generateStaticParams = async () => {
  return customers.map((customer) => ({
    customer: customer.slug,
  }));
};

const CustomerPage = ({ params }: { params: { customer: string } }) => {
  const customer = customers.find((c) => c.slug === params.customer);

  if (!customer) {
    return notFound();
  }

  return (
    <>
      <MaxWidthWrapper>
        <div className="min-h-screen pt-20 px-4 pb-8 bg-gray-100 flex flex-col justify-center items-center">
          <div className="max-w-screen-lg w-full text-center">
            <div className="w-full h-[30vh] relative mb-4">
              <Image
                src={customer.pictureUrl}
                alt={customer.name}
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-700 mb-4">
              {customer.name}
            </h1>
            <p className="text-gray-700 mt-4 mb-8">{customer.description}</p>

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8"></div>
            <div className="flex flex-col justify-center items-center sm:flex-row gap-4 mt-6">
              <Link
                href="/contact-us"
                className={`${buttonVariants()} bg-violet-500 hover:bg-violet-800`}
              >
                Get in touch &rarr;
              </Link>
            </div>
          </div>
          <ServiceCard />
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default CustomerPage;
