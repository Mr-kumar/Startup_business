# 📖 How to Change Service Page Structure

Thanks to the refactoring, changing the layout of service pages is now **super easy**! This guide will show you exactly how.

---

## 🎯 Understanding the Two Service Types

Your service pages are divided into **two types**:

### 1. **Primary Services**
- Have `documentsRequired` field
- Use fancy animated `OverviewPrimary` component
- Individual section components rendered separately
- **Examples**: GST Registration, Company Registration, etc.

### 2. **Secondary Services**
- Don't have `documentsRequired` field
- Use all-in-one `OverviewSecondary` component
- All sections handled internally
- **Examples**: Most other services

---

## 🔧 How to Change PRIMARY Service Layout

### **File to Edit:** `src/app/[slug]/page.tsx`

### **Current Structure:**
```tsx
{isPrimaryService ? (
  <>
    <OverviewPrimary data={service.overview} />
    <Features items={service.features} />
    <Benefits items={service.benefits} />
    <Documents data={service.documents} />
    <Eligibility sections={service.eligibility} />
    <Types data={service.types} />
    <FAQ faqs={service.faqs} />
  </>
) : (
  <OverviewSecondary service={service} />
)}
```

---

### **Example 1: Reorder Components**

Want FAQ at the top? Just move it:

```tsx
{isPrimaryService ? (
  <>
    <OverviewPrimary data={service.overview} />
    <FAQ faqs={service.faqs} />           {/* ✅ Moved to top */}
    <Features items={service.features} />
    <Benefits items={service.benefits} />
    <Documents data={service.documents} />
    <Eligibility sections={service.eligibility} />
    <Types data={service.types} />
  </>
) : (
  <OverviewSecondary service={service} />
)}
```

---

### **Example 2: Side-by-Side Layout**

Want Benefits and Documents side-by-side on large screens?

```tsx
{isPrimaryService ? (
  <>
    <OverviewPrimary data={service.overview} />
    <Features items={service.features} />
    
    {/* ✅ Side-by-side layout */}
    <div className="grid lg:grid-cols-2 gap-8 px-6 lg:px-24">
      <Benefits items={service.benefits} />
      <Documents data={service.documents} />
    </div>
    
    <Eligibility sections={service.eligibility} />
    <Types data={service.types} />
    <FAQ faqs={service.faqs} />
  </>
) : (
  <OverviewSecondary service={service} />
)}
```

---

### **Example 3: Three-Column Grid**

Want Features, Benefits, and Documents in a 3-column grid?

```tsx
{isPrimaryService ? (
  <>
    <OverviewPrimary data={service.overview} />
    
    {/* ✅ Three-column grid */}
    <div className="grid lg:grid-cols-3 gap-6 px-6 lg:px-24 py-12">
      <Features items={service.features} />
      <Benefits items={service.benefits} />
      <Documents data={service.documents} />
    </div>
    
    <Eligibility sections={service.eligibility} />
    <Types data={service.types} />
    <FAQ faqs={service.faqs} />
  </>
) : (
  <OverviewSecondary service={service} />
)}
```

---

### **Example 4: Tabbed Layout**

Want sections in tabs? Here's how:

```tsx
{isPrimaryService ? (
  <>
    <OverviewPrimary data={service.overview} />
    
    {/* ✅ Tabbed interface */}
    <div className="px-6 lg:px-24 py-12">
      <Tabs defaultValue="features">
        <TabsList>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
        
        <TabsContent value="features">
          <Features items={service.features} />
        </TabsContent>
        <TabsContent value="benefits">
          <Benefits items={service.benefits} />
        </TabsContent>
        <TabsContent value="documents">
          <Documents data={service.documents} />
        </TabsContent>
      </Tabs>
    </div>
    
    <Eligibility sections={service.eligibility} />
    <Types data={service.types} />
    <FAQ faqs={service.faqs} />
  </>
) : (
  <OverviewSecondary service={service} />
)}
```

