"use client";
import { useTranslations } from "next-intl";
import ThemeBtn from "./ThemeBtn";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";
const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("menu");
  const pathname = usePathname();
  const router = useRouter();
  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <div className="w-full flex justify-center items-center py-4 border-b-2 bg-[#ffffff] dark:bg-[#292929]">
      <div className="flex relative justify-between items-center text-[#5f5f5f] dark:text-[#b0b0b0] container  max-md:p-0">
        <div className="font-bold max-md:px-2 text-[#292929] dark:text-[#ffffff]">
          <Link href={"/"}>
            <div className="logo bg-white cursor-pointer">
              <Image
                src="/logo.png"
                width={150}
                height={150}
                alt="Picture of the author"
              />
            </div>
          </Link>
        </div>
        <div className="flex   z-40  gap-4 max-md:overflow-x-auto dark:bg-[#292929] capitalize text-[#292929] dark:text-[#ffffff] text-lg max-md:bg-[#ffffff] justify-center items-center max-md:absolute w-full max-md:bottom-[-62px] max-md:px-5 max-md:py-2">
          <Link href={`/${locale}/`}>{t("link1")}</Link>
          <Link href={`/${locale}/services`}>{t("link2")}</Link>
          <Link href={`/${locale}/Agency`}>{t("link3")}</Link>
          <Link href={`/${locale}/Blog`}>{t("link4")}</Link>
          <Link href={`/${locale}/Contact`}>{t("link5")}</Link>
        </div>
        <div className="flex justify-between items-center gap-4 max-md:px-2">
          <select
            value={locale}
            onChange={handleLanguageChange}
            className="rounded-md px-4 py-2 bg-transparent text-[#292929] dark:text-[#ffffff] dark:bg-[#292929] hover:outline-none focus:outline-none"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
          <div>
            <ThemeBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
