import Hero from "@/components/shares/Hero";
import ServicesContent from "@/components/servicesContent";
import { useTranslations } from "next-intl";
const Page = () => {
  const t = useTranslations("menu");
  return (
    <>
      <div>
        <Hero
          link={t("link2")}
          title={t("title")}
          backgroundImage="/images/services.jpg"
        />
      </div>
      <ServicesContent />
    </>
  );
};

export default Page;
