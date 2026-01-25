import React, { useEffect, useState } from "react";
import Newspaper from "./components/Newspaper";
import ExternalLink from "./components/ExternalLink";

export default function NewsApp() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "9786caaace5a4fd88e7ec6b0bd993f1f";
  const NEWS_URL = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`;

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(NEWS_URL);
        const data = await res.json();
        setNewsData(data.articles);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-stone-50 p-6">
      {loading ? (
        <div className="text-center py-20 text-stone-500 text-xl flex flex-col items-center gap-4">
          <Newspaper className="w-16 h-16" />
          Loading news...
        </div>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {newsData.map((article, index) => (
            <div
              key={index}
              className="flex flex-col w-full sm:w-[48%] lg:w-[30%] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="h-56 w-full object-cover"
                />
              )}
              <div className="p-5 flex flex-col gap-2">
                <h2 className="font-bold text-xl text-stone-900">
                  {article.title}
                </h2>

                {article.description && (
                  <p className="text-stone-700">{article.description}</p>
                )}

                <p className="text-stone-500 text-sm">
                  <span className="font-semibold">Author:</span>{" "}
                  {article.author || "Unknown"}
                </p>

                <p className="text-stone-500 text-sm">
                  <span className="font-semibold">Published:</span>{" "}
                  {formatDate(article.publishedAt)}
                </p>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-stone-900 font-semibold text-sm hover:gap-2 transition-all"
                >
                  Read Full
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}