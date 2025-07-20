import { BookOpen, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function KaryashalaSection() {
  const subjects = [
    {
      title: "श्रीमद्भगवद्गीता",
      description: "जीवन के मार्गदर्शन के लिए गीता के श्लोकों का अध्ययन",
      image: "/k1.png",
    },
    {
      title: "रामायण अध्ययन",
      description: "श्री राम के आदर्शों और जीवन मूल्यों की शिक्षा",
      image: "/k2.png",
    },
    {
      title: "वेद मंत्र",
      description: "वैदिक मंत्रों का उच्चारण और अर्थ की जानकारी",
      image: "/k3.png",
    },
    {
      title: "संस्कृत भाषा",
      description: "देवभाषा संस्कृत के मूलभूत सिद्धांतों की शिक्षा",
      image: "/k4.png",
    },
    {
      title: "योग और ध्यान",
      description: "शारीरिक और मानसिक स्वास्थ्य के लिए योग प्रशिक्षण",
      image: "/k5.png",
    },
    {
      title: "आयुर्वेद",
      description: "प्राकृतिक चिकित्सा और स्वास्थ्य की पारंपरिक पद्धति",
      image: "/k6.png",
    },
    {
      title: "धार्मिक संस्कार",
      description: "जीवन के विभिन्न संस्कारों की विधि और महत्व",
      image: "/k7.png",
    },
    {
      title: "वैदिक गणित",
      description: "प्राचीन भारतीय गणना विधियों पर आधारित तेज़, सहज और मानसिक गणना की प्रणाली",
      image: "/k8.png",
    },
  ]

  return (
    <section id="karyashala" className="py-20 bg-gradient-to-br from-orange-50 to-saffron-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <img src="/workshopicon.jpg" alt="" className="h-12 w-12 object-contain text-white" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">सनातन कार्यशाला</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            वैदिक ज्ञान और सनातन संस्कारों की व्यापक शिक्षा के लिए हमारी विशेष कार्यशालाएं
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {subjects.map((subject, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={subject.image || "/placeholder.svg"}
                  alt={subject.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-saffron-600 transition-colors">
                  {subject.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{subject.description}</p>
                <Link href="/payment">
                  <Button className="w-full bg-saffron-600 hover:bg-saffron-700 text-white">
                    <BookOpen className="h-4 w-4 mr-2" />
                    कार्यशाला में भाग लें
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
