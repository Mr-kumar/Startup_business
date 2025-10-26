#!/bin/bash

echo "🔍 Strapi Connection & Vercel Setup Verification"
echo "=============================================="
echo ""

# Check environment variables
echo "1. Checking local environment variables..."
if [ -f ".env.local" ]; then
    STRAPI_URL=$(grep "NEXT_PUBLIC_STRAPI_API_URL" .env.local | cut -d'=' -f2)
    echo "✅ .env.local found"
    echo "📡 Strapi URL: $STRAPI_URL"
else
    echo "❌ .env.local not found"
fi

echo ""
echo "2. Checking Vercel deployment status..."
echo "📋 Please check these in Vercel Dashboard:"
echo "   - Go to: https://vercel.com/dashboard"
echo "   - Select your 'startup-business-three' project"
echo "   - Go to Settings → Environment Variables"
echo "   - Verify NEXT_PUBLIC_STRAPI_API_URL is set to:"
echo "     https://my-strapi-backend-production-da92.up.railway.app"
echo "   - Make sure it's enabled for Production, Preview, and Development"

echo ""
echo "3. Checking Strapi CORS configuration..."
echo "📋 Please check these in Strapi Admin:"
echo "   - Go to: https://my-strapi-backend-production-da92.up.railway.app/admin"
echo "   - Settings → Users & Permissions → Roles → Public"
echo "   - Services section should have 'find' and 'findOne' enabled"
echo "   - Settings → Middlewares (or config/middlewares.js)"
echo "   - CORS should allow: https://startup-business-three.vercel.app"

echo ""
echo "4. Testing current deployment..."
echo "🌐 Visit your Vercel site: https://startup-business-three.vercel.app/opc-registration"
echo "📊 Open Browser DevTools (F12) → Console tab"
echo "📝 Look for these log messages:"
echo "   🌐 Strapi API Request: [URL]"
echo "   📊 Response Status: [200 or error code]"
echo "   📦 Exact slug match result: [number] services found"

echo ""
echo "5. If you see errors in console:"
echo "   ❌ CORS error → Fix Strapi CORS configuration"
echo "   ❌ 403 Forbidden → Enable API permissions in Strapi"
echo "   ❌ 404 Not Found → Check service slug in Strapi"
echo "   ❌ Network error → Check Vercel environment variables"

echo ""
echo "✅ Next Steps:"
echo "1. Wait 1-2 minutes for Vercel deployment to complete"
echo "2. Test the service page and check console logs"
echo "3. Share the console log output if still not working"

echo ""
echo "🔗 Useful Links:"
echo "• Vercel Dashboard: https://vercel.com/dashboard"
echo "• Strapi Admin: https://my-strapi-backend-production-da92.up.railway.app/admin"
echo "• Your Site: https://startup-business-three.vercel.app"
