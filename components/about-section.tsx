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

        {/* Founders Info */}
        <div className="text-center mb-16 grid md:grid-cols-2 gap-8 items-center justify-center">
          <div>
            <img
              src="/fo1.jpg"
              alt="संस्थापक डॉ. रामकुमार शर्मा"
              className="mx-auto rounded-md h-40 w-40 object-cover mb-4 shadow-md"
            />
            <h3 className="text-2xl font-semibold text-gray-800">स्वराज्य प्रकाश</h3>
            <p className="text-gray-600 text-lg mt-2 max-w-md mx-auto">
              पूज्यनीय श्री स्वराज्य प्रकाश (शिक्षक) जी ने ऐसी संस्थान को बनाने हेतु मार्गदर्शन दिया कि सनातन धर्म को वैदिक शिक्षा के साथ साथ में योग, पुराण, उपनिषद्, वेदांक, वेद, श्री राम चरित मानस अध्ययन कार्यशाला के माध्यम से दी जाए इसके लिए समय पर वे विभिन्न विद्यालयों में उनको बुलाया जाता था आपकी शिक्षा परास्नातक (भूगोल) हिन्दू महाविद्यालय आगरा विश्वविद्यालय, आगरा से पूर्ण किया उसके उपरांत विधिक शिक्षा कानपुर विश्वविद्यालय, कानपुर से पूर्ण किया आपका जन्म 02 मई 1947 में हुआ और आपका देहावसान 11 नवम्बर 2024 को लंबी बीमारी के चलते रहने के कारण हुआ आपके पिता जी कुशल चिकित्सक थे और आप दुर्बल वर्ग को पुस्तकों को देना, उनकी फीस देना, निःशुल्क शिक्षा देते हुए सम्पूर्ण जीवन में वे एक मिशन बना दिया जिसके कारण यह संस्थान का गठन करने में उनका अभूतपूर्व प्रयास किया


            </p>
          </div>

          <div>
            <img
              src="/fo2.jpg"
              alt="संस्थापक आचार्य अजय द्विवेदी"
              className="mx-auto rounded-md h-40 w-40 object-cover mb-4 shadow-md"
            />
            <h3 className="text-2xl font-semibold text-gray-800">शान्ति देवी</h3>
            <p className="text-gray-600 text-lg mt-2 max-w-md mx-auto">
              पूज्यनीय श्रीमती शान्ति देवी (शिक्षक) अपना जीवन शिक्षा को समर्पित किया जिसमें सनातन धर्म की शिक्षा विशेष रूप से है आपकी शिक्षा स्नातक थी और आपकी चिकित्सकीय शिक्षा क्वीन मेरी मेडिकल कॉलेज लखनऊ , उर्सला हॉर्स मैन चिकित्सालय, कानपुर से पूर्ण की था और आपका रुझान वैदिक पूजन और सनातन कर्मकाण्ड में था जिसके कारण महिलाओं को वैदिक शिक्षा और तकनीकी शिक्षा की और प्रयास किया जिसके चलते उहोंने संस्थान के गठन हेतुभूमि और आवश्यक पूंजी दान में अपनी स्थिति के अनुसार किया गया है आपका जन्म 08 सितंबर 1953 को हुआ और देहावसान 15 फ़रवरी 2015 को हुआ था


            </p>
          </div>
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
