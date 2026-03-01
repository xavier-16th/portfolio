// 404 page - shows when someone hits a route that doesnt exist
// big 404, some helpful links, and a button to go home

import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(to bottom, #1a1a2e 0%, rgba(35, 20, 60, 1) 50%, #0a0515 100%)",
        padding: "50px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <h1
          className="animate-glow"
          style={{
            fontFamily: "'Knewave', cursive",
            fontSize: "clamp(80px, 20vw, 180px)",
            margin: 0,
            color: "white",
            lineHeight: 1,
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontFamily: "'Knewave', cursive",
            fontSize: "clamp(20px, 4vw, 28px)",
            color: "#818cf8",
            margin: "16px 0",
          }}
        >
          Page Not Found
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.6)",
            marginBottom: "40px",
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Here are some helpful links instead:
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginBottom: "40px",
          }}
        >
          {[
            { href: "/", label: "Home", desc: "Back to the homepage" },
            { href: "/projects", label: "Projects", desc: "Browse my work" },
            { href: "/about", label: "About", desc: "Learn more about me" },
            { href: "/contact", label: "Contact", desc: "Get in touch" },
          ].map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="glass-card"
              style={{
                padding: "20px 25px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div style={{ textAlign: "left" }}>
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "16px",
                    display: "block",
                    color: "white",
                  }}
                >
                  {page.label}
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {page.desc}
                </span>
              </div>
              <span style={{ color: "#818cf8", fontSize: "18px" }}>→</span>
            </Link>
          ))}
        </div>

        <Link href="/" className="cta-button">
          Return Home
        </Link>
      </div>
    </section>
  );
}
