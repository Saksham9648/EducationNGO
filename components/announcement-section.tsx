"use client"

import { useEffect, useState } from "react"
import { Megaphone, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { supabase, type EventAnnouncement } from "@/lib/supabase"

export default function AnnouncementSection() {
  const [announcement, setAnnouncement] = useState<EventAnnouncement | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAnnouncement()
  }, [])

  const fetchAnnouncement = async () => {
    try {
      const { data, error } = await supabase
        .from("event_announcements")
        .select("*")
        .order("updated_at", { ascending: false })
        .limit(1)
        .single()

      if (error) throw error
      setAnnouncement(data)
    } catch (error) {
      console.error("Error fetching announcement:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="announcement" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Megaphone className="h-8 w-8 text-saffron-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">घोषणा (नवीन)</h2>
          </div>
          <p className="text-xl text-gray-600">आगामी कार्यक्रमों की जानकारी</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-saffron-50 to-orange-50 border-saffron-200 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="bg-saffron-100 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                  <Megaphone className="h-10 w-10 text-saffron-600" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {announcement?.event_name || "कोई घोषणा उपलब्ध नहीं"}
                </h3>

                {announcement && (
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600">कार्यक्रम की विस्तृत जानकारी के लिए नीचे दिए गए लिंक पर क्लिक करें</p>

                    <a href={announcement.pdf_link} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-3">
                        <Download className="h-5 w-5 mr-2" />
                        PDF डाउनलोड करें
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
