"use client";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const baseSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  services: z
    .string()
    .min(5, { message: "Services must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

const workSchema = baseSchema.extend({
  usage: z.literal("Work"),
  companyName: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters." }),
  contact: z
    .string()
    .min(5, { message: "Contact must be at least 5 characters." }),
});

const personalSchema = baseSchema.extend({
  usage: z.literal("Personal"),
  contact: z
    .string()
    .min(5, { message: "Contact must be at least 5 characters." }),
});

const educationalSchema = baseSchema.extend({
  usage: z.literal("Educational"),
  institutionName: z
    .string()
    .min(2, { message: "Institution name must be at least 2 characters." }),
});

// Combine schemas using discriminated union
const formSchema = z.discriminatedUnion("usage", [
  workSchema,
  personalSchema,
  educationalSchema,
]);

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [showToast, setShowToast] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      usage: "Work",
    },
  });

  const usage = watch("usage");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form data submitted:", data);
    reset();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  if (!hasMounted) {
    return null;
  }

  // Adjust `renderField` to handle dynamic field names
  const renderField = (
    fieldName: keyof FormData | "companyName" | "institutionName" | "contact",
    label: string,
    type: string = "text"
  ) => {
    return (
      <div>
        <label
          htmlFor={fieldName}
          className="block text-sm font-semibold text-gray-700"
        >
          {label}
        </label>
        <input
          type={type}
          id={fieldName}
          {...register(fieldName as any)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1ABC9C] focus:border-[#1ABC9C] sm:text-sm"
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
        {errors[fieldName as keyof FormData] && (
          <p className="mt-1 text-xs text-red-500">
            {errors[fieldName as keyof FormData]?.message as string}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f7f4] via-white via-60% to-[#e6f7f4] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-[120px]">
      <div className="w-full max-w-md space-y-5 p-4 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#36454F]">
            Contact our team
          </h2>
          <p className="mt-2 text-sm text-gray-600 mb-10">
            We'd love to hear from you. Please fill out this form!
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

          {usage === "Work" && renderField("companyName", "Company Name")}
          {usage === "Educational" &&
            renderField("institutionName", "Institution Name")}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {renderField("firstName", "First Name")}
            {renderField("lastName", "Last Name")}
          </div>
          {(usage === "Work" || usage === "Personal") &&
            renderField("contact", "Contact")}
          {renderField("email", "Email", "email")}
          {renderField("services", "Services you're looking for?")}
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
        <div className="fixed top-20 inset-x-0 mx-auto bg-green-400 text-white px-4 py-2 rounded-md shadow-lg w-11/12 sm:w-auto">
          Thank you for your message. Our team will contact you within 2 days.
        </div>
      )}
    </div>
  );
}
