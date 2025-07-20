import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactSubmission = {
  id?: string
  subh_naam: string
  vishay: string
  phone_number: string
  sandesh: string
  created_at?: string
}

export type EventAnnouncement = {
  id?: string
  event_name: string
  pdf_link: string
  created_at?: string
  updated_at?: string
}
