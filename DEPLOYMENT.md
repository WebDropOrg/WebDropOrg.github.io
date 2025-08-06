# 🚀 GitHub Pages Deployment Guide

## ✅ Setup Complete

Your WebDrop website is now ready for GitHub Pages deployment!

## 📋 What's Been Set Up

1. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)

   - Automatically builds and deploys on push to main branch
   - Uses your GitHub secrets for Supabase credentials
   - Deploys to `https://webdroporg.github.io`

2. **Build Configuration**

   - Vite configured for production builds
   - Proper base path and output directory settings
   - Environment variables integrated

3. **Supabase Integration**
   - Form submissions save to your database
   - Fallback demo mode if not configured
   - Row Level Security policies set up

## 🔧 GitHub Repository Settings

### 1. Enable GitHub Pages

- Go to your repository Settings
- Navigate to "Pages" in the sidebar
- Under "Source", select "GitHub Actions"

### 2. Verify Secrets

Make sure these secrets are set in Settings → Secrets and variables → Actions:

- `VITE_SUPABASE_URL`: `https://gujpaxqnzsnsspbdfnox.supabase.co`
- `VITE_SUPABASE_ANON_KEY`: `your-anon-key`

## 🚀 Deploy Now

### Option 1: Push to Main Branch

```bash
git add .
git commit -m "Deploy WebDrop website"
git push origin main
```

### Option 2: Manual Trigger

- Go to Actions tab in your GitHub repository
- Click "Deploy to GitHub Pages" workflow
- Click "Run workflow"

## 📊 Monitor Deployment

1. Go to your GitHub repository
2. Click on "Actions" tab
3. Watch the deployment progress
4. Once complete, visit: `https://webdroporg.github.io`

## 🔄 Future Updates

Every time you push to the main branch:

1. GitHub Actions will automatically build the site
2. Deploy the updated version to GitHub Pages
3. Your changes will be live within 2-5 minutes

## 🧪 Test Build Locally

```bash
# Test the production build
npm run build:github

# Check the output
ls -la dist/
```

## 🌐 Custom Domain (Optional)

To use a custom domain like `webdrop.com`:

1. Add a `CNAME` file to the `public/` folder with your domain
2. Configure DNS to point to `webdroporg.github.io`
3. Update GitHub Pages settings with your custom domain

## 🆘 Troubleshooting

### Build Fails

- Check GitHub Actions logs for errors
- Verify environment variables are set
- Test build locally first

### Supabase Not Working

- Verify secrets are correctly set
- Check Supabase dashboard for table existence
- Form will work in demo mode as fallback

### 404 Errors

- Ensure GitHub Pages is enabled
- Check the base URL configuration
- Verify deployment completed successfully

---

Your website is ready to go live! 🎉
