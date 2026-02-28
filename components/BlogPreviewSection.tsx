import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPreviewSection() {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-fuchsia-800 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Artikel Seputar Saluran Mampet
          </h2>
          <p className="mt-4 text-gray-200">
            Pelajari penyebab, solusi, dan informasi penting
            mengenai jasa saluran mampet di Bandung.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition">
                {post.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-6 text-sm text-purple-700 font-semibold">
                Baca Selengkapnya →
              </div>
            </Link>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-yellow-400 text-black px-10 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Lihat Semua Artikel
          </Link>
        </div>

      </div>
    </section>
  );
}