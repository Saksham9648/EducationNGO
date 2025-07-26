import { Flower2, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full">
                <img src="/logo.jpg" alt="" className="h-10 w-10 object-contain text-white" />
              </div>
              <div className="text-xl font-bold">रामायण वैदिक एजुकेशन फाउंडेशन</div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              सनातन धर्म की शिक्षा और संस्कारों को आगे बढ़ाने का हमारा संकल्प। वैदिक ज्ञान के प्रकाश से समाज को आलोकित करना हमारा उद्देश्य
              है।
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-saffron-400">त्वरित लिंक</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-white transition-colors">
                  मुख्य पृष्ठ
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  हमारे बारे में
                </Link>
              </li>
              <li>
                <Link href="#karyashala" className="text-gray-300 hover:text-white transition-colors">
                  सनातन कार्यशाला
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-300 hover:text-white transition-colors">
                  गैलरी
                </Link>
              </li>
              <li>
                <Link href="/payment" className="text-gray-300 hover:text-white transition-colors">
                  दान करें
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-saffron-400">हमारी सेवाएं</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">वैदिक शिक्षा</li>
              <li className="text-gray-300">रामायण अध्ययन</li>
              <li className="text-gray-300">संस्कृत भाषा</li>
              <li className="text-gray-300">योग और ध्यान</li>
              <li className="text-gray-300">धार्मिक संस्कार</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-saffron-400">संपर्क जानकारी</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-saffron-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-saffron-400" />
                <span className="text-gray-300">info@vedic-ngo.org</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-saffron-400 mt-1" />
                <span className="text-gray-300">
                 रामायण भवन
                  <br />
                 रामायण वैदिक एजुकेशन फाउंडेशन
                 <br />
                 उत्तर प्रदेश राज्य औद्योगिक विकास प्राधिकरण के
                  <br />
                  सामने , नक्षत्र गार्डन, गोला रोड
                  <br />
                  लखीमपुर खीरी २६२७०१

                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} वैदिक शिक्षा संस्थान। सभी अधिकार सुरक्षित।</p> Design and Developed by <a href="https:///pixelsbeing.site" target="_blank">Pixels Being</a>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                गोपनीयता नीति
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                नियम और शर्तें
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
