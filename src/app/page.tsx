import Link from "next/link";

const services = [
  {
    title: "Choke Clearing",
    bookingService: "Blocked drain",
    image: "/emergency-choke.png",
    description:
      "Blocked sink, toilet or drain? Describe the problem and request a convenient service visit.",
  },
  {
    title: "Leak Repairs",
    bookingService: "Pipe repair",
    image: "/leak-repaires.png",
    description:
      "Get help with leaking pipes, taps and fixtures. Tell us where the leak is occurring so we can discuss the next step.",
  },
  {
    title: "Water Heater Services",
    bookingService: "Other",
    image: "/water-heater.png",
    description:
      "Enquire about water heater plumbing, repairs or replacement. Service scope and availability are confirmed before a visit.",
  },
];

const steps = [
  {
    title: "Describe the issue",
    description:
      "Share the symptoms, property type and Singapore postal code.",
  },
  {
    title: "Confirm the visit",
    description:
      "Confirm service coverage, appointment availability and any inspection charges.",
  },
  {
    title: "Approve the work",
    description:
      "Review the proposed repair and quotation before authorising work.",
  },
];

const faqs = [
  {
    question: "How much does a visit cost?",
    answer:
      "Ask the team to confirm any inspection charges and provide a quotation before work begins.",
  },
  {
    question: "Can I request a particular date?",
    answer:
      "Yes. Enter your preferred date in the enquiry form. Your appointment is confirmed only after the team checks availability.",
  },
  {
    question: "Do you cover my neighbourhood?",
    answer:
      "Include your Singapore postal code so the team can check service coverage.",
  },
  {
    question: "What if I don’t know the cause?",
    answer:
      "Describe what you can see, such as a leak, slow drainage or a running toilet. You do not need to diagnose the cause.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero with a full-screen blurred technician background */}
      <section
        style={{
          position: "relative",
          isolation: "isolate",
          width: "100%",
          maxWidth: "none",
          minHeight: "100svh",
          margin: 0,
          padding: "clamp(28px, 6vw, 80px)",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: "#f3f3ef",
        }}
      >
        {/* Blurred background image */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: -20,
            zIndex: -2,
            backgroundImage:
              "url('/safe-plumbing-technician.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 25%",
            backgroundRepeat: "no-repeat",
            filter: "blur(10px)",
          }}
        />

        {/* White overlay keeps the text readable */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: -1,
            backgroundColor: "rgba(255, 255, 255, 0.72)",
          }}
        />

        <div
          style={{
            width: "100%",
            maxWidth: 1180,
            minWidth: 0,
            margin: "0 auto",
            color: "#202020",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 24,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                fontWeight: 700,
                lineHeight: 1.5,
                overflowWrap: "anywhere",
              }}
            >
              DRAIN/SINK/TOILET CHOKE REPAIR
              <br />

              <strong
                style={{
                  display: "block",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 800,
                }}
              >
                Safe Home Services
              </strong>
            </div>

            <img
              src="/google-reviews.png"
              alt="Google Reviews"
              width={738}
              height={414}
              style={{
                display: "block",
                width: 160,
                maxWidth: "100%",
                height: "auto",
                borderRadius: 8,
              }}
            />
          </div>

          <p
            className="eyebrow"
            style={{ color: "#34563c" }}
          >
            HOME PLUMBING · SINGAPORE
          </p>

          <h1
            style={{
              maxWidth: 850,
              fontSize: "clamp(36px, 6vw, 76px)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-1px",
              overflowWrap: "anywhere",
            }}
          >
            Drain Choke.
            <br />
            Sink Choke.
            <br />

            <span style={{ color: "#246b39" }}>
              Toilet Choke Repair.
            </span>
          </h1>

          <p
            style={{
              maxWidth: 680,
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: 1.8,
              color: "#333333",
            }}
          >
            Tell us about blocked drains, sink or toilet chokes,
            and leaking pipes in your Singapore home. Request a
            visit and confirm the service scope, quotation and
            availability with our team.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 24,
              marginTop: 30,
            }}
          >
            <a
              href="https://wa.me/6584171005"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                backgroundColor: "#90EE90",
                color: "#075E54",
                minHeight: 48,
              }}
            >
              <WhatsAppIcon />
              <span>Schedule Online</span>
            </a>

            <Link
              href="/services"
              className="text-link"
              style={{
                color: "#202020",
                padding: "12px 0",
              }}
            >
              Explore services →
            </Link>
          </div>

          <p
            style={{
              marginTop: 18,
              fontSize: 13,
              color: "#444444",
            }}
          >
            Within a day · subject to confirmed availability
          </p>
        </div>
      </section>

      {/* Plumbing introduction */}
      <section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: 32,
            alignItems: "center",
          }}
        >
          <img
            src="/toilet-repair.png"
            alt="Plumber clearing a blocked toilet"
            width={540}
            height={360}
            loading="lazy"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              borderRadius: 12,
            }}
          />

          <div>
            <p className="eyebrow">LET’S FIND A SOLUTION</p>

            <h2>
              Plumbing problems shouldn’t stop your day.
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#5b6d64",
              }}
            >
              Whether it is a blocked sink, a leaking pipe or
              a toilet that needs attention, start by telling
              us what is happening. Include your location and
              preferred date when requesting a visit.
            </p>

            <Link className="button" href="/book">
              Request plumbing help →
            </Link>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="service-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR PLUMBING SERVICES</p>
            <h2>Plumbing care for your home.</h2>
          </div>

          <p>
            Service scope, pricing and availability are
            confirmed before a visit.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: 24,
            marginTop: 24,
          }}
        >
          {services.map((service) => (
            <article
              key={service.title}
              style={{
                backgroundColor: "#ffffff",
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
                  display: "block",
                  width: "100%",
                  height: 240,
                  objectFit: "cover",
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
                    color: "#202020",
                    fontSize: 22,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    margin: "0 0 24px",
                    color: "#5b6d64",
                    fontSize: 14,
                    lineHeight: 1.8,
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

      {/* Process */}
      <section className="process">
        <p className="eyebrow">A SIMPLE WAY FORWARD</p>
        <h2>From a problem to a plan.</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: 32,
            marginTop: 30,
          }}
        >
          {steps.map((step, index) => (
            <article key={step.title}>
              <span className="number">
                0{index + 1}
              </span>

              <h3>{step.title}</h3>

              <p
                style={{
                  color: "#5b6d64",
                  fontSize: 14,
                }}
              >
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Enquiry */}
      <section className="brand-banner">
        <div>
          <p className="eyebrow">
            NO NEED TO KNOW THE TECHNICAL NAME
          </p>

          <h2>Just tell us what’s happening.</h2>
          <p>A brief description is a good place to start.</p>
        </div>

        <Link className="button" href="/book">
          Start your enquiry ↗
        </Link>
      </section>

      {/* Frequently asked questions */}
      <section className="faq" id="faq">
        <p className="eyebrow">BEFORE A VISIT</p>
        <h2>A few useful answers.</h2>

        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M20.52 3.48A11.85 11.85 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.59 5.93L.08 24l6.34-1.66a11.9 11.9 0 0 0 5.63 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.41ZM12.06 21.77a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.76.99 1-3.67-.24-.38a9.84 9.84 0 0 1-1.51-5.25c0-5.44 4.43-9.87 9.89-9.87a9.8 9.8 0 0 1 7 2.9 9.8 9.8 0 0 1 2.89 6.99c0 5.44-4.43 9.87-9.89 9.87Zm5.42-7.39c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61l.45-.52c.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.3 1.27.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}