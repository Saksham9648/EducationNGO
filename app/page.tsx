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
      {/* Shlok above navbar */}
      <div className="bg-gradient-to-r from-saffron-100 to-orange-100 py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="shlok-text">ॐ दाशरथये विद्महे, सीता वल्लभाय धीमहि, तन्नो रामः प्रचोदयात्।</p>
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
