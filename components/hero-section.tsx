import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 saffron-gradient opacity-10"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                वैदिक ज्ञान का
                <span className="text-saffron-600 block">प्रकाश</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                सनातन धर्म की शिक्षा और संस्कारों को आगे बढ़ाने का हमारा संकल्प
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                हमारा उद्देश्य वैदिक शिक्षा और सनातन संस्कारों को नई पीढ़ी तक पहुंचाना है। हम रामायण, गीता और अन्य धार्मिक ग्रंथों की
                शिक्षा के माध्यम से समाज में आध्यात्मिक जागरूकता लाने का कार्य कर रहे हैं।
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#about">
                <Button size="lg" className="bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-3">
                  हमारे बारे में जानें
                </Button>
              </Link>
              <Link href="#karyashala">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-saffron-600 text-saffron-600 hover:bg-saffron-50 px-8 py-3 bg-transparent"
                >
                  कार्यशाला में भाग लें
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/hero.png" alt="गुरुजी का चित्र" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-saffron-600 font-semibold text-lg">"विद्या ददाति विनयं"</p>
              <p className="text-gray-600 text-sm">विद्या विनम्रता प्रदान करती है</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
