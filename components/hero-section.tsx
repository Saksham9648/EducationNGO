import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 saffron-gradient opacity-10"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section with Animation */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                वैदिक ज्ञान का
                <span className="text-saffron-600 block">प्रकाश</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                सनातन धर्म की शिक्षा और संस्कारों को आगे बढ़ाने का हमारा संकल्प
              </motion.p>
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <p className="text-lg text-gray-700">
                हमारा उद्देश्य वैदिक शिक्षा और सनातन संस्कारों को नई पीढ़ी तक पहुंचाना है। हम रामायण, गीता और अन्य धार्मिक ग्रंथों की
                शिक्षा के माध्यम से समाज में आध्यात्मिक जागरूकता लाने का कार्य कर रहे हैं।
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
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
            </motion.div>
          </motion.div>

          {/* Image Section with Animation */}
          <motion.div
            className="relative"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/hero.png" alt="गुरुजी का चित्र" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <p className="text-saffron-600 font-semibold text-lg">"विद्या ददाति विनयं"</p>
              <p className="text-gray-600 text-sm">विद्या विनम्रता प्रदान करती है</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
