# वैदिक शिक्षा संस्थान - NGO Website

A comprehensive portfolio website for an NGO focused on Vedic and Sanatan education, built with Next.js and Supabase.

## Features

- **Responsive Design**: Mobile-first approach with saffron color theme
- **Hindi Content**: Complete website in Hindi language
- **Supabase Integration**: Database for contact forms and event announcements
- **Admin Panel**: Secure admin dashboard for managing content
- **Payment Information**: Dedicated page for donation details

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Simple session-based admin auth
- **Icons**: Lucide React

## Database Setup

### Prerequisites
1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Get your project URL and anon key

### Environment Variables
Create a `.env.local` file in the root directory:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

### Database Schema
Execute the following SQL commands in your Supabase SQL editor:

\`\`\`sql
-- Create tables for the NGO website

-- Table for contact form submissions
CREATE TABLE contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    subh_naam VARCHAR(255) NOT NULL,
    vishay VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    sandesh TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for event announcements
CREATE TABLE event_announcements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    event_name VARCHAR(255) NOT NULL,
    pdf_link TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert initial event announcement
INSERT INTO event_announcements (event_name, pdf_link) 
VALUES ('आगामी सत्संग कार्यक्रम', 'https://drive.google.com/file/d/sample/view');

-- Enable Row Level Security (optional)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_announcements ENABLE ROW LEVEL SECURITY;

-- Create policies (allows public read/write for demo)
CREATE POLICY "Allow public read access" ON contact_submissions FOR SELECT USING (true);
CREATE POLICY "Allow public insert access" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read access" ON event_announcements FOR SELECT USING (true);
CREATE POLICY "Allow public update access" ON event_announcements FOR UPDATE USING (true);
\`\`\`

## Installation

1. **Clone the repository**
\`\`\`bash
git clone <repository-url>
cd vedic-ngo-website
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
\`\`\`

3. **Set up environment variables**
Create `.env.local` file with your Supabase credentials

4. **Run database setup**
Execute the SQL commands in your Supabase dashboard

5. **Start development server**
\`\`\`bash
npm run dev
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── admin/
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Admin dashboard
│   │   └── page.tsx              # Admin login
│   ├── payment/
│   │   └── page.tsx              # Payment information page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── about-section.tsx         # About section component
│   ├── announcement-section.tsx  # Announcement section
│   ├── contact-section.tsx       # Contact form section
│   ├── footer.tsx                # Footer component
│   ├── gallery-section.tsx       # Image gallery section
│   ├── hero-section.tsx          # Hero section
│   ├── karyashala-section.tsx    # Workshop section
│   └── navbar.tsx                # Navigation component
├── lib/
│   ├── auth.ts                   # Authentication utilities
│   ├── supabase.ts               # Supabase client
│   └── utils.ts                  # Utility functions
└── scripts/
    └── database-setup.sql        # Database setup script
\`\`\`

## Pages

### Homepage (`/`)
- **Shlok**: Sacred verse above navbar
- **Hero Section**: Main banner with tagline and guru image
- **About Section**: 5 detailed sections about the organization
- **Announcement Section**: Latest event announcements from database
- **Sanatan Karyashala**: 7 workshop cards linking to payment page
- **Gallery**: Image slider for showcasing activities
- **Contact Section**: Contact form saving to database
- **Footer**: Complete footer with links and information

### Payment Page (`/payment`)
- QR code for UPI payments
- UPI ID with copy functionality
- Complete bank details
- Payment confirmation instructions

### Admin Panel (`/admin`)
- **Login Page**: Secure authentication
- **Dashboard**: 
  - View all contact form submissions
  - Manage event announcements
  - Update event details and PDF links

## Admin Credentials

**Email**: `admin@vedic-ngo.org`  
**Password**: `VedicAdmin@2024`

## Database Tables

### contact_submissions
- `id`: UUID primary key
- `subh_naam`: Contact person's name
- `vishay`: Subject/topic
- `phone_number`: Phone number
- `sandesh`: Message content
- `created_at`: Timestamp

### event_announcements
- `id`: UUID primary key
- `event_name`: Name of the event
- `pdf_link`: Link to event PDF
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

## Customization

### Colors
The website uses a saffron color theme. Main colors:
- Primary: `#FF6600` (Saffron)
- Secondary: Various shades of saffron and orange
- Background: Gradient combinations of saffron tones

### Content
All content is in Hindi. To modify:
1. Update text in component files
2. Modify database content through admin panel
3. Replace placeholder images with actual photos

### Images
Replace placeholder images in:
- Hero section guru image
- Gallery images
- Workshop subject images
- Payment QR code

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms
Ensure environment variables are properly configured for:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Support

For technical support or questions:
- Check the admin panel for contact form submissions
- Review Supabase logs for database issues
- Ensure environment variables are correctly set

## License

This project is created for educational and non-profit purposes.
