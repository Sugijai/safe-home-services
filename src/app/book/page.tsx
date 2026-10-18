import { Suspense } from "react";
import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
export const metadata: Metadata = { title: "Request a plumbing service" };
export default function Book() { return <section className="booking-layout"><div><p className="eyebrow">LET’S GET STARTED</p><h1>A better flow<br/><em>starts here.</em></h1><p className="intro">Tell us what needs attention in your home.</p><aside><h3>This is a demo enquiry</h3><p>Nothing is sent to a repair team or stored on a server. You can preview and download your request to try the flow.</p><p>A requested date is not a confirmed appointment.</p></aside></div><Suspense fallback={<p>Loading form…</p>}><BookingForm/></Suspense></section> }
