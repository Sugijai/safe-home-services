# FlowCare SG — Next.js + TypeScript plumbing starter

Original Singapore plumbing website. Business name: Safe Home Services. Reference supplied: https://gsplumbingservicessg.com/ (not accessible during development, so its contents/layout were not verified or copied).

## Run
Requires Node.js 20.9+.
```bash
npm install
npm run dev
```
Open http://localhost:3000. Validate: `npm run typecheck` and `npm run build`. Production: `npm start` after building.

## Project structure
- `src/app/layout.tsx`: shared header/footer and metadata
- `src/app/page.tsx`: homepage
- `src/app/services/page.tsx`: plumbing service catalogue
- `src/app/book/page.tsx`: enquiry page
- `src/app/privacy/page.tsx`: demo privacy notice
- `src/components/BookingForm.tsx`: validated client form and request download
- `src/lib/site.ts`: temporary name, service categories, symptoms
- `src/app/globals.css`: responsive styles and original tap/basin CSS illustration

## Designs
| Page | Design |
| --- | --- |
| Home | Navy, warm white and pale blue; split hero with tap illustration; six service cards; process; enquiry CTA; FAQ accordions. |
| Services | Six service descriptions with links that prefill the enquiry form. |
| Enquiry | Two-column desktop layout; single-column mobile; service, property type, issue, preferred date, name, mobile, postal code, email and optional details. |
| Privacy | Describes in-memory demo data handling and live policy requirements. |

## Working demo
Navigation, service prefilling, FAQs, form validation, Singapore-time date validation, request preview and text download. No server transmission, persistent storage or appointment confirmation. No copied company branding, invented testimonials, licence claims, emergency availability or pricing.

## Before launch
Choose a real name and verified business contact details. Confirm plumbing scope, qualifications, service coverage, inspection fee, quotation and cancellation policies. Connect a server-side enquiry API with validation, abuse protection and private database access (Supabase is a suitable option). Add admin authentication and notifications. Replace demo notice and consent text. Remove noindex only when ready to launch; add your real domain, canonicals, robots and sitemap. The starter has not been deployed.

## Updated homepage
Supplied Elementor HTML adapted into native JSX and responsive CSS with your generated technician image. Reference-company phone, certification and review/customer totals are replaced with honest placeholders. The enquiry CTA opens the demo form. Within-a-day availability is conditional.
