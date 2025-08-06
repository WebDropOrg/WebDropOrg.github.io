# WebDrop - Professional Web Development Services

A modern, dark-themed website for WebDrop web development services.

## 🚀 Live Demo

Visit: [https://webdroporg.github.io](https://webdroporg.github.io)

## 🛠️ Features

- **Dark Theme Design**: Professional dark theme with glassmorphism effects
- **Interactive Project Showcase**: Configurable iframe projects with live previews
- **Contact Form**: Integrated with Supabase for form submissions
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Intersection Observer powered scroll animations
- **Services Focus**: Web hosting, maintaining, redesigning, and custom development

## 📋 Services Offered

- **Web Hosting**: Reliable hosting solutions
- **Web Maintaining**: Ongoing website maintenance
- **Redesigning**: Modern website redesigns
- **Custom Developing**: Tailored web development

## 🔧 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI
- **Backend**: Supabase
- **Deployment**: GitHub Pages
- **Animations**: CSS animations with Intersection Observer

## 🚀 Deployment

### Automatic Deployment

This project automatically deploys to GitHub Pages when you push to the `main` branch.

### GitHub Secrets Required

Set these secrets in your GitHub repository (Settings → Secrets and variables → Actions):

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Manual Deployment

1. Fork this repository
2. Enable GitHub Pages in Settings → Pages → Source: GitHub Actions
3. Push to main branch or trigger workflow manually

## 🏗️ Local Development

1. Clone the repository:

```bash
git clone https://github.com/WebDropOrg/WebDropOrg.github.io.git
cd WebDropOrg.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Set environment variables:

```bash
cp .env.example .env
# Edit .env with your Supabase credentials
```

4. Start development server:

```bash
npm run dev
```

5. Open http://localhost:8080

## 🗄️ Database Setup

The contact form uses Supabase. Create a table called `contact_submissions`:

```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  website TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON contact_submissions
FOR INSERT TO anon WITH CHECK (true);
```

## 📝 Project Configuration

Edit `client/config/projects.ts` to customize the showcase projects.

## 🔄 Build Commands

- `npm run dev` - Start development server
- `npm run build:github` - Build for GitHub Pages
- `npm run typecheck` - Run TypeScript checks

## 📄 License

MIT License - see LICENSE file for details.
