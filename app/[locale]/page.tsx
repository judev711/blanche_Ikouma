import { useTranslations } from "next-intl"; // Importation du hook useTranslations pour gérer la traduction
import HomeHero from "@/components/HomeHero";
import HomeSectionSetion from "@/components/homeSectionSetion";
import Homeclient from "@/components/Homeclient";
import { useLocale } from "next-intl"; // Importer useLocale

export default function Home() {
  const locale = useLocale(); // Récupérer la langue actuelle
  // Utilisation du hook useTranslations pour récupérer les traductions du menu
  const t = useTranslations("menu");

  return (
    <>
      <HomeHero title={t("title")} />
      <HomeSectionSetion locale={locale} />
      <Homeclient />
    </>
  );
}
