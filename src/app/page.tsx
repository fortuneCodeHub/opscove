import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import {
  complaints,
  marqueeItems,
  metrics,
  sectors,
  services,
  steps,
} from "@/lib/content";

const h2Style = {
  margin: 0,
  fontFamily: "var(--font-archivo-black)",
  fontSize: "clamp(2.1rem, 5vw, 3.6rem)",
  lineHeight: 1.04,
  letterSpacing: "-.04em",
} as const;

const bodyStyle = {
  fontSize: "1.0625rem",
  lineHeight: 1.6,
  color: "var(--ink-soft)",
} as const;

function sectorBadgeStyle(style: (typeof sectors)[number]["style"]) {
  const base = {
    width: 30,
    height: 30,
    display: "grid",
    placeItems: "center",
    fontFamily: "var(--font-archivo-black)",
    fontSize: 12,
  } as const;

  switch (style) {
    case "solid":
      return { ...base, borderRadius: 6, background: "var(--ink)", color: "var(--lime)" };
    case "forest":
      return { ...base, borderRadius: "50%", background: "var(--forest)", color: "var(--bg)" };
    case "outline":
      return { ...base, borderRadius: 6, border: "2px solid var(--ink)" };
    case "outlineForest":
      return { ...base, borderRadius: "50%", border: "2px solid var(--forest)", color: "var(--forest)" };
    case "lime":
    default:
      return { ...base, borderRadius: 6, background: "var(--lime)", color: "var(--ink)" };
  }
}

function complaintStyle(tone: (typeof complaints)[number]["tone"]) {
  if (tone === "ink") return { background: "var(--ink)", color: "var(--bg)" };
  if (tone === "forest") return { background: "var(--forest)", color: "var(--forest-ink)" };
  return { background: "var(--bg)", color: "var(--ink-soft)" };
}

function metricStyle(tone: (typeof metrics)[number]["tone"]) {
  if (tone === "lime") return { background: "var(--lime)", color: "var(--ink)" };
  if (tone === "light") return { background: "var(--bg)", color: "var(--ink)" };
  if (tone === "ink") return { background: "var(--ink)", color: "var(--bg)" };
  return { background: "transparent", border: "1px solid rgba(244,246,242,.42)", color: "var(--forest-ink)" };
}

