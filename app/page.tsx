// page.tsx
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import AnnouncementSection from "@/components/announcement-section"
import KaryashalaSection from "@/components/karyashala-section"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Floating Shlok above navbar */}
      <div className="relative overflow-hidden bg-gradient-to-r from-saffron-100 to-orange-100 py-3 pb-8">
        <div className="absolute whitespace-nowrap animate-marquee text-center w-full">
          <p className="text-orange-700 font-semibold text-md">
            ॐ दाशरथये विद्महे, सीता वल्लभाय धीमहि, तन्नो रामः प्रचोदयात्।
          </p>
        </div>
      </div>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <AnnouncementSection />
      <KaryashalaSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  )
}
