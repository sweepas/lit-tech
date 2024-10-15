"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SocialLinks from "@/components/SocialLinks";
import Banner from "@/components/ui/banner";

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

  return (
    <div
      className="bg-gray-100"
      style={{
        backgroundImage: `url('/images/athena.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center min-h-screen text-gray-700 z-50">
          <div className="mb-4 text-gray-700"></div>
          <div className="contact-form w-full max-w-lg p-6 bg-white rounded-md shadow-md">
            <SocialLinks />
            <h2 className="text-3xl font-bold text-center">Contact Us</h2>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <label className="block text-sm font-medium">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="requestCallback"
                    checked={formData.requestCallback}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Request a callback
                </label>
              </div>
              <button
                type="submit"
                className="bg-violet-500 text-white px-4 py-2 rounded w-full hover:bg-violet-800"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactUs;
