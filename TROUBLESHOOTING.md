# 🔧 Troubleshooting Guide - "Service Not Found" Issue

## ❌ Problem
Pages return HTTP 200 but show "Service not found" message.

---

## ✅ Solution

### **Root Cause**
Your `.env.local` file was missing, so Next.js couldn't connect to Strapi CMS.

### **What I Fixed**
1. ✅ Created `.env.local` file with Strapi configuration
2. ✅ Added better error message to show what's wrong
3. ✅ Set default Strapi URL to `http://localhost:1337`

---

## 🚀 Steps to Fix

### **1. Check if Strapi is Running**

Open a new terminal and run:
```bash
cd /path/to/your/strapi/project
npm run develop
# or
yarn develop
```

Strapi should start on `http://localhost:1337`

### **2. Verify Strapi URL in `.env.local`**

Your `.env.local` file should have:
```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```

**Important:** If Strapi runs on a different port, update this URL.

### **3. Restart Next.js Dev Server**

```bash
# Stop current server (Ctrl+C)
npm run dev
```

### **4. Test a Service Page**

Visit: `http://localhost:3000/trademark-opposition`

---

## 🔍 How to Debug

### **Check if Strapi is Accessible**

Open your browser and visit:
```
http://localhost:1337/api/services
```

You should see JSON data with your services.

### **Check Next.js Console**

Look for errors in the terminal where Next.js is running:
```
Error fetching from Strapi: ...
Strapi API Error: ...
```

### **Check Browser Console**

Open DevTools (F12) and look for:
- Network errors
- Failed API calls
- Console errors

---

## 📋 Common Issues & Solutions

### **Issue 1: "ECONNREFUSED" Error**
```
Error: connect ECONNREFUSED 127.0.0.1:1337
```

**Solution:** Strapi is not running. Start Strapi first.

---

### **Issue 2: "404 Not Found" from Strapi**
```
Strapi API Error: Not Found
```

**Solution:** 
1. Check if services exist in Strapi admin panel
2. Verify the API endpoint is correct (`/api/services`)
3. Make sure services are published in Strapi

---

### **Issue 3: Empty Data from Strapi**
```
Service not found (but Strapi is running)
```

**Solution:**
1. Go to Strapi admin: `http://localhost:1337/admin`
2. Check if services exist
3. Make sure services have the correct `slug` field
4. Verify services are **Published** (not Draft)

---

### **Issue 4: CORS Errors**
```
Access to fetch at 'http://localhost:1337' blocked by CORS policy
```

**Solution:** Update Strapi's CORS settings in `config/middlewares.js`:
```javascript
module.exports = [
  // ...
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000'],
    },
  },
];
```

---

### **Issue 5: Wrong Strapi Version**
If you're using Strapi v4 instead of v5, the API structure is different.

**Strapi v4:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": { ... }
    }
  ]
}
```

**Strapi v5 (current):**
```json
{
  "data": [
    {
      "id": 1,
      "slug": "...",
      "title": "...",
      ...
    }
  ]
}
```

---

## 🎯 Quick Checklist

Before asking for help, verify:

- [ ] Strapi is running (`http://localhost:1337`)
- [ ] `.env.local` file exists with correct Strapi URL
- [ ] Services exist in Strapi admin panel
- [ ] Services are **Published** (not Draft)
- [ ] Services have a `slug` field
- [ ] Next.js dev server is restarted after creating `.env.local`
- [ ] No CORS errors in browser console
- [ ] No connection errors in Next.js terminal

---

## 🔧 Environment Variables Reference

### **Required for Strapi Connection:**
```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```

### **Required for Email Features:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_FROM_EMAIL=your_email@gmail.com
ADMIN_EMAIL=admin@yourdomain.com
```

### **Required for Google Calendar:**
```env
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REFRESH_TOKEN=your_refresh_token
OWNER_CALENDAR_ID=primary
TIMEZONE=Asia/Kolkata
```

---

## 📞 Still Having Issues?

### **1. Check Strapi Logs**
Look at the Strapi terminal for errors when you visit a page.

### **2. Check Next.js Logs**
Look at the Next.js terminal for API errors.

### **3. Test API Directly**
Use Postman or curl to test:
```bash
curl http://localhost:1337/api/services
```

### **4. Verify Data Structure**
Make sure your Strapi services have:
- `slug` field (text)
- `title` field (text)
- `data` field (JSON)
- `serviceCategory` field (text: "primary" or "secondary")

---

## ✨ After Fixing

Once Strapi is connected, you should see:
- ✅ Service pages load correctly
- ✅ All sections render with data
- ✅ No "Service not found" errors
- ✅ FAQ always appears at the end (as designed)

---

## 🎉 Success Indicators

Your setup is working when:
1. Visit `http://localhost:3000/trademark-opposition`
2. Page loads with full content
3. All sections visible
4. FAQ section at the bottom
5. No errors in console

---

**Last Updated:** October 23, 2025  
**Status:** ✅ Fixed - `.env.local` created with Strapi configuration
