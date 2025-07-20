"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function GallerySection() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      src: "/g1.jpg",
      alt: "श्री राम मंदिर की प्राण प्रतिष्ठा के कार्यक्रम का आयोजन ढाई हजार दीपों द्वारा सम्पन्न",
      title: "श्री राम मंदिर की प्राण प्रतिष्ठा के कार्यक्रम का आयोजन ढाई हजार दीपों द्वारा सम्पन्न",
    },
    {
      src: "/g2.jpg",
      alt: "श्री राम मंदिर की प्राण प्रतिष्ठा पर ढाई हजार दीपों के द्वारा सम्पन्न हुआ",
      title: "श्री राम मंदिर की प्राण प्रतिष्ठा पर ढाई हजार दीपों के द्वारा सम्पन्न हुआ",
    },
    {
      src: "/g3.jpg",
      alt: "श्री राम मंदिर प्राणप्रतिष्ठा के आयोजन पर ढाई हजार दीपों द्वारा किया गया पूर्ण",
      title: "श्री राम मंदिर प्राणप्रतिष्ठा के आयोजन पर ढाई हजार दीपों द्वारा किया गया पूर्ण",
    },
    {
      src: "/g4.jpg",
      alt: "बसंत पंचमी का आयोजन",
      title: "बसंत पंचमी का आयोजन",
    },
    {
      src: "/g5.jpg",
      alt: "कुष्ठ रोगियों को कपड़े और भोजन वितरीत किया जाता हैं",
      title: "कुष्ठ रोगियों को कपड़े और भोजन वितरीत किया जाता हैं",
    },
    {
      src: "/g6.jpg",
      alt: "रंगोत्सव होली का आयोजन किया गया",
      title: "रंगोत्सव होली का आयोजन किया गया",
    },
    {
      src: "/g7.jpg",
      alt: "दुर्बल वर्ग को पुस्तकों का वितरण",
      title: "दुर्बल वर्ग को पुस्तकों का वितरण",
    },
    {
      src: "/g8.jpg",
      alt: "दुर्बल वर्ग की बच्चों को पुस्तकों का वितरण",
      title: "दुर्बल वर्ग की बच्चों को पुस्तकों का वितरण",
    },
    {
      src: "/g9.jpg",
      alt: "रामायण वैदिक एजुकेशन फाउंडेशन का निज कार्यशाला एवं कार्यालय निर्माण",
      title: "रामायण वैदिक एजुकेशन फाउंडेशन का निज कार्यशाला एवं कार्यालय निर्माण",
    },
    {
      src: "/g10.jpg",
      alt: "वैदिक खगोल यंत्र पूजन",
      title: "वैदिक खगोल यंत्र पूजन",
    },
    {
      src: "/g11.jpg",
      alt: "वेद माता गायत्री पूजन गायत्री जयंती पर कार्यक्रम आयोजित",
      title: "वेद माता गायत्री पूजन गायत्री जयंती पर कार्यक्रम आयोजित",
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-8 w-8 text-saffron-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">चित्रमाला</h2>
          </div>
          <p className="text-xl text-gray-600">हमारे कार्यक्रमों और गतिविधियों की झलकियां</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images[currentImage].src || "/placeholder.svg"}
                alt={images[currentImage].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-bold">{images[currentImage].title}</h3>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-8 space-x-4 overflow-x-auto pb-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                  currentImage === index ? "ring-4 ring-saffron-500 scale-110" : "hover:scale-105"
                }`}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
