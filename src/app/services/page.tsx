import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plumbing Services Singapore | Safe Home Services",
  description:
    "Explore choke clearing, leak repairs, water heater services and general plumbing repairs with Safe Home Services.",
};

const services = [
  {
    title: "Emergency Choke Clearing",
    bookingService: "Blocked drain",
    image: "/emergency-choke.png",
    description:
      "Blocked drain, sink or toilet? Tell us about the blockage and request a service visit. Our team will confirm the scope of work and earliest available appointment.",
  },
  {
    title: "Leak Repairs",
    bookingService: "Pipe repair",
    image: "/leak-repaires.png",
    description:
      "Get help with leaking pipes, taps, wash basins and toilet fixtures. Describe where the leak is occurring so we can discuss an assessment and suitable repair.",
  },
  {
    title: "Water Heater Services",
    bookingService: "Other",
    image: "/water-Heater.png",
    description:
      "Enquire about water heater installation, repairs, plumbing leaks or replacement. Share your heater type and symptoms so the team can check the required work.",
  },
  {
    title: "General Plumbing Repairs",
    bookingService: "Tap repair or replacement",
    image: "/general-plumbing-repair.png",
    description:
      "From dripping taps and shower problems to basin installation and toilet repairs, tell us what needs attention and request a quotation.",
  },
];

const approach = [
  {
    number: "01",
    title: "Clear communication",
    description:
      "Discuss the problem, proposed work and next steps before proceeding.",
  },
  {
    number: "02",
    title: "Convenient appointments",
    description:
      "Request your preferred date. The team will confirm availability before a visit.",
  },
  {
    number: "03",
    title: "Quotation before work",
    description:
      "Confirm inspection charges and review the repair quotation before authorising work.",
  },
  {
    number: "04",
    title: "Care for your home",
    description:
      "Discuss access requirements and how the work area will be protected during repairs.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page introduction */}
      <section className="page-intro">
        <p className="eyebrow">SAFE HOME SERVICES</p>

        <h1>
          Plumbing care.
          <br />
          <em>For everyday living.</em>
        </h1>

        <p className="intro">
          Explore our plumbing services for Singapore homes. Tell us what
          needs attention and request a visit.
        </p>

        <Link className="button" href="/book">
          Request a service →
        </Link>
      </section>

      {/* Mission */}
      <section className="brand-banner">
        <div>
          <p className="eyebrow">OUR MISSION</p>
          <h2>Clear advice. Practical solutions.</h2>

          <p style={{ maxWidth: 760 }}>
            At Safe Home Services, our aim is to make arranging
            plumbing work straightforward. We focus on understanding
            your problem, explaining the proposed solution and helping
            you make an informed decision about your home.
          </p>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Plumbing services for your home.</h2>
          </div>

          <p>
            Service scope, coverage, charges and appointment availability
            are confirmed before a visit.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
            gap: 24,
            marginTop: 28,
          }}
        >
          {services.map((service) => (
            <article
              key={service.title}
              style={{
                background: "#ffffff",
                border: "1px solid #dce3d7",
                borderRadius: 12,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                loading="lazy"
                style={{
                  width: "100%",
                  height: 240,
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div
                style={{
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    margin: "0 0 14px",
                    fontSize: 22,
                    color: "#16354c",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    color: "#5b6d64",
                    lineHeight: 1.8,
                    margin: "0 0 24px",
                    flex: 1,
                  }}
                >
                  {service.description}
                </p>

                <Link
                  className="button"
                  href={`/book?service=${encodeURIComponent(
                    service.bookingService
                  )}`}
                >
                  Request this service →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="process">
        <p className="eyebrow">OUR APPROACH</p>
        <h2>Your comfort starts with a clear plan.</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
            gap: 24,
            marginTop: 30,
          }}
        >
          {approach.map((item) => (
            <article
              key={item.title}
              style={{
                padding: 24,
                border: "1px solid #dce3d7",
                borderRadius: 10,
              }}
            >
              <span className="number">{item.number}</span>
              <h3>{item.title}</h3>

              <p style={{ fontSize: 14, color: "#5b6d64" }}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Customer reviews */}
      <section className="brand-banner">
        <div>
          <p className="eyebrow">CUSTOMER REVIEWS</p>
          <h2>Customer stories, coming soon.</h2>
          <p>
            Verified feedback will be added here as customers share
            their experience with Safe Home Services.
          </p>
        </div>
      </section>

      {/* Before and after */}
      <section>
        <p className="eyebrow">BEFORE &amp; AFTER</p>
        <h2>See the difference.</h2>

        <p className="muted">
          Sample gallery — replace these images and captions with your
          own documented repair work before publishing.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: 24,
            marginTop: 24,
          }}
        >
          {[
            {
              label: "Before",
              image: "/before.png",
              caption: "Example: the plumbing issue before repair.",
            },
            {
              label: "After",
              image: "/after.png",
              caption: "Example: the completed repair.",
            },
          ].map((item) => (
            <figure
              key={item.label}
              style={{
                margin: 0,
                background: "#ffffff",
                border: "1px solid #dce3d7",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <img
                src={item.image}
                alt={`${item.label} repair — sample gallery image`}
                width={700}
                height={500}
                loading="lazy"
                style={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <figcaption style={{ padding: 24 }}>
                <p className="eyebrow">{item.label}</p>
                <p style={{ margin: 0 }}>{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Enquiry */}
      <section className="brand-banner">
        <div>
          <p className="eyebrow">LET’S GET STARTED</p>
          <h2>What needs attention?</h2>
          <p>
            Describe your plumbing problem and tell us your preferred
            service date.
          </p>
        </div>

        <Link className="button" href="/book">
          Start your enquiry →
        </Link>
      </section>
    </>
  );
}