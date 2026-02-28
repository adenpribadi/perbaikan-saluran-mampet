import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import MapSection from "@/components/MapSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustSection />
      <CTASection />
      <FAQSection />
      <BlogPreviewSection />
      <MapSection />
      <Footer />
    </>
  );
}