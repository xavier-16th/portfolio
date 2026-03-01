// footer - nav links, socials, and copyright
// shows at the bottom of every page through the layout

import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#08080d",
        padding: "48px 40px 28px",
        textAlign: "center",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
            transition: "color 0.3s",
          }}
        >
          Home
        </Link>
        <Link
          href="/projects"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
            transition: "color 0.3s",
          }}
        >
          Projects
        </Link>
        <Link
          href="/about"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
            transition: "color 0.3s",
          }}
        >
          About
        </Link>
        <Link
          href="/contact"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
            transition: "color 0.3s",
          }}
        >
          Contact
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <a
          href={personalInfo.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={{ fontSize: "24px" }}
        >
          🐙
        </a>
        <a
          href={personalInfo.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{ fontSize: "24px" }}
        >
          💼
        </a>

        <a
          href={personalInfo.socialLinks.email}
          aria-label="Email"
          style={{ fontSize: "24px" }}
        >
          📧
        </a>
      </div>

      <p
        style={{
          color: "rgba(255,255,255,0.4)",
          fontSize: "13px",
          margin: 0,
        }}
      >
        © {currentYear} {personalInfo.name}. All rights reserved.
      </p>
    </footer>
  );
}
