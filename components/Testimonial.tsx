"use client";
import { useState } from "react";
//Tranduction dependances
import { useTranslations } from "next-intl";
const Testimonial = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const t = useTranslations("Tesimonial");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message);
    setEmail("");
  };
  return (
    <div className="container   rounded-lg h-full w-full flex justify-center items-center p-6 ">
      <div className="w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {t("NewsletterTitle")}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {t("NewsletterDescription")}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white"
            placeholder={t("NewsletterInput")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#EAC258] text-white py-2 rounded-lg hover:bg-[#f2c959] transition"
          >
            {t("NewsletterBtn")}
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default Testimonial;
