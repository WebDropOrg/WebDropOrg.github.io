#!/bin/bash

echo "🚀 Testing GitHub Pages build locally..."

# Clean previous build
rm -rf dist

# Set environment variables for testing (use your actual values)
export VITE_SUPABASE_URL="https://gujpaxqnzsnsspbdfnox.supabase.co"
export VITE_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1anBheHFuenNuc3NwYmRmbm94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MDY5MzcsImV4cCI6MjA2OTk4MjkzN30.sAxjCK4BZNm4P6DdmqKsAnZFgx1O2ShfzPH8pSenGFM"

# Build for production
npm run build:github

echo "✅ Build completed! Check the dist/ folder"
echo "📁 Files in dist/:"
ls -la dist/
