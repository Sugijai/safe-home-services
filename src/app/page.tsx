import Link from "next/link";
import { services } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="safe-hero">
        <div className="safe-copy">
          <div className="safe-trust">
            <div className="safe-badge"  style={{
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.5,
    }}>
              DRAIN/ SINK/ TOILET CHOKE REPAIR
              <br />
              <strong>Service Done within 24 Hours</strong>
            </div>

            <div>
              <img
  src="/google-reviews.png"
  alt="Google Reviews"
  width={738}
  height={414}
  style={{
    width: 180,
    maxWidth: "100%",
    height: "auto",
    display: "block",
    borderRadius: 8,
  }}
/>
            </div>
          </div>

          <p className="eyebrow">SAFE HOME SERVICES</p>

          <h1>
            Drain Choke. Sink Choke.
            <br />
            <em>Toilet Choke Repair.</em>
          </h1>

          <img
            src="/toilet-repair.png"
            width={540}
            height={360}
            alt="Plumber clearing a blocked toilet with a drain hose"
            style={{
              width: "100%",
              maxWidth: 420,
              height: "auto",
              borderRadius: 10,
              marginBottom: 18,
              display: "block",
            }}
          />

          <p className="safe-description">
            <strong>Safe Home Services</strong> — tell us about blocked
            drains, sink or toilet chokes, and leaking pipes in your Singapore
            home. Request a visit and confirm service scope, quotation and
            availability with the team.
          </p>

          <Link className="button" href="/book">
            Request Service →
          </Link>

          <p className="safe-availability">
            Within a day · subject to confirmed availability
          </p>

          <div className="safe-metrics">
            <div>
              <strong>Customer stories</strong>
              <p>Coming soon</p>
            </div>

            <div>
              <strong>Completed repairs</strong>
              <p>Portfolio coming soon</p>
            </div>
          </div>
        </div>

        <div className="safe-visual">
          <div
            className="safe-backdrop"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(22,53,76,.35), rgba(22,53,76,.65)), url('/plumbing-tools.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          <img
            src="/safe-plumbing-technician.png"
            width={1104}
            height={1440}
            alt="Illustrative Chinese technician wearing Safe Home Services overalls and holding a wrench"
            className="safe-technician"
          />

          <div className="safe-response">
            <span aria-hidden="true">◷</span>
            <strong>Request a visit</strong>
            <p>
              Tell us your
              <br />
              preferred date.
            </p>
          </div>

          <small className="safe-image-note">
            Illustrative technician image
          </small>
        </div>
      </section>

      <section className="service-section">
  <div className="section-heading">
    <div>
      <p className="eyebrow">OUR PLUMBING SERVICES</p>
      <h2>Plumbing care for your home.</h2>
    </div>
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
      gap: 24,
    }}
  >
    {[
      {
        title: "Choke Clearing",
        bookingService: "Blocked drain",
        image: "/emergency-choke.png",
        description:
          "Keep your home flowing smoothly. Contact us about blocked sinks, toilets and drains, and request a convenient service visit.",
      },
      {
        title: "Leak Repairs",
        bookingService: "Pipe repair",
        image: "/leak-repaires.png",
        description:
          "A small drip can become a bigger problem. Tell us about leaking pipes, taps or fixtures so we can discuss the repair you need.",
      },
      {
        title: "Water Heater Services",
        bookingService: "Other",
        image: "/water-Heater.png",
        description:
          "Make your daily routine more comfortable. Enquire about water heater plumbing, repairs or replacement options for your home.",
      },
      {
        title: "General Plumbing Repairs",
        bookingService: "Other",
        image: "/general-plumbing-repair.png",
        description:
          "Looking for reliable plumbing services in Singapore? We provide expert Tap Repair, Shower Repair, Pipe Leak fixes & professional Basin Installation. Fast, affordable & top-quality general plumbing solutions! Call now today for instant support.",
      },
    ].map((service) => (
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
          <h3 style={{ margin: "0 0 14px", color: "#16354c" }}>
            {service.title}
          </h3>

          <p
            style={{
              fontSize: 14,
              lineHeight: 1.7,
              color: "#5b6d64",
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

      <section className="process">
        <p className="eyebrow">A SIMPLE WAY FORWARD</p>

        <h2>
          From a problem
          <br />
          to a plan.
        </h2>

        <div className="steps">
          {[
            [
              "Describe the issue",
              "Share the symptoms, property type and postal code.",
            ],
            [
              "Confirm the visit",
              "The team will check scope, availability and any call-out charge before confirming.",
            ],
            [
              "Agree on the work",
              "Review the proposed repair and quotation before authorising work.",
            ],
          ].map(([title, description], index) => (
            <article key={title}>
              <b>0{index + 1}</b>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

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

      <section className="faq" id="faq">
        <p className="eyebrow">BEFORE A VISIT</p>
        <h2>A few useful answers.</h2>

        {[
          [
            "How much does a visit cost?",
            "Fees have not been set for this starter. The business must publish inspection charges and quotation terms before launch.",
          ],
          [
            "Can I book an emergency repair?",
            "This demo does not offer emergency dispatch or a monitored contact channel. A preferred date is not a confirmed appointment.",
          ],
          [
            "Do you cover my neighbourhood?",
            "Enter your Singapore postal code so the team can check coverage once the service is live.",
          ],
          [
            "What if I don’t know the cause?",
            "Describe what you can observe, such as a leak or slow drainage. You do not need to diagnose the cause.",
          ],
        ].map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
    </>
  );
}