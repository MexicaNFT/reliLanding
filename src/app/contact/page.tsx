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
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .optional(),
  services: z.string().min(5, { message: "Why do you want to use Reli?" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

const workSchema = baseSchema.extend({
  usage: z.literal("Work"),
  companyName: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters." }),
  phoneNo: z
    .string()
    .min(5, { message: "Phone number must be at least 5 characters." }),
});

const personalSchema = baseSchema.extend({
  usage: z.literal("Personal"),
  phoneNo: z
    .string()
    .min(5, { message: "Phone number must be at least 5 characters." }),
});

const educationalSchema = baseSchema.extend({
  usage: z.literal("Educational"),
  institutionName: z
    .string()
    .min(2, { message: "Institution name must be at least 2 characters." }),
  phoneNo: z
    .string()
    .min(5, { message: "Phone number must be at least 5 characters." }),
});

// Combine schemas using discriminated union
const formSchema = z.discriminatedUnion("usage", [
  workSchema,
  personalSchema,
  educationalSchema,
]);

/**
 * @typedef {z.infer<typeof formSchema>} FormData
 * @description Represents the shape of the contact form data.
 */
type FormData = z.infer<typeof formSchema>;

/**
 * A contact form component that allows users to submit their information.
 * The form includes dynamic fields based on the selected usage type (Work, Personal, or Educational).
 * On submission, it constructs a WhatsApp message with the form data and redirects the user.
 *
 * @returns {JSX.Element | null} The rendered contact form, or null if the component has not yet mounted.
 */
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

    // Construct the message using \n for better formatting
    const message =
      `Hi! I'm interested in getting a Reli.Ai account.\n\n` +
      `I plan to use Reli for ${data.usage.toLowerCase()} purposes.\n` +
      (data.usage === "Work"
        ? `The company I work for is ${data.companyName}.\n`
        : "") +
      (data.usage === "Educational"
        ? `I’m studying at ${data.institutionName}.\n`
        : "") +
      `My name is ${data.firstName} ${
        data.lastName || ""
      }, and you can reach me at ${data.phoneNo}.\n` +
      (data.email
        ? `You can also contact me via email at ${data.email}.\n`
        : "") +
      (data.services
        ? `I'm interested in the following services: ${data.services}.\n`
        : "") +
      (data.message ? `\n${data.message}\n` : "") +
      `\nThanks!`;

    // URL-encode the message (this ensures proper encoding of spaces and special characters)
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp phone number for Mexico (+52 1 55 5500 5151)
    const phoneNumber = "5215555005151"; // Correctly formatted phone number

    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp URL
    window.location.href = whatsappUrl;

    // Reset form and show toast
    reset();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  if (!hasMounted) {
    return null;
  }

  const renderField = (
    fieldName: keyof FormData | "companyName" | "institutionName" | "phoneNo",
    label: string,
    type: string = "text",
    required: boolean = false
  ) => {
    return (
      <div>
        <label
          htmlFor={fieldName}
          className="block text-sm font-semibold text-gray-700"
        >
          {label}
          {required && <span className="text-red-500">*</span>}
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
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#36454F] tracking-tight leading-snug">
            <span className="block sm:inline">Comience su viaje con</span>
            <span className="block sm:inline text-[#1ABC9C]"> Reli</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600 mb-10">
            Nos encantaría saber de usted. ¡Por favor complete este formulario!
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="usage"
              className="block text-sm font-semibold text-gray-700"
            >
              ¿Para qué usarás Reli? <span className="text-red-500">*</span>
            </label>
            <select
              id="usage"
              {...register("usage")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1ABC9C] focus:border-[#1ABC9C] sm:text-sm"
            >
              <option value="Work">Trabajar</option>
              <option value="Personal">Personal</option>
              <option value="Educational">Educativa</option>
            </select>
            {errors.usage && (
              <p className="mt-1 text-xs text-red-500">
                {errors.usage.message}
              </p>
            )}
          </div>

          {usage === "Work" &&
            renderField("companyName", "nombre de empresa", "text", true)}
          {usage === "Educational" &&
            renderField(
              "institutionName",
              "Nombre de la institución",
              "text",
              true
            )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {renderField("firstName", "Nombre de pila", "text", true)}
            {renderField("lastName", "Apellido")}
          </div>

          {renderField("phoneNo", "Número de teléfono", "tel", true)}

          {usage !== "Educational" &&
            renderField("email", "Correo electrónico", "email")}

          {renderField(
            "services",
            usage === "Educational"
              ? "¿Por qué quieres utilizar Reli?"
              : "¿Servicios que estás buscando?"
          )}

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1ABC9C] focus:border-[#1ABC9C] sm:text-sm"
              placeholder="Introduce tu mensaje"
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
              Entregar
            </button>
          </div>
        </form>
      </div>
      {showToast && (
        <div className="fixed top-20 inset-x-0 mx-auto bg-green-400 text-white px-4 py-2 rounded-md shadow-lg w-11/12 sm:w-auto">
          Gracias por tu mensaje. Nuestro equipo se comunicará con usted dentro
          de 2 días.
        </div>
      )}
    </div>
  );
}
