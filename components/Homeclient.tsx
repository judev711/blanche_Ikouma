import { useTranslations } from "next-intl";
import React from "react";
import Testimonial from "./Testimonial";

export default function Homeclient() {
  const t = useTranslations("Tesimonial");
  return (
    <div className="w-full  py-10 flex justify-center min-h-[500px] mt-10 items-center bg-white dark:bg-black ">
      <div className="container flex flex-wrap justify-evenly items-center gap-4">
        <div className="flex flex-wrap justify-evenly items-center gap-4 w-full">
          <div className="flex  justify-between items-center gap-4 text-center flex-col  ">
            <div className="text-2xl font-bold text-[50px] dark:text-[#EAC258]">
              99%
            </div>
            <div> {t("titleOne")}</div>
          </div>
          <div className="flex  justify-between items-center gap-4 text-center flex-col ">
            <div className="text-2xl font-bold text-[50px] dark:text-[#EAC258]">
              2
            </div>
            <div>{t("titletwo")}</div>
          </div>
          <div className="flex  justify-between items-center gap-4 text-center flex-col  ">
            <div className="text-2xl font-bold text-[50px] dark:text-[#EAC258]">
              5{""}
            </div>
            <div>{t("titleThree")}</div>
          </div>
          <div className="flex  justify-between items-center gap-4 text-center flex-col  ">
            <div className="text-2xl font-bold text-[50px] dark:text-[#EAC258]">
              30+
            </div>
            <div>{t("titleFors")}</div>
          </div>
        </div>
        <Testimonial />
      </div>
    </div>
  );
}
