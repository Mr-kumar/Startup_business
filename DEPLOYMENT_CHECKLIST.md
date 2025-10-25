# 🚀 Deployment Checklist - Railway + Vercel

## Quick Start (5 Minutes)

### Step 1: Get Railway URL
1. Open Railway dashboard: https://railway.app/dashboard
2. Click on `my-strapi-backend` project
3. Copy the domain (e.g., `my-strapi-backend-production-da92.up.railway.app`)

### Step 2: Update Local .env.local
```bash
# Edit .env.local file
NEXT_PUBLIC_STRAPI_API_URL=https://my-strapi-backend-production-da92.up.railway.app
```

### Step 3: Test Connection Locally
```bash
# Test the connection
node scripts/test-strapi-connection.js

# Run dev server
npm run dev
```

### Step 4: Add to Vercel
1. Go to Vercel dashboard: https://vercel.com/dashboard
2. Select your project
3. Settings → Environment Variables
4. Add: `NEXT_PUBLIC_STRAPI_API_URL` = `https://my-strapi-backend-production-da92.up.railway.app`
5. Select: Production, Preview, Development
6. Save

### Step 5: Redeploy
```bash
# Push to trigger deployment
git add .
git commit -m "Connect Railway Strapi"
git push origin main
```

---

## ✅ Detailed Checklist

### Railway Strapi Backend

- [ ] **Deployment Status**
  - [ ] Strapi is deployed and running
  - [ ] Build completed successfully
  - [ ] No errors in Railway logs
  
- [ ] **Domain Configuration**
  - [ ] Public domain is active
  - [ ] Domain copied: `_________________________`
  
- [ ] **Environment Variables** (Railway → Variables tab)
  - [ ] `NODE_ENV=production`
  - [ ] `DATABASE_URL` (auto-set by Railway)
  - [ ] `APP_KEYS` (random string)
  - [ ] `API_TOKEN_SALT` (random string)
  - [ ] `ADMIN_JWT_SECRET` (random string)
  - [ ] `JWT_SECRET` (random string)
  
- [ ] **CORS Configuration**
  - [ ] Updated `config/middlewares.js` or `config/middlewares.ts`
  - [ ] Added Vercel domain to CORS origins
  - [ ] Added localhost for development
  
- [ ] **API Permissions**
  - [ ] Login to Strapi admin: `https://my-strapi-backend-production-da92.up.railway.app/admin`
  - [ ] Settings → Users & Permissions → Roles → Public
  - [ ] Enable `find` and `findOne` for Services
  
- [ ] **Content Published**
  - [ ] Services are published (not draft)
  - [ ] Test API: `https://my-strapi-backend-production-da92.up.railway.app/api/services`

### Vercel Next.js Frontend

- [ ] **Environment Variables** (Vercel → Settings → Environment Variables)
  - [ ] `NEXT_PUBLIC_STRAPI_API_URL` (Railway domain)
  - [ ] `NEXT_PUBLIC_SITE_URL` (Your Vercel domain)
  - [ ] `NEXT_PUBLIC_SITE_NAME` (DoStartup)
  - [ ] SMTP variables (if using contact form)
  - [ ] Google OAuth (if using calendar)
  - [ ] All variables set for: Production, Preview, Development
  
- [ ] **Local Testing**
  - [ ] Updated `.env.local`
  - [ ] Ran `npm run dev`
  - [ ] Homepage loads
  - [ ] Service pages load
  - [ ] No console errors
  
- [ ] **Deployment**
  - [ ] Code pushed to GitHub
  - [ ] Vercel auto-deployed
  - [ ] Build successful
  - [ ] No build errors
  
- [ ] **Production Testing**
  - [ ] Visit Vercel domain
  - [ ] Homepage loads
  - [ ] Services load from Strapi
  - [ ] No CORS errors in console (F12)
  - [ ] Images load correctly
  - [ ] Forms work

### DNS & Domains (Optional)

- [ ] **Custom Domain**
  - [ ] Added custom domain in Vercel
  - [ ] DNS configured
  - [ ] SSL certificate active
  - [ ] Updated CORS in Strapi for custom domain

---

## 🧪 Testing Commands

### Test Strapi Connection
```bash
# From your project root
node scripts/test-strapi-connection.js
```

### Test API Manually
```bash
# Replace with your Railway domain
curl https://my-strapi-backend-production-da92.up.railway.app/api/services
```

### Check Vercel Deployment
```bash
# View deployment logs
vercel logs
```

### Check Railway Logs
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# View logs
railway logs
```

---

## 🐛 Troubleshooting

### Issue: CORS Error
**Symptom:** Console shows "blocked by CORS policy"

**Fix:**
1. Update Strapi `config/middlewares.js`
2. Add your Vercel domain to CORS origins
3. Redeploy Strapi to Railway

### Issue: 404 Not Found
**Symptom:** API returns 404

**Fix:**
1. Check Railway deployment status
2. Verify Strapi is running (check logs)
3. Test API endpoint directly in browser

### Issue: Empty Data
**Symptom:** No services showing

**Fix:**
1. Login to Strapi admin
2. Check services are published
3. Verify API permissions (Public role)

### Issue: Build Failed
**Symptom:** Vercel build fails

**Fix:**
1. Check Vercel build logs
2. Verify all dependencies in package.json
3. Check environment variables are set

---

## 📞 Support Resources

- **Railway Docs:** https://docs.railway.app
- **Vercel Docs:** https://vercel.com/docs
- **Strapi Docs:** https://docs.strapi.io
- **Next.js Docs:** https://nextjs.org/docs

---

## 🎯 Success Criteria

✅ **You're done when:**
1. Railway Strapi is accessible at your Railway domain
2. Vercel Next.js loads data from Railway Strapi
3. No CORS errors in browser console
4. All service pages display correctly
5. Forms and features work as expected

---

**Current Status:** ⬜ Not Started | 🟡 In Progress | ✅ Complete

**Last Updated:** _________________
**Railway Domain:** my-strapi-backend-production-da92.up.railway.app
**Vercel Domain:** _________________
