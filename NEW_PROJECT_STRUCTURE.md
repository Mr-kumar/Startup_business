# New Project Structure

## 📁 Complete Directory Tree

```
src/
├── app/
│   ├── admin/
│   │   ├── (components)/          ← NEW: Route group for admin components
│   │   │   ├── AdminNavbar.tsx    ← RENAMED from Navbar.tsx
│   │   │   └── TaskCard.tsx
│   │   ├── Contact/
│   │   ├── Leads/
│   │   ├── Project/
│   │   └── dashboard/
│   ├── [slug]/
│   │   ├── page.tsx               ← UPDATED: All imports fixed
│   │   └── generateStaticParams.ts ← UPDATED: Import path fixed
│   ├── startup/[slug]/
│   │   └── page.tsx               ← UPDATED: All imports fixed
│   ├── api/
│   ├── layout.tsx                 ← UPDATED: Header/Footer imports
│   └── page.tsx
│
├── components/
│   ├── layout/                    ← NEW: Site-wide layout components
│   │   ├── Header.tsx             ← MOVED from root
│   │   └── Footer.tsx             ← MOVED from root
│   │
│   ├── forms/                     ← NEW: All form components
│   │   ├── ConsultationForm.tsx   ← RENAMED from Page1/Registration.tsx
│   │   ├── BusinessRegistrationForm.tsx
│   │   └── PartnershipFirmRegistrationForm.tsx
│   │
│   ├── common/                    ← NEW: Reusable components
│   │   ├── FlipCard.tsx           ← MOVED from root
│   │   └── LogoSlider.tsx         ← MOVED from Page2/
│   │
│   ├── views/                     ← NEW: Page-specific view components
│   │   ├── home/                  ← NEW: Homepage components
│   │   │   └── HeroSection.tsx    ← RENAMED from Page2/hero.tsx
│   │   │
│   │   └── service/               ← NEW: Service page components
│   │       ├── Overview.tsx       ← MOVED from Page1/
│   │       ├── Benefits.tsx       ← RENAMED from Page1/Benifits.tsx (fixed spelling)
│   │       ├── RequiredDocuments.tsx ← RENAMED from Page1/Documents.tsx
│   │       ├── Eligibility.tsx    ← MOVED from Page1/
│   │       ├── Faq.tsx            ← MOVED from Page1/ (fixed casing)
│   │       ├── ServiceTypes.tsx   ← RENAMED from Page1/Types.tsx
│   │       ├── Features.tsx       ← MOVED from Page1/
│   │       ├── ConsultationForm.tsx ← The actual form component
│   │       ├── ProcedureDetails.tsx ← RENAMED from Page2/Registration.tsx
│   │       ├── OverviewSecondary.tsx ← RENAMED from Page2/Overview.tsx
│   │       ├── Process.tsx        ← MOVED from Page2/
│   │       ├── FeeStructure.tsx   ← MOVED from Page2/
│   │       ├── Authority.tsx      ← MOVED from Page2/
│   │       ├── Challenges.tsx     ← MOVED from Page2/
│   │       ├── Categories.tsx     ← MOVED from Page2/
│   │       ├── Services.tsx       ← MOVED from Page2/
│   │       ├── Business.tsx       ← MOVED from Page2/
│   │       ├── ClassifiedIndustries.tsx
│   │       ├── Clauses.tsx
│   │       ├── Documentation.tsx
│   │       ├── EPR.tsx
│   │       ├── Guidelines.tsx
│   │       ├── Listicles.tsx
│   │       ├── Need.tsx
│   │       ├── ProductRequire.tsx
│   │       ├── Productlist.tsx
│   │       ├── Regulation.tsx
│   │       ├── Renewal.tsx
│   │       ├── RoleOfHydrogeologist.tsx
│   │       ├── Structure.tsx
│   │       ├── TalkToExpert.tsx
│   │       ├── Timeline.tsx
│   │       ├── Validity.tsx
│   │       ├── Who.tsx
│   │       └── Why.tsx
│   │
│   └── ui/                        ← UNCHANGED: shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── ... (other UI components)
│
├── content/                       ← NEW: Static data and content
│   ├── navigation.ts              ← MOVED from utils/navigationData.ts
│   ├── serviceData.ts             ← RENAMED from utils/pageContentDataPrimary.ts
│   └── pageData.ts                ← RENAMED from utils/pageContentDataSecondary.ts
│
├── lib/                           ← EXISTING: Utility functions
│   ├── utils.ts                   ← Pre-existing
│   ├── mail.ts                    ← Pre-existing
│   └── otp.ts                     ← Pre-existing
│
└── assets/                        ← UNCHANGED
```

## 🗑️ Deleted Folders

```
❌ src/components/Page1/          (All files moved to views/service/)
❌ src/components/Page2/          (All files moved to views/service/ or views/home/)
❌ src/components/Register/       (Files moved to forms/)
❌ src/utils/                     (All files moved to content/)
❌ src/app/admin/components/      (Files moved to admin/(components)/)
```

## 📝 Key Naming Changes

### Critical Fixes (Resolved Confusion)
- `Page1/Registration.tsx` → `forms/ConsultationForm.tsx` (The form)
- `Page2/Registration.tsx` → `views/service/ProcedureDetails.tsx` (The content)

### Improved Descriptive Names
- `Page2/hero.tsx` → `views/home/HeroSection.tsx`
- `Page1/Documents.tsx` → `views/service/RequiredDocuments.tsx`
- `Page1/Types.tsx` → `views/service/ServiceTypes.tsx`
- `Page2/Overview.tsx` → `views/service/OverviewSecondary.tsx`

### Spelling & Casing Fixes
- `Page1/Benifits.tsx` → `views/service/Benefits.tsx` ✓
- `Page2/FAQ.tsx` → `views/service/Faq.tsx` ✓

### Data Organization
- `utils/navigationData.ts` → `content/navigation.ts`
- `utils/pageContentDataPrimary.ts` → `content/serviceData.ts`
- `utils/pageContentDataSecondary.ts` → `content/pageData.ts`

## 🎯 Import Path Examples

### Before Refactoring
```typescript
import Header from "@/components/Header";
import Registration from "@/components/Page1/Registration";
import { pageContent } from "@/utils/pageContentDataPrimary";
import Navbar from "../components/Navbar";
```

### After Refactoring
```typescript
import Header from "@/components/layout/Header";
import ConsultationForm from "@/components/forms/ConsultationForm";
import { pageContent } from "@/content/serviceData";
import Navbar from "../(components)/AdminNavbar";
```

## 🚀 Benefits

1. **Intuitive Navigation**: Easy to find components by their purpose
2. **Clear Naming**: No more confusion between duplicate file names
3. **Scalable**: Easy to add new components in the right place
4. **Professional**: Follows industry best practices
5. **Maintainable**: Logical organization reduces cognitive load

## 📊 Statistics

- **Total Files Moved**: 50+
- **Folders Created**: 7
- **Folders Deleted**: 5
- **Import Statements Updated**: 10+ files
- **Files Renamed**: 15+
- **Spelling Fixes**: 1 (Benifits → Benefits)
- **Casing Fixes**: 1 (FAQ → Faq)
