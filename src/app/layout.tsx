import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";
import "@/components/FloatingContact.css";


export const metadata: Metadata = { title: { default: "All Choke Services Singapore | Safe Home Services", template: "%s | Safe Home Services" }, description: "A plumbing service enquiry website for Singapore. Tell us about your home plumbing problem.", robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-SG"><body><a className="skip" href="#main">Skip to content</a><div className="demo">Same Day Service Available, book now</div><header><Link className="logo" href="/"><span className="mark">◉</span>{site.name}<small> All kind of choke repair and plumbing works</small></Link><nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/#faq">FAQs</Link><a
  href="tel:+6584171005"
  aria-label="Call +65 84171005"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    color: "inherit",
    textDecoration: "none",
    fontSize: 18,
    fontWeight: 700,
    whiteSpace: "nowrap",
  }}
>
  <svg
    aria-hidden="true"
    width="22"
    height="22"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
  </svg>

  <span>+65 84171005</span>
</a><a
  href="https://wa.me/6584171005"
  target="_blank"
  rel="noopener noreferrer"
  className="button small"
  style={{
    backgroundColor: "#90EE90",
    color: "#075E54",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
  }}
>
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.85 11.85 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.59 5.93L.08 24l6.34-1.66a11.9 11.9 0 0 0 5.63 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.41ZM12.06 21.77a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.76.99 1-3.67-.24-.38a9.84 9.84 0 0 1-1.51-5.25c0-5.44 4.43-9.87 9.89-9.87a9.8 9.8 0 0 1 7 2.9 9.8 9.8 0 0 1 2.89 6.99c0 5.44-4.43 9.87-9.89 9.87Zm5.42-7.39c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61l.45-.52c.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.3 1.27.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
  </svg>

  <span>WhatsApp</span>
</a></nav></header><main id="main">{children}</main><footer><div><Link className="footer-brand" href="/">{site.name}</Link><p>A better flow for everyday living.</p><small>Demo website. Business identity, technician availability and service areas must be confirmed before launch.</small></div><div><Link href="/services">Explore services</Link><Link href="/book">Repair enquiry</Link><Link href="/privacy">Privacy notice</Link></div><p className="fine">Plumbing service concept. Qualifications, service coverage and business details must be confirmed before launch.</p></footer><FloatingContact /></body></html> }
