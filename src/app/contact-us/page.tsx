"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SocialLinks from "@/components/SocialLinks";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    requestCallback: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact-us")!
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-local"
        style={{ backgroundImage: `url('/images/contact-us.jpg')` }}
      >
        <div className="flex flex-col items-center text-center p-4">
          <p className="text-lg md:text-xl text-white mb-4">
            At London IT we believe there&apos;s no such thing as stupid
            questions.
          </p>
          <button
            onClick={scrollToContact}
            className="text-white text-lg md:text-xl font-bold bg-gray-600 px-4 py-2 rounded-full shadow-lg hover:text-violet-500 transition"
          >
            Get in touch
          </button>
        </div>
      </div>

      {/* Contact Info and Form */}
      <div id="contact-us" className="py-10 bg-gray-100 bg-opacity-50">
        <MaxWidthWrapper>
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 p-4">
            {/* Contact Information */}
            <div className="w-full md:w-1/2 space-y-4">
              <SocialLinks />
              <h2 className="text-2xl md:text-3xl font-bold">Get in Touch</h2>
              <p className="text-gray-700">
                Feel free to contact us through the form or reach out directly.
                We&apos;re here to assist you.
              </p>
              <div>
                <p className="text-lg">📞 +123 456 7890</p>
                <p className="text-lg">✉️ contact@example.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-md shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full border rounded-md p-2"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="requestCallback"
                    checked={formData.requestCallback}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="text-sm">Request a callback</label>
                </div>
                <button
                  type="submit"
                  className="bg-violet-500 text-white px-4 py-2 rounded w-full hover:bg-violet-800 transition"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default ContactUs;