---

## 🔧 How to Change SECONDARY Service Layout

### **File to Edit:** `src/components/views/service/OverviewSecondary.tsx`

### **Current Structure:**

Look for the `<main className="lg:w-4/5 space-y-8">` section:

```tsx
<main className="lg:w-4/5 space-y-8">
  {safeOverview.length > 0 && (
    <section id="overview">
      {/* Overview content */}
    </section>
  )}
  
  {service.benefits && (
    <section id="benefits">
      {/* Benefits content */}
    </section>
  )}
  
  {service.documentsRequired && (
    <Documentation data={service.documentsRequired} />
  )}
  
  {service.registrationProcedure && (
    <Registration data={service.registrationProcedure} />
  )}
  
  {service.feesStructure && (
    <FeeStructure data={service.feesStructure} />
  )}
  
  {service.registrationTimeline && (
    <Timeline data={service.registrationTimeline} />
  )}
  
  {service.faqs && (
    <FAQ faqs={service.faqs} />
  )}
  
  {/* All the SectionList components */}
  {service.Listicles && (
    <SectionList data={service.Listicles} title="Listicles" />
  )}
  {/* ... more sections ... */}
</main>
```

---

### **Example 1: Reorder Sections**

Want FAQ at the top?

```tsx
<main className="lg:w-4/5 space-y-8">
  {/* ✅ Move FAQ to top */}
  {service.faqs && (
    <FAQ faqs={service.faqs} />
  )}
  
  {safeOverview.length > 0 && (
    <section id="overview">
      {/* Overview content */}
    </section>
  )}
  
  {/* Rest of sections... */}
</main>
```

---

### **Example 2: Two-Column Layout**

Want some sections side-by-side?

```tsx
<main className="lg:w-4/5 space-y-8">
  {safeOverview.length > 0 && (
    <section id="overview">
      {/* Overview content */}
    </section>
  )}
  
  {/* ✅ Two-column grid */}
  <div className="grid lg:grid-cols-2 gap-6">
    {service.documentsRequired && (
      <Documentation data={service.documentsRequired} />
    )}
    
    {service.feesStructure && (
      <FeeStructure data={service.feesStructure} />
    )}
  </div>
  
  {/* Rest of sections... */}
</main>
```

---

### **Example 3: Grouped Sections**

Want to group related sections together?

```tsx
<main className="lg:w-4/5 space-y-8">
  {safeOverview.length > 0 && (
    <section id="overview">
      {/* Overview content */}
    </section>
  )}
  
  {/* ✅ Group 1: Registration Info */}
  <div className="bg-blue-50 p-6 rounded-xl space-y-6">
    <h2 className="text-2xl font-bold">Registration Information</h2>
    {service.documentsRequired && (
      <Documentation data={service.documentsRequired} />
    )}
    {service.registrationProcedure && (
      <Registration data={service.registrationProcedure} />
    )}
    {service.registrationTimeline && (
      <Timeline data={service.registrationTimeline} />
    )}
  </div>
  
  {/* ✅ Group 2: Pricing Info */}
  <div className="bg-green-50 p-6 rounded-xl space-y-6">
    <h2 className="text-2xl font-bold">Pricing Information</h2>
    {service.feesStructure && (
      <FeeStructure data={service.feesStructure} />
    )}
  </div>
  
  {/* Rest of sections... */}
</main>
```

---

## 🎨 Common Tailwind Classes for Layouts

### **Grid Layouts:**
```tsx
{/* 2 columns on large screens */}
<div className="grid lg:grid-cols-2 gap-6">

{/* 3 columns on large screens */}
<div className="grid lg:grid-cols-3 gap-6">

{/* Responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Unequal columns (2:1 ratio) */}
<div className="grid lg:grid-cols-3 gap-6">
  <div className="lg:col-span-2">{/* Takes 2/3 width */}</div>
  <div>{/* Takes 1/3 width */}</div>
</div>
```

