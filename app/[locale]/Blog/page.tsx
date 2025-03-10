import Hero from "@/components/shares/Hero";
import { useTranslations } from "next-intl";
import BlogContent from "@/components/BlogContent";

const Page = () => {
  const t = useTranslations("menu");
  return (
    <div>
      <Hero
        link={t("link4")}
        title={t("title")}
        backgroundImage="/images/blog.jpg"
      />
      <BlogContent />
    </div>
  );
};

export default Page;
