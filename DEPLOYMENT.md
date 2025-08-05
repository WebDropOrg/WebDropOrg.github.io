# Deployment Guide

## Environment Variables

This project uses Supabase for form submissions. You'll need to configure the following environment variables:

### For Local Development
1. Copy `.env.example` to `.env`
2. Fill in your Supabase project URL and anon key from your Supabase dashboard

### For GitHub Pages Deployment
Since GitHub Pages doesn't support server-side environment variables, you have a few options:

1. **Demo Mode (Current)**: The form works in demo mode without Supabase configuration
2. **Build-time Variables**: Set the variables in your build environment
3. **Client-side Configuration**: Hardcode the values (not recommended for production)

### Setting up Supabase
1. Create a new project at [supabase.com](https://supabase.com)
2. Create a table called `contact_submissions` with these columns:
   - `id` (uuid, primary key, default: gen_random_uuid())
   - `name` (text)
   - `email` (text)
   - `website` (text, nullable)
   - `message` (text)
   - `created_at` (timestamp, default: now())
3. Get your project URL and anon key from Settings > API
4. Update your environment variables

## Demo Mode
If Supabase is not configured, the form will work in demo mode:
- Form submissions are simulated locally
- Success messages will still appear
- No data is actually stored

This allows the website to function properly even without backend setup.
