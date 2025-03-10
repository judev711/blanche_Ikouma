"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Comment améliorer son SEO en 2024",
    description:
      "Découvrez les meilleures pratiques pour booster votre référencement.",
    image: "/images/blog.jpg",
    slug: "ameliorer-seo-2024",
  },
  {
    id: 2,
    title: "Les tendances UI/UX à suivre",
    description:
      "Les nouveautés en matière de design d'interface pour cette année.",
    image: "/images/agency.jpg",
    slug: "tendances-ui-ux-2024",
  },
  {
    id: 3,
    title: "Pourquoi utiliser Next.js en 2024 ?",
    description: "Un framework puissant pour les applications web modernes.",
    image: "/images/contact.jpg",
    slug: "nextjs-2024",
  },
  {
    id: 4,
    title: "Comment créer un site e-commerce performant",
    description: "Les clés pour réussir un site e-commerce avec React.",
    image: "/images/baner.png",
    slug: "site-ecommerce-performant",
  },
  {
    id: 5,
    title: "Introduction à Tailwind CSS",
    description: "Pourquoi Tailwind CSS est devenu incontournable en 2024.",
    image: "/images/services.jpg",
    slug: "introduction-tailwind",
  },
  {
    id: 6,
    title: "Les bases de TypeScript pour les développeurs React",
    description: "Apprenez à mieux typer vos applications React.",
    image: "/images/contact.jpg",
    slug: "typescript-react",
  },
  {
    id: 7,
    title: "Développer une API REST avec Node.js et Express",
    description: "Un guide étape par étape pour les développeurs backend.",
    image: "/images/contact.jpg",
    slug: "api-rest-nodejs",
  },
  {
    id: 8,
    title: "Pourquoi utiliser Firebase pour vos applications mobiles ?",
    description: "Découvrez les avantages de Firebase pour React Native.",
    image: "/images/baner.png",
    slug: "firebase-react-native",
  },
  {
    id: 9,
    title: "Les avantages de GraphQL par rapport à REST",
    description: "Comparaison entre GraphQL et REST pour les API modernes.",
    image: "/images/agency.jpg",
    slug: "graphql-vs-rest",
  },
  {
    id: 10,
    title: "Comment sécuriser son application web en 2024",
    description: "Les meilleures pratiques pour protéger vos applications.",
    image: "/images/services.jpg",
    slug: "securiser-app-web",
  },
];
import { useLocale } from "next-intl";
const BlogContent = () => {
  const articlesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const locale = useLocale();
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePagination = (newPage: React.SetStateAction<number>) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <section className="container mx-auto my-10 px-4">
        <h2 className="text-3xl font-bold text-center text-[#EAC258] mb-8">
          Articles
        </h2>
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="w-12 h-12 border-4 border-[#EAC258] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {currentArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white dark:bg-[#000] rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    priority
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {article.description}
                  </p>
                  <Link href={`/${locale}/article/${article.slug}`}>
                    <button className="mt-4 bg-[#EAC258] dark:text-white text-black px-4 py-2 rounded-md font-semibold hover:bg-[#c79d46]">
                      Lire plus
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
        <div className="flex justify-center mt-8 space-x-2 ">
          <button
            onClick={() => handlePagination(currentPage - 1)}
            disabled={currentPage === 1 || loading}
            className={`px-4 py-2 text-black bg-[#EAC258] dark:text-white rounded-md font-semibold hover:bg-[#c79d46] ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Précédent
          </button>
          <span className="px-4 py-2 text-black dark:text-white bg-white dark:bg-gray-800 rounded-md">
            Page {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => handlePagination(currentPage + 1)}
            disabled={currentPage === totalPages || loading}
            className={`px-4 py-2 text-black bg-[#EAC258] dark:text-white rounded-md font-semibold hover:bg-[#c79d46] ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Suivant
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogContent;
