#!/usr/bin/env node

/**
 * Test Strapi Connection Script
 * Tests if your Railway Strapi backend is accessible
 */

const https = require('https');
const http = require('http');

// Get Strapi URL from environment or use default
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

console.log('🔍 Testing Strapi Connection...\n');
console.log(`📡 Strapi URL: ${STRAPI_URL}\n`);

// Test endpoints
const endpoints = [
  '/api/services',
  '/api/services?pagination[limit]=1',
];

function testEndpoint(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const startTime = Date.now();
    
    protocol.get(url, (res) => {
      const duration = Date.now() - startTime;
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({
            status: res.statusCode,
            duration,
            data: json,
            headers: res.headers,
          });
        } catch (e) {
          resolve({
            status: res.statusCode,
            duration,
            error: 'Invalid JSON response',
            data: data.substring(0, 200),
          });
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function runTests() {
  console.log('Running connection tests...\n');
  
  for (const endpoint of endpoints) {
    const url = `${STRAPI_URL}${endpoint}`;
    console.log(`Testing: ${endpoint}`);
    
    try {
      const result = await testEndpoint(url);
      
      if (result.status === 200) {
        console.log(`✅ Success (${result.duration}ms)`);
        
        if (result.data && result.data.data) {
          const count = Array.isArray(result.data.data) ? result.data.data.length : 1;
          console.log(`   📦 Data: ${count} item(s) returned`);
          
          if (result.data.meta) {
            console.log(`   📊 Total: ${result.data.meta.pagination?.total || 'N/A'} total items`);
          }
        }
      } else {
        console.log(`⚠️  Warning: Status ${result.status}`);
        if (result.error) {
          console.log(`   ❌ Error: ${result.error}`);
        }
      }
      
      console.log('');
    } catch (error) {
      console.log(`❌ Failed: ${error.message}`);
      console.log('');
    }
  }
  
  // Test CORS
  console.log('🔐 CORS Check:');
  console.log('   Note: CORS can only be fully tested from browser');
  console.log('   Make sure your Strapi allows your Vercel domain\n');
  
  // Summary
  console.log('📋 Summary:');
  console.log('   1. If all tests passed ✅, your Strapi is accessible');
  console.log('   2. Update .env.local with your Railway URL');
  console.log('   3. Add the same URL to Vercel environment variables');
  console.log('   4. Configure CORS in Strapi to allow your Vercel domain');
  console.log('\n✨ Done!\n');
}

runTests().catch(console.error);