### **Flexbox Layouts:**
```tsx
{/* Horizontal flex */}
<div className="flex gap-6">

{/* Vertical flex */}
<div className="flex flex-col gap-6">

{/* Centered content */}
<div className="flex items-center justify-center">

{/* Space between items */}
<div className="flex justify-between">
```

### **Spacing:**
```tsx
{/* Vertical spacing between children */}
<div className="space-y-8">

{/* Horizontal spacing between children */}
<div className="space-x-6">

{/* Padding */}
<div className="p-6">        {/* All sides */}
<div className="px-6 py-12"> {/* Horizontal & Vertical */}

{/* Margin */}
<div className="mt-8 mb-12">
```

### **Background & Borders:**
```tsx
{/* Background colors */}
<div className="bg-gray-50">
<div className="bg-blue-100">

{/* Rounded corners */}
<div className="rounded-xl">

{/* Shadows */}
<div className="shadow-lg">
```

---

## 🚀 Quick Tips

### **1. Always Test Responsiveness**
```tsx
{/* Mobile: stack, Desktop: side-by-side */}
<div className="flex flex-col lg:flex-row gap-6">
```

### **2. Use Conditional Rendering**
```tsx
{/* Only show if data exists */}
{service.benefits && <Benefits items={service.benefits} />}
```

### **3. Add Wrapper Divs for Styling**
```tsx
{/* Wrap multiple components for consistent styling */}
<div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
  <Features items={service.features} />
  <Benefits items={service.benefits} />
</div>
```

### **4. Keep Accessibility in Mind**
```tsx
{/* Use semantic HTML */}
<section id="benefits" aria-labelledby="benefits-heading">
  <h2 id="benefits-heading">Key Benefits</h2>
  <Benefits items={service.benefits} />
</section>
```

---

## 📝 Step-by-Step Example: Complete Redesign

Let's say you want to completely redesign the primary service page:

### **Before:**
```tsx
<>
  <OverviewPrimary />
  <Features />
  <Benefits />
  <Documents />
  <Eligibility />
  <Types />
  <FAQ />
</>
```

### **After (Modern Card Layout):**
```tsx
<>
  {/* Hero Section */}
  <OverviewPrimary data={service.overview} />
  
  {/* Main Content Grid */}
  <div className="px-6 lg:px-24 py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      
      {/* Features Section - Full Width */}
      <div className="mb-12">
        <Features items={service.features} />
      </div>
      
      {/* Two Column Section */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <Benefits items={service.benefits} />
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <Documents data={service.documents} />
        </div>
      </div>
      
      {/* Eligibility - Full Width Card */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl mb-12">
        <Eligibility sections={service.eligibility} />
      </div>
      
      {/* Types & FAQ Side by Side */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-lg">
          <Types data={service.types} />
        </div>
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
          <FAQ faqs={service.faqs} />
        </div>
      </div>
      
    </div>
  </div>
</>
```

---

## 🎯 Summary

| What You Want | File to Edit | What to Do |
|---------------|--------------|------------|
| **Change PRIMARY layout** | `src/app/[slug]/page.tsx` | Reorder/wrap components in the `isPrimaryService` block |
| **Change SECONDARY layout** | `src/components/views/service/OverviewSecondary.tsx` | Reorder/wrap sections in the `<main>` tag |
| **Side-by-side sections** | Either file | Wrap in `<div className="grid lg:grid-cols-2 gap-6">` |
| **Reorder sections** | Either file | Just move the component/section up or down |
| **Group sections** | Either file | Wrap in a `<div>` with styling classes |

---

## ✨ That's It!

The refactoring made this **super simple**. You now have:
- ✅ Clear separation of Primary vs Secondary services
- ✅ Easy to find where each section is rendered
- ✅ Simple to reorder or restyle
- ✅ No duplicate code to maintain

**Happy customizing!** 🎉

---

**Need Help?** Just ask! I can help you implement any specific layout you have in mind.
