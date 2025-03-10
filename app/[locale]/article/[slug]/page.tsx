import Image from "next/image";

// Liste des articles (dans un vrai projet, tu récupères les données depuis une API ou une base de données)

const ArticlePage = () => {
  return (
    <main className="w-full py-8 px-4">
      <article className="max-w-3xl mx-auto">
        {/* Hero Image */}
        <div className="w-full h-[50vh] relative mb-8">
          <Image
            src="/images/agency.jpg"
            alt="Article hero image"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Article Header */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Titre de l&apos;article
          </h1>
          <div className="flex items-center text-gray-600">
            <time className="text-sm dark:text-white">12 Mars 2024</time>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p>
            Votre contenu d&apos;article ici. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
      </article>
    </main>
  );
};

export default ArticlePage;
