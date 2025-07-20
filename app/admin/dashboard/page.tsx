"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LogOut, Users, Megaphone, Edit, Save, X } from "lucide-react"
import { supabase, type ContactSubmission, type EventAnnouncement } from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [announcement, setAnnouncement] = useState<EventAnnouncement | null>(null)
  const [editingAnnouncement, setEditingAnnouncement] = useState(false)
  const [newAnnouncement, setNewAnnouncement] = useState({ event_name: "", pdf_link: "" })
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Check authentication
    const session = localStorage.getItem("admin_session")
    if (!session) {
      router.push("/admin")
      return
    }

    fetchData()
  }, [router])

  const fetchData = async () => {
    try {
      // Fetch contacts
      const { data: contactsData, error: contactsError } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false })

      if (contactsError) throw contactsError
      setContacts(contactsData || [])

      // Fetch announcement
      const { data: announcementData, error: announcementError } = await supabase
        .from("event_announcements")
        .select("*")
        .order("updated_at", { ascending: false })
        .limit(1)
        .single()

      if (announcementError && announcementError.code !== "PGRST116") {
        throw announcementError
      }

      if (announcementData) {
        setAnnouncement(announcementData)
        setNewAnnouncement({
          event_name: announcementData.event_name,
          pdf_link: announcementData.pdf_link,
        })
      }
    } catch (error) {
      console.error("Error fetching data:", error)
      toast({
        title: "त्रुटि!",
        description: "डेटा लोड करने में समस्या हुई।",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("admin_session")
    router.push("/admin")
  }

  const handleUpdateAnnouncement = async () => {
    try {
      if (announcement) {
        const { error } = await supabase
          .from("event_announcements")
          .update({
            event_name: newAnnouncement.event_name,
            pdf_link: newAnnouncement.pdf_link,
            updated_at: new Date().toISOString(),
          })
          .eq("id", announcement.id)

        if (error) throw error
      } else {
        const { error } = await supabase.from("event_announcements").insert([newAnnouncement])

        if (error) throw error
      }

      toast({
        title: "सफल!",
        description: "घोषणा अपडेट हो गई है।",
      })

      setEditingAnnouncement(false)
      fetchData()
    } catch (error) {
      toast({
        title: "त्रुटि!",
        description: "घोषणा अपडेट करने में समस्या हुई।",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-saffron-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-saffron-600 mx-auto mb-4"></div>
          <p className="text-gray-600">लोड हो रहा है...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">एडमिन डैशबोर्ड</h1>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              लॉगआउट
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Submissions */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-gray-800">
                <Users className="h-6 w-6 mr-2 text-saffron-600" />
                संपर्क विवरण ({contacts.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-h-96 overflow-y-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>नाम</TableHead>
                      <TableHead>विषय</TableHead>
                      <TableHead>फोन</TableHead>
                      <TableHead>दिनांक</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contacts.map((contact) => (
                      <TableRow key={contact.id}>
                        <TableCell className="font-medium">{contact.subh_naam}</TableCell>
                        <TableCell>{contact.vishay}</TableCell>
                        <TableCell>{contact.phone_number}</TableCell>
                        <TableCell>{new Date(contact.created_at!).toLocaleDateString("hi-IN")}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {contacts.length === 0 && (
                  <div className="text-center py-8 text-gray-500">कोई संपर्क विवरण उपलब्ध नहीं</div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Event Announcement Management */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-xl text-gray-800">
                <div className="flex items-center">
                  <Megaphone className="h-6 w-6 mr-2 text-saffron-600" />
                  घोषणा प्रबंधन
                </div>
                {!editingAnnouncement && (
                  <Button
                    size="sm"
                    onClick={() => setEditingAnnouncement(true)}
                    className="bg-saffron-600 hover:bg-saffron-700"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    संपादित करें
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {editingAnnouncement ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">कार्यक्रम का नाम</label>
                    <Input
                      value={newAnnouncement.event_name}
                      onChange={(e) =>
                        setNewAnnouncement({
                          ...newAnnouncement,
                          event_name: e.target.value,
                        })
                      }
                      placeholder="कार्यक्रम का नाम दर्ज करें"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">PDF लिंक</label>
                    <Input
                      value={newAnnouncement.pdf_link}
                      onChange={(e) =>
                        setNewAnnouncement({
                          ...newAnnouncement,
                          pdf_link: e.target.value,
                        })
                      }
                      placeholder="PDF का लिंक दर्ज करें"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button onClick={handleUpdateAnnouncement} className="bg-green-600 hover:bg-green-700">
                      <Save className="h-4 w-4 mr-1" />
                      सेव करें
                    </Button>
                    <Button onClick={() => setEditingAnnouncement(false)} variant="outline">
                      <X className="h-4 w-4 mr-1" />
                      रद्द करें
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="bg-saffron-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">वर्तमान घोषणा:</h3>
                    <p className="text-lg">{announcement?.event_name || "कोई घोषणा नहीं"}</p>
                  </div>
                  {announcement?.pdf_link && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">PDF लिंक:</h3>
                      <a
                        href={announcement.pdf_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                      >
                        {announcement.pdf_link}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Contact Details Table (Full Width) */}
        <Card className="shadow-xl border-0 mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">संपूर्ण संपर्क विवरण</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>शुभ नाम</TableHead>
                    <TableHead>विषय</TableHead>
                    <TableHead>फोन नंबर</TableHead>
                    <TableHead>संदेश</TableHead>
                    <TableHead>दिनांक</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell className="font-medium">{contact.subh_naam}</TableCell>
                      <TableCell>{contact.vishay}</TableCell>
                      <TableCell>{contact.phone_number}</TableCell>
                      <TableCell className="max-w-xs truncate">{contact.sandesh}</TableCell>
                      <TableCell>{new Date(contact.created_at!).toLocaleString("hi-IN")}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {contacts.length === 0 && <div className="text-center py-8 text-gray-500">कोई संपर्क विवरण उपलब्ध नहीं</div>}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
