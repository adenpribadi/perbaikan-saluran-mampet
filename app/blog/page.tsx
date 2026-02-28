import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Artikel Seputar Saluran Mampet Bandung",
  description:
    "Artikel informatif seputar WC mampet, pipa tersumbat, biaya jasa saluran mampet di Bandung, dan tips perawatan saluran air.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-800 to-fuchsia-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Artikel Seputar Saluran Mampet
          </h1>
          <p className="mt-6 text-lg text-gray-100 max-w-3xl mx-auto">
            Informasi lengkap seputar WC mampet, pipa tersumbat,
            dan jasa saluran mampet di Bandung.
          </p>
        </div>
      </section>

      {/* BLOG LIST */}
      <main className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">

          <div className="grid md:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-1"
              >
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition">
                    {post.title}
                  </h2>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 text-sm text-purple-700 font-semibold">
                    Baca Selengkapnya →
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}