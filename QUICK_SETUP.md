# ⚡ Quick Setup - Railway Strapi + Vercel Next.js

## 🎯 Goal
Connect your Railway-hosted Strapi backend to your Vercel-hosted Next.js frontend.

---

## 📋 What You Need

1. **Railway Domain** - Your Strapi backend URL
   - Example: `my-strapi-backend-production-da92.up.railway.app`
   
2. **Vercel Project** - Your Next.js frontend
   - Example: `dostartup.vercel.app`

---

## 🚀 5-Minute Setup

### 1️⃣ Get Railway URL

```
Railway Dashboard → my-strapi-backend → Settings → Domains → Copy URL
```

Example: `https://my-strapi-backend-production-da92.up.railway.app`

---

### 2️⃣ Update Local Environment

Edit `.env.local`:

```env
NEXT_PUBLIC_STRAPI_API_URL=https://my-strapi-backend-production-da92.up.railway.app
```

---

### 3️⃣ Test Locally

```bash
# Test connection
node scripts/test-strapi-connection.js

# Run dev server
npm run dev
```

Visit: `http://localhost:3000`

---

### 4️⃣ Configure Vercel

```
Vercel Dashboard → Your Project → Settings → Environment Variables
```

Add:
```
Name: NEXT_PUBLIC_STRAPI_API_URL
Value: https://my-strapi-backend-production-da92.up.railway.app
Environments: ✅ Production ✅ Preview ✅ Development
```

---

### 5️⃣ Deploy

```bash
git add .
git commit -m "Connect Railway Strapi backend"
git push origin main
```

Vercel will auto-deploy!

---

## ✅ Verify It Works

1. **Check Strapi API:**
   ```
   https://my-strapi-backend-production-da92.up.railway.app/api/services
   ```
   Should return JSON data

2. **Check Vercel Site:**
   ```
   https://your-vercel-domain.vercel.app
   ```
   Should load services from Strapi

3. **Check Console:**
   - Open DevTools (F12)
   - No CORS errors
   - No 404 errors

---

## 🔧 If Something's Wrong

### CORS Error?
Update Strapi `config/middlewares.js`:

```javascript
{
  name: 'strapi::cors',
  config: {
    origin: [
      'http://localhost:3000',
      'https://your-vercel-domain.vercel.app',
    ],
  },
}
```

Then redeploy Railway.

---

### 404 Error? 
- Check Railway logs
- Verify Strapi is running (view Railway logs)
- Test API endpoint directly in browser services

---

### Empty Data?
1. Login to Strapi admin: `https://my-strapi-backend-production-da92.up.railway.app/admin`
2. Settings → Users & Permissions → Roles → Public
3. Enable `find` and `findOne` for Services
4. Make sure services are published (not draft)

---

## 📚 Full Guides

- **Detailed Setup:** See `RAILWAY_VERCEL_SETUP.md`
- **Checklist:** See `DEPLOYMENT_CHECKLIST.md`

---

## 🎉 That's It!

Your Railway Strapi backend is now connected to your Vercel Next.js frontend!

**Need help?** Check the troubleshooting section in `RAILWAY_VERCEL_SETUP.md`
