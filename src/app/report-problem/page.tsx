"use client";
import React, { useState, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ReportProblemForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Log details to console
    console.log("Detalles de envío del formulario:", formData);
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f7f4] via-white via-60% to-[#e6f7f4] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-[120px]">
      <div className="w-full max-w-md space-y-5 p-4 rounded-lg ">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#36454F] tracking-tight leading-snug mb-4">
            <span>Reportar un Problema</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600 mb-10">
            ¿Tienes preguntas sobre el producto o la escalabilidad en nuestra
            plataforma? ¡Estamos aquí para ayudarte! Completa el formulario a
            continuación y nuestro equipo de soporte se pondrá en contacto
            contigo lo antes posible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-gray-700"
              >
                Apellido
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            />
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
    </div>
  );
};

export default ReportProblemForm;
