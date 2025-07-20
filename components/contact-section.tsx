"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    subh_naam: "",
    vishay: "",
    phone_number: "",
    sandesh: "",
  })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase.from("contact_submissions").insert([formData])

      if (error) throw error

      toast({
        title: "संदेश भेजा गया!",
        description: "आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।",
      })

      setFormData({
        subh_naam: "",
        vishay: "",
        phone_number: "",
        sandesh: "",
      })
    } catch (error) {
      toast({
        title: "त्रुटि!",
        description: "संदेश भेजने में समस्या हुई। कृपया पुनः प्रयास करें।",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-saffron-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Phone className="h-8 w-8 text-saffron-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">संपर्क करें</h2>
          </div>
          <p className="text-xl text-gray-600">हमसे जुड़ें और अपने प्रश्न पूछें</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">संपर्क फॉर्म</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">शुभ नाम *</label>
                  <Input
                    name="subh_naam"
                    value={formData.subh_naam}
                    onChange={handleChange}
                    required
                    placeholder="आपका नाम लिखें"
                    className="border-gray-300 focus:border-saffron-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">विषय *</label>
                  <Input
                    name="vishay"
                    value={formData.vishay}
                    onChange={handleChange}
                    required
                    placeholder="संदेश का विषय"
                    className="border-gray-300 focus:border-saffron-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">फोन नंबर *</label>
                  <Input
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                    placeholder="आपका फोन नंबर"
                    className="border-gray-300 focus:border-saffron-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">संदेश *</label>
                  <Textarea
                    name="sandesh"
                    value={formData.sandesh}
                    onChange={handleChange}
                    required
                    placeholder="आपका संदेश लिखें"
                    rows={5}
                    className="border-gray-300 focus:border-saffron-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-saffron-600 hover:bg-saffron-700 text-white py-3"
                >
                  {loading ? (
                    "भेजा जा रहा है..."
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      संदेश भेजें
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">संपर्क जानकारी</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-saffron-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-saffron-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">फोन</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-gray-600">+91 87654 32109</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-saffron-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-saffron-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">ईमेल</h4>
                      <p className="text-gray-600">info@vedic-ngo.org</p>
                      <p className="text-gray-600">contact@vedic-ngo.org</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-saffron-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-saffron-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">पता</h4>
                      <p className="text-gray-600">
                        वैदिक शिक्षा संस्थान
                        <br />
                        123, धर्म मार्ग
                        <br />
                        नई दिल्ली - 110001
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-gradient-to-r from-saffron-500 to-orange-500 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">कार्यालय समय</h3>
                <div className="space-y-2">
                  <p>सोमवार - शुक्रवार: 9:00 AM - 6:00 PM</p>
                  <p>शनिवार: 9:00 AM - 2:00 PM</p>
                  <p>रविवार: बंद</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">हमारा स्थान</h3>
            <p className="text-lg text-gray-600">हमसे मिलने के लिए यहाँ आएं</p>
          </div>

          <Card className="shadow-xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full h-96 md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48129308136!2d77.04417!3d28.527554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="वैदिक शिक्षा संस्थान का स्थान"
                  className="rounded-lg"
                />
              </div>

              <div className="p-6 bg-gradient-to-r from-saffron-50 to-orange-50">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">पूरा पता</h4>
                    <p className="text-gray-700">
                      वैदिक शिक्षा संस्थान
                      <br />
                      123, धर्म मार्ग
                      <br />
                      नई दिल्ली - 110001
                      <br />
                      भारत
                    </p>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/5wgsx45uTqcDGTms6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Button className="bg-saffron-600 hover:bg-saffron-700 text-white">
                      <MapPin className="h-5 w-5 mr-2" />
                      Google Maps में खोलें
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