export default function Page() {
  return (
    <>
      <div className="marquee">
        <div className="marquee__track">
          {[0, 1].map((group) => (
            <span key={group} className="marquee__group" aria-hidden={group === 1}>
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={`${group}-${i}`}>{item}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <Header />

      <main id="top">
        {/* Hero */}
        <Reveal style={{ position: "relative", padding: "clamp(44px,6vw,80px) 0 clamp(80px,9vw,130px)" }}>
          <div
            style={{
              maxWidth: "var(--max)",
              margin: "0 auto",
              paddingLeft: "var(--gutter)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,440px),1fr))",
              gap: "clamp(48px,5vw,64px)",
              alignItems: "center",
            }}
          >
            <div style={{ paddingRight: "var(--gutter)", maxWidth: 720 }}>
              <p
                style={{
                  margin: "0 0 22px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  fontSize: 11.5,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "#56564e",
                }}
              >
                <span aria-hidden="true" style={{ width: 44, height: 2, background: "var(--ink)" }} />
                Business process outsourcing since 2016
              </p>

              <h1
                style={{
                  margin: 0,
                  fontFamily: "var(--font-archivo-black)",
                  fontSize: "clamp(2.7rem,7vw,5.1rem)",
                  lineHeight: 1,
                  letterSpacing: "-.04em",
                }}
              >
                Outsourced support you will not have to{" "}
                <span style={{ display: "inline-block", position: "relative", padding: "0 .08em" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: ".2em",
                      bottom: ".06em",
                      background: "var(--lime)",
                      transform: "rotate(-.8deg)",
                      borderRadius: 2,
                    }}
                  />
                  <span style={{ position: "relative" }}>apologise</span>
                </span>{" "}
                for
              </h1>

              <p style={{ ...bodyStyle, margin: "26px 0 0", maxWidth: "60ch" }}>
                OpsCove runs voice, helpdesk and back office teams from Mohali for UK and US companies. You start with a
                pilot team and commit only when the numbers hold.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 34 }}>
                <a href="#book" className="btn btn--lime" style={{ fontSize: 16, padding: "16px 30px" }}>
                  Book a discovery call
                </a>
                <a href="#delivery" className="btn btn--outline" style={{ fontSize: 16, padding: "16px 30px" }}>
                  See how a pilot works
                </a>
              </div>
            </div>

            <div style={{ position: "relative", marginRight: "calc(50% - 50vw)", minWidth: 0 }}>
              <div
                style={{
                  position: "relative",
                  height: "clamp(380px,46vw,560px)",
                  borderRadius: "24px 0 0 24px",
                  overflow: "hidden",
                  background: "var(--bg-alt)",
                }}
              >
                <Image
                  src="/images/hero-floor.jpg"
                  alt="OpsCove agents working the support floor in Mohali"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 55vw"
                  style={{ objectFit: "cover" }}
                />
              </div> 

              <div
                style={{
                  position: "absolute",
                  top: "clamp(24px,4vw,48px)",
                  left: "clamp(-14px,-1vw,0px)",
                  background: "#fff",
                  borderRadius: 18,
                  padding: "16px 20px",
                  boxShadow: "0 16px 36px rgba(14,14,12,.16)",
                  maxWidth: 230,
                }}
              >
                <div style={{ fontFamily: "var(--font-archivo-black)", fontSize: 30, letterSpacing: "-.04em", lineHeight: 1 }}>
                  21s
                </div>
                <p style={{ margin: "6px 0 0", fontSize: 13, lineHeight: 1.45, color: "var(--ink-soft)" }}>
                  Median answer time across live voice accounts.
                </p>
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "clamp(28px,5vw,56px)",
                  left: "clamp(26px,7vw,96px)",
                  background: "#fff",
                  borderRadius: 18,
                  padding: "14px 18px",
                  boxShadow: "0 16px 36px rgba(14,14,12,.16)",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div style={{ fontFamily: "var(--font-archivo-black)", fontSize: 26, letterSpacing: "-.04em", lineHeight: 1 }}>
                  96%
                </div>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: "var(--ink-soft)", maxWidth: "14ch" }}>
                  Pilot teams kept past week six.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Sectors */}
        <Reveal
          aria-label="Sectors we support"
          style={{
            borderTop: "1px solid rgba(14,14,12,.12)",
            borderBottom: "1px solid rgba(14,14,12,.12)",
            background: "var(--bg-alt)",
          }}
        >
          <div
            className="shell"
            style={{
              paddingTop: "clamp(28px,3vw,38px)",
              paddingBottom: "clamp(28px,3vw,38px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,200px),1fr))",
              gap: "clamp(20px,3vw,40px)",
              alignItems: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 12,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "var(--ink-soft)",
                maxWidth: "18ch",
              }}
            >
              Queues we run today
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "clamp(18px,3vw,36px)",
                gridColumn: "span 3",
                minWidth: 0,
              }}
            >
              {sectors.map((s) => (
                <span key={s.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span aria-hidden="true" style={sectorBadgeStyle(s.style)}>
                    {s.badge}
                  </span>
                  <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: "-.01em" }}>{s.label}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Problem */}
        <Reveal style={{ background: "var(--lime)", color: "var(--ink)", position: "relative", overflow: "hidden" }}>
          <div className="shell" style={{ paddingTop: "clamp(80px,9vw,132px)", paddingBottom: "clamp(80px,9vw,132px)" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,340px),1fr))",
                gap: "clamp(36px,5vw,72px)",
                alignItems: "end",
              }}
            >
              <div>
                <p style={{ margin: "0 0 18px", fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 700 }}>
                  Why people call us
                </p>
                <h2 style={{ ...h2Style, fontSize: "clamp(2.2rem,5.6vw,4rem)", lineHeight: 1.02, maxWidth: "14ch" }}>
                  The last vendor let you down.
                </h2>
                <p style={{ margin: "24px 0 0", maxWidth: "52ch", fontSize: "1.0625rem", lineHeight: 1.6 }}>
                  Most of our clients arrive from a provider that quoted a headcount and delivered a queue nobody
                  watched. Here is what we hear in the first call.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {complaints.map((c) => (
                  <div
                    key={c.text}
                    style={{
                      ...complaintStyle(c.tone),
                      borderRadius: 20,
                      padding: c.tone === "ink" ? "24px 26px" : "22px 26px",
                      marginLeft: c.inset ? "clamp(0px,4vw,54px)" : 0,
                    }}
                  >
                    <p
                      style={
                        c.tone === "ink"
                          ? { margin: 0, fontSize: "clamp(1.15rem,2.2vw,1.5rem)", lineHeight: 1.3, fontWeight: 600, letterSpacing: "-.02em" }
                          : { margin: 0, fontSize: "1.0625rem", lineHeight: 1.55 }
                      }
                    >
                      {c.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,260px),1fr))",
                gap: "clamp(24px,3vw,40px)",
                marginTop: "clamp(48px,6vw,80px)",
                alignItems: "center",
              }}
            >
              <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", height: "clamp(200px,22vw,280px)", background: "var(--ink)" }}>
                <Image
                  src="/images/team-lead.jpg"
                  alt="Team lead reviewing the day's escalations"
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-archivo-black)",
                  fontSize: "clamp(1.4rem,2.8vw,2.1rem)",
                  lineHeight: 1.14,
                  letterSpacing: "-.03em",
                  maxWidth: "22ch",
                  gridColumn: "span 2",
                }}
              >
                We publish the shift roster, the queue numbers and the escalation owner. Weekly, to your inbox.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Services */}
        <Reveal id="services" className="shell" style={{ paddingTop: "clamp(88px,10vw,148px)", paddingBottom: "clamp(88px,10vw,148px)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,300px),1fr))",
              gap: "24px clamp(32px,5vw,72px)",
              alignItems: "end",
              marginBottom: "clamp(40px,5vw,64px)",
            }}
          >
            <h2 style={{ ...h2Style, maxWidth: "14ch" }}>What we run for you</h2>
            <p style={{ ...bodyStyle, margin: 0, maxWidth: "46ch" }}>
              Every line below is staffed by a named team with a dedicated lead, working your hours, reporting on your
              metrics.
            </p>
          </div>

          <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid rgba(14,14,12,.16)" }}>
            {services.map((row) => (
              <li key={row.num} className="svc-row">
                <div style={{ display: "flex", gap: "clamp(16px,2.5vw,36px)", alignItems: "baseline", minWidth: 0 }}>
                  <span className="svc-row__num" style={{ fontFamily: "var(--font-archivo-black)" }}>
                    {row.num}
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-archivo-black)",
                      fontSize: "clamp(1.4rem,2.8vw,2.1rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-.035em",
                    }}
                  >
                    {row.title}
                  </h3>
                </div>
                <p style={{ ...bodyStyle, margin: 0, maxWidth: "56ch" }}>{row.body}</p>
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,240px),1fr))",
              gap: "clamp(16px,2vw,24px)",
              marginTop: "clamp(32px,4vw,48px)",
            }}
          >
            <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", height: "clamp(180px,20vw,240px)", background: "var(--bg-alt)" }}>
              <Image src="/images/voice-bay.jpg" alt="Voice agents on shift" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                height: "clamp(180px,20vw,240px)",
                background: "var(--bg-alt)",
                marginTop: "clamp(0px,3vw,36px)",
              }}
            >
              <Image src="/images/helpdesk.jpg" alt="Helpdesk bay handling tier two tickets" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
            </div>
            <div
              style={{
                borderRadius: 20,
                background: "var(--forest)",
                color: "var(--forest-ink)",
                padding: 26,
                height: "clamp(180px,20vw,240px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p style={{ margin: 0, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 700, color: "#a8bdb2" }}>
                Capacity
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-archivo-black)",
                  fontSize: "clamp(1.3rem,2.4vw,1.9rem)",
                  lineHeight: 1.12,
                  letterSpacing: "-.03em",
                }}
              >
                From a 10 seat pilot to a 60 seat floor, same team lead throughout.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Delivery */}
        <Reveal id="delivery" style={{ background: "var(--bg-alt)" }}>
          <div className="shell" style={{ paddingTop: "clamp(88px,10vw,148px)", paddingBottom: "clamp(88px,10vw,148px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "space-between", alignItems: "end", marginBottom: "clamp(40px,5vw,64px)" }}>
              <h2 style={{ ...h2Style, maxWidth: "15ch" }}>How a team starts and scales</h2>
              <p style={{ ...bodyStyle, margin: 0, maxWidth: "38ch" }}>
                Thirty days from first call to a team taking live contacts.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,270px),1fr))",
                gap: "clamp(24px,3vw,36px)",
                alignItems: "start",
              }}
            >
              {steps.map((step) => (
                <article key={step.num} className="step-card" style={{ marginTop: step.offset }}>
                  <div style={{ position: "relative", height: "clamp(170px,18vw,220px)", background: "#dcdcd6" }}>
                    <Image src={step.image} alt={step.alt} fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "24px 26px 30px" }}>
                    <span style={{ fontFamily: "var(--font-archivo-black)", fontSize: 13, letterSpacing: ".1em", color: "var(--lime-deep)" }}>
                      {step.num}
                    </span>
                    <h3 style={{ margin: "10px 0", fontSize: "1.35rem", letterSpacing: "-.025em", fontWeight: 700 }}>{step.title}</h3>
                    <p style={{ ...bodyStyle, margin: 0 }}>{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Proof */}
        <Reveal id="proof" style={{ background: "var(--forest)", color: "var(--forest-ink)" }}>
          <div className="shell" style={{ paddingTop: "clamp(88px,10vw,148px)", paddingBottom: "clamp(88px,10vw,148px)" }}>
            <h2 style={{ ...h2Style, marginBottom: "clamp(40px,5vw,64px)", maxWidth: "16ch" }}>
              Numbers we report on, every week
            </h2>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch" }}>
              {metrics.map((m, i) => (
                <div
                  key={m.value}
                  style={{
                    ...metricStyle(m.tone),
                    borderRadius: 24,
                    padding: "30px 32px",
                    minWidth: "min(100%, 250px)",
                    flex: "1 1 250px",
                    marginTop: m.lift ? "clamp(16px,2vw,44px)" : 0,
                    position: "relative",
                    zIndex: metrics.length - i,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-archivo-black)",
                      fontSize: "clamp(3rem,6vw,4.4rem)",
                      lineHeight: 0.92,
                      letterSpacing: "-.05em",
                    }}
                  >
                    {m.value}
                  </div>
                  <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.5, maxWidth: "20ch" }}>{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Testimonial */}
        <Reveal style={{ background: "var(--bg)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,380px),1fr))", alignItems: "stretch" }}>
            <div style={{ position: "relative", minHeight: "clamp(320px,38vw,540px)", background: "var(--bg-alt)" }}>
              <Image
                src="/images/client-team.jpg"
                alt="Client operations team at their Leeds office"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                background: "var(--bg-alt)",
                display: "flex",
                alignItems: "center",
                padding: "clamp(48px,7vw,96px) clamp(24px,5vw,80px)",
              }}
            >
              <figure style={{ margin: 0, maxWidth: 640 }}>
                <p style={{ margin: "0 0 22px", fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", fontWeight: 700, color: "var(--ink-soft)" }}>
                  Telecom client, 34 seats, since 2023
                </p>
                <blockquote
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-archivo-black)",
                    fontSize: "clamp(1.5rem,3vw,2.3rem)",
                    lineHeight: 1.18,
                    letterSpacing: "-.035em",
                  }}
                >
                  &ldquo;We moved 900 tickets a week to OpsCove in six weeks. The first thing that changed was that
                  someone answered the phone.&rdquo;
                </blockquote>
                <figcaption style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 30 }}>
                  <span
                    style={{
                      position: "relative",
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      overflow: "hidden",
                      flex: "0 0 56px",
                      display: "block",
                      background: "#dcdcd6",
                    }}
                  >
                    <Image src="/images/ruth-marsden.jpg" alt="" fill sizes="56px" style={{ objectFit: "cover" }} />
                  </span>
                  <span style={{ fontSize: 15, lineHeight: 1.45 }}>
                    <strong style={{ display: "block", fontWeight: 700 }}>Ruth Marsden</strong>
                    <span style={{ color: "#56564e" }}>Head of Customer Operations, Leeds</span>
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </Reveal>

        {/* FAQ */}
        <Reveal id="faq" className="shell" style={{ paddingTop: "clamp(88px,10vw,148px)", paddingBottom: "clamp(88px,10vw,148px)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,300px),1fr))",
              gap: "clamp(32px,5vw,80px)",
              alignItems: "start",
            }}
          >
            <div>
              <h2 style={{ ...h2Style, maxWidth: "12ch" }}>What buyers ask us first</h2>
              <p style={{ ...bodyStyle, margin: "22px 0 0", maxWidth: "36ch" }}>
                If your question is not here, put it in the discovery call and we will answer it on the spot.
              </p>
            </div>
            <Faq defaultOpen={0} />
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal id="book" style={{ background: "var(--forest)", color: "var(--forest-ink)" }}>
          <div
            className="shell"
            style={{
              paddingTop: "clamp(88px,10vw,148px)",
              paddingBottom: "clamp(88px,10vw,148px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,320px),1fr))",
              gap: "clamp(32px,5vw,64px)",
              alignItems: "center",
            }}
          >
            <h2 style={{ ...h2Style, fontSize: "clamp(2.2rem,5.4vw,4rem)", lineHeight: 1.02, maxWidth: "15ch" }}>
              Bring us your worst queue. We will scope a pilot.
            </h2>
            <div>
              <a
                href="mailto:contactus@opscovesolutions.com"
                className="btn btn--lime btn--lime-on-dark"
                style={{ fontSize: 16, padding: "17px 32px" }}
              >
                Book a discovery call
              </a>
              <p style={{ margin: "20px 0 0", fontSize: 15, lineHeight: 1.6, color: "#cfddd4", maxWidth: "40ch" }}>
                Thirty minutes with Alex Scott, our founder. No upfront fees, no deposit, and you keep the scope document
                either way.
              </p>
            </div>
          </div>
        </Reveal>
      </main>

      <footer style={{ background: "var(--forest)", color: "var(--forest-ink)", borderTop: "1px solid rgba(244,246,242,.16)" }}>
        <div className="shell" style={{ paddingTop: "clamp(56px,7vw,92px)", paddingBottom: 40 }}>
          <a
            href="mailto:contactus@opscovesolutions.com"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-archivo-black)",
              fontSize: "clamp(1.4rem,4.6vw,3.2rem)",
              letterSpacing: "-.04em",
              lineHeight: 1.05,
              wordBreak: "break-word",
              borderBottom: "4px solid var(--lime)",
              paddingBottom: 6,
            }}
            className="footer__email"
          >
            contactus@opscovesolutions.com
          </a>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,190px),1fr))",
              gap: "clamp(28px,4vw,48px)",
              marginTop: "clamp(48px,6vw,80px)",
            }}
          >
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-archivo-black)", fontSize: 20, letterSpacing: "-.045em", textTransform: "uppercase" }}>
                <span style={{ borderBottom: "5px solid var(--lime)", paddingBottom: 1 }}>Ops</span>cove
              </span>
              <p style={{ margin: "14px 0 0", fontSize: 15, lineHeight: 1.6, color: "var(--forest-soft)", maxWidth: "30ch" }}>
                OpsCove Solutions Pvt. Ltd. Mohali, Punjab, India. Delivering to the UK and US.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 15 }}>
              <span style={{ fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "#8fa99b", fontWeight: 700 }}>Services</span>
              <a href="#services">Voice support</a>
              <a href="#services">Helpdesk</a>
              <a href="#services">Back office</a>
              <a href="#services">Medical billing</a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 15 }}>
              <span style={{ fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "#8fa99b", fontWeight: 700 }}>Company</span>
              <a href="#delivery">Delivery model</a>
              <a href="#proof">Reporting</a>
              <a href="#faq">FAQ</a>
              <a href="#book">Book a call</a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 15, color: "var(--forest-soft)" }}>
              <span style={{ fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "#8fa99b", fontWeight: 700 }}>Coverage</span>
              <span>UK shift: 08:00 to 20:00 GMT</span>
              <span>US shift: 08:00 to 20:00 ET</span>
              <span>Founder: Alex Scott</span>
            </div>
          </div>

          <p style={{ margin: "clamp(40px,6vw,72px) 0 0", fontSize: 13.5, color: "#8fa99b" }}>
            © {new Date().getFullYear()} OpsCove Solutions Pvt. Ltd.
          </p>
        </div>
      </footer>
    </>
  );
}
