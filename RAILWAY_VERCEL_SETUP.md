# Railway Strapi + Vercel Next.js Connection Guide

## 🚂 Step 1: Configure Railway Strapi Backend

### 1.1 Get Your Railway Domain
1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click on `my-strapi-backend` project
3. Click on the Strapi service
4. Go to **Settings** tab
5. Scroll to **Domains** section
6. Copy your public domain (e.g., `my-strapi-backend-production-da92.up.railway.app`)

### 1.2 Configure Strapi CORS Settings

Your Strapi needs to allow requests from your Vercel domain. In your Strapi project:

**File: `config/middlewares.js` (or `config/middlewares.ts`)**

```javascript
module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'your-vercel-domain.vercel.app',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'your-vercel-domain.vercel.app',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',
        'https://your-vercel-domain.vercel.app',
        'https://www.your-custom-domain.com', // Add your custom domain if any
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

### 1.3 Set Railway Environment Variables

In Railway dashboard:
1. Go to your Strapi service
2. Click **Variables** tab
3. Add these variables:

```env
NODE_ENV=production
DATABASE_URL=<your-railway-postgres-url>
APP_KEYS=<generate-random-keys>
API_TOKEN_SALT=<generate-random-salt>
ADMIN_JWT_SECRET=<generate-random-secret>
TRANSFER_TOKEN_SALT=<generate-random-salt>
JWT_SECRET=<generate-random-secret>
```

### 1.4 Deploy Changes to Railway

```bash
# If you have Railway CLI installed
railway up

# Or push to your connected GitHub repo
git add .
git commit -m "Configure CORS for Vercel"
git push origin main
```

---

## ▲ Step 2: Configure Vercel Next.js Frontend

### 2.1 Update Local Environment

**File: `.env.local`**

Replace `your-strapi-backend.up.railway.app` with your actual Railway domain:

```env
NEXT_PUBLIC_STRAPI_API_URL=https://my-strapi-backend-production-da92.up.railway.app
```

### 2.2 Test Locally

```bash
# Install dependencies if needed
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` and check if data loads from Railway Strapi.

### 2.3 Configure Vercel Environment Variables

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project (dostartup)
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

#### Required Variables:

```env
# Strapi Backend
NEXT_PUBLIC_STRAPI_API_URL=https://my-strapi-backend-production-da92.up.railway.app

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=DoStartup

# SMTP (for contact forms)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_EMAIL=your-email@gmail.com
ADMIN_EMAIL=admin@yourdomain.com

# Google OAuth (if using calendar booking)
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REFRESH_TOKEN=your-refresh-token
OWNER_CALENDAR_ID=primary
TIMEZONE=Asia/Kolkata

# SEO
GOOGLE_VERIFICATION_CODE=your-verification-code
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Important:** For each variable, select the environment:
- ✅ Production
- ✅ Preview
- ✅ Development

### 2.4 Deploy to Vercel

```bash
# Option 1: Push to GitHub (if connected)
git add .
git commit -m "Connect to Railway Strapi backend"
git push origin main

# Option 2: Deploy via Vercel CLI
npm install -g vercel
vercel --prod
```

---

## 🔍 Step 3: Verify Connection

### 3.1 Check Strapi API

Open in browser:
```
https://my-strapi-backend-production-da92.up.railway.app/api/services
```

You should see JSON response with your services data.

### 3.2 Check Next.js Frontend

1. Visit your Vercel domain: `https://your-domain.vercel.app`
2. Open browser DevTools (F12) → Console
3. Check for any CORS errors or API errors
4. Navigate to service pages to verify data loads

### 3.3 Common Issues & Fixes

#### Issue: CORS Error
```
Access to fetch at 'https://...' from origin 'https://...' has been blocked by CORS policy
```

**Fix:** Update Strapi `config/middlewares.js` CORS origin array (Step 1.2)

#### Issue: 404 Not Found
```
GET https://my-strapi-backend-production-da92.up.railway.app/api/services 404
```

**Fix:** 
- Verify Railway deployment is successful
- Check Strapi is running (view Railway logs)
- Ensure `/api/services` endpoint exists in Strapi

#### Issue: Empty Data
```
Services array is empty
```

**Fix:**
- Login to Strapi admin: `https://my-strapi-backend-production-da92.up.railway.app/admin`
- Check if services are published (not draft)
- Verify API permissions: Settings → Users & Permissions → Roles → Public → Services → find & findOne enabled

---

## 📋 Quick Checklist

### Railway Strapi:
- [ ] Strapi deployed successfully on Railway
- [ ] Public domain is active
- [ ] CORS configured for Vercel domain
- [ ] Environment variables set
- [ ] Services are published in Strapi admin
- [ ] API permissions enabled for public access

### Vercel Next.js:
- [ ] `NEXT_PUBLIC_STRAPI_API_URL` set in Vercel environment variables
- [ ] All required environment variables added
- [ ] Deployed to Vercel
- [ ] Homepage loads successfully
- [ ] Service pages load data from Strapi
- [ ] No CORS errors in browser console

---

## 🚀 Next Steps

1. **Custom Domain:** Add your custom domain in Vercel settings
2. **SSL Certificate:** Vercel provides automatic SSL
3. **Performance:** Enable Vercel Analytics and Speed Insights
4. **Monitoring:** Set up error tracking (Sentry, LogRocket)
5. **SEO:** Submit sitemap to Google Search Console

---

## 📞 Need Help?

### Railway Logs
```bash
# View Strapi logs
railway logs
```

### Vercel Logs
1. Go to Vercel Dashboard
2. Click on your deployment
3. View **Functions** tab for API logs
4. View **Runtime Logs** for errors

### Test API Connection
```bash
# Test from command line
curl https://my-strapi-backend-production-da92.up.railway.app/api/services
```

---

## 🔐 Security Checklist

- [ ] Never commit `.env.local` to Git
- [ ] Use strong random strings for Strapi secrets
- [ ] Enable rate limiting in Strapi
- [ ] Use HTTPS only (both Railway and Vercel provide this)
- [ ] Regularly update dependencies
- [ ] Monitor Railway and Vercel usage/billing

---

**Last Updated:** October 2024
**Stack:** Next.js 14 + Strapi 4 + Railway + Vercel
