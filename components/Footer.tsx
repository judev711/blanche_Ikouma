import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const Footer = () => {
  const locale = useLocale(); // Récupère la langue active
  const t = useTranslations("menu"); // Traductions depuis les fichiers JSON

  const footers = [
    {
      title: t("title1"),
      names: [
        { name: t("link1"), link: "" },
        { name: t("link2"), link: "services" },
        { name: t("link3"), link: "Agency" },
        { name: t("link4"), link: "Blog" },
      ],
    },

    {
      title: t("link5"),
      contacts: [
        {
          icon: <FaRegEnvelope />,
          name: "Labsikouma@gmail.com",
          link: "mailto:Labsikouma@gmail.com",
        },
        {
          icon: <FaPhoneAlt />,
          name: "+237 691 813 478",
          link: "tel:+237691813478",
        },
        {
          icon: <FaPhoneAlt />,
          name: "+237 683 18 30 56",
          link: "tel:+237683183056",
        },
        {
          icon: <FaMapMarkerAlt />,
          name: "Douala, Cameroun",
          link: "",
        },
      ],
    },
  ];

  return (
    <footer className="bg-white dark:bg-black pb-8">
      <div className="container mx-auto px-4 border-t border-[#3d3d3d] pt-8">
        <div className="flex justify-evenly flex-wrap gap-6 text-center md:text-left">
          {footers.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                {section.title}
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {section.names &&
                  section.names.map((name, i) => (
                    <li
                      key={i}
                      className="hover:underline cursor-pointer flex items-center justify-center md:justify-start"
                    >
                      <Link
                        href={
                          i === 0 ? `/${name.link}` : `/${locale}/${name.link}`
                        }
                      >
                        {name.name}
                      </Link>
                    </li>
                  ))}

                {section.contacts &&
                  section.contacts.map((contact, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-2 cursor-pointer justify-center md:justify-start"
                    >
                      {contact.icon}
                      {contact.link ? (
                        <a href={contact.link} className="hover:underline">
                          {contact.name}
                        </a>
                      ) : (
                        <span>{contact.name}</span>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Réseaux Sociaux */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
          >
            <FiFacebook size={24} />
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-400"
          >
            <FiTwitter size={24} />
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-700"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-pink-500"
          >
            <FiInstagram size={24} />
          </a>
        </div>

        <div className="text-center mt-6 text-sm text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} {t("copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
