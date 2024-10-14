"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  companyName: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  usage: z.enum(["Work", "Personal", "Educational"], {
    required_error: "Please select a usage option.",
  }),
  services: z
    .string()
    .min(5, { message: "Services must be at least 5 characters." }),
  message: z
    .string()
    .min(20, { message: "Message must be at least 20 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [showToast, setShowToast] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form data submitted:", data);
    reset();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f7f4] via-white via-60% to-[#e6f7f4] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-[120px]">
      <div className="w-full max-w-md space-y-8 p-8 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Contact our team
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We'd love to hear from you. Please fill out this form and we'll get
            back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1ABC9C] focus:border-[#1ABC9C] sm:text-sm"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-semibold text-gray-700"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              {...register("companyName")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1ABC9C] focus:border-[#1ABC9C] sm:text-sm"
              placeholder="Enter your company name"
            />
            {errors.companyName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.companyName.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1ABC9C] focus:border-[#1ABC9C] sm:text-sm"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="usage"
              className="block text-sm font-semibold text-gray-700"
            >
              What will you use Reli for?
            </label>
            <select
              id="usage"
              {...register("usage")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1ABC9C] focus:border-[#1ABC9C] sm:text-sm"
            >
              <option value="">Select an option</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Educational">Educational</option>
            </select>
            {errors.usage && (
              <p className="mt-1 text-xs text-red-500">
                {errors.usage.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="services"
              className="block text-sm font-semibold text-gray-700"
            >
              Services you're looking for?
            </label>
            <input
              type="text"
              id="services"
              {...register("services")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1ABC9C] focus:border-[#1ABC9C] sm:text-sm"
              placeholder="List the services you need"
            />
            {errors.services && (
              <p className="mt-1 text-xs text-red-500">
                {errors.services.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1ABC9C] focus:border-[#1ABC9C] sm:text-sm"
              placeholder="Enter your message"
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-xs text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#1ABC9C] hover:bg-[#16a085] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1ABC9C]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {showToast && (
        <div className="fixed bottom-10 right-4 bg-[#1ABC9C] text-white px-4 py-2 rounded-md shadow-lg">
          Thank you for your message. Our team will contact you within 2 days.
        </div>
      )}
    </div>
  );
}
