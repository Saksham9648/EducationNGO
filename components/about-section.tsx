import { BookOpen, Heart, Users, Star, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const aboutItems = [
    {
      title: "सुचिता",
      description: "हमारा संगठन पवित्रता और सत्यता के सिद्धांतों पर आधारित है। हम सभी कार्यों में ईमानदारी और निष्पक्षता बनाए रखते हैं।",
      icon: Heart,
    },
    {
      title: "रामायण संस्थान",
      description: "रामायण के महान आदर्शों और शिक्षाओं को समाज में फैलाने का कार्य करते हैं। श्री राम के जीवन से प्रेरणा लेकर आगे बढ़ते हैं।",
      icon: BookOpen,
    },
    {
      title: "ग्रंथ सेवा",
      description: "पवित्र ग्रंथों की सेवा और संरक्षण करना हमारा मुख्य उद्देश्य है। हम धार्मिक साहित्य को सुरक्षित रखने में योगदान देते हैं।",
      icon: Star,
    },
    {
      title: "प्रारिग्यप्ति",
      description:
        "शिक्षा के क्षेत्र में नवाचार और उत्कृष्टता लाने का प्रयास करते हैं। आधुनिक तकनीक के साथ पारंपरिक ज्ञान का संयोजन करते हैं।",
      icon: Users,
    },
    {
      title: "अभ्युदय",
      description: "समाज के कल्याण और उत्थान के लिए निरंतर कार्य करते हैं। हर व्यक्ति के जीवन में सकारात्मक बदलाव लाने का प्रयास करते हैं।",
      icon: Trophy,
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-saffron-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <img src="/abouticon.jpg" alt="" className="h-12 w-12 object-contain text-white" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">हमारे बारे में</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            वैदिक शिक्षा और सनातन संस्कारों के प्रचार-प्रसार में समर्पित हमारा संगठन
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-saffron-100 p-3 rounded-full group-hover:bg-saffron-200 transition-colors">
                    <item.icon className="h-6 w-6 text-saffron-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 ml-4">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
