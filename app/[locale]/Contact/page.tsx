import Hero from "@/components/shares/Hero";
import { useTranslations } from "next-intl";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Page = () => {
  const t = useTranslations("menu");

  return (
    <div className="relative">
      <Hero
        link={t("link5")}
        title={t("title")}
        backgroundImage="/images/contact.jpg"
      />
      <div className="max-w-3xl mx-auto p-6 max-md:mx-4 bg-white    dark:bg-[#000] rounded-lg shadow-lg my-[100px]">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {t("contact_title")}
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-500 text-xl" />
            <span className="text-lg">Labsikouma@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-green-500 text-xl" />
            <FaWhatsapp className="text-green-500 text-xl" />
            <span className="text-lg">+237 691 813 478 ({t("status")})</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-green-500 text-xl" />
            <FaWhatsapp className="text-green-500 text-xl" />
            <span className="text-lg">+237 683 18 30 56 ({t("status")})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
