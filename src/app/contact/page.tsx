// contact page - form + social links
// form sends to /api/contact, social links open in new tabs

import type { Metadata } from "next";
import { personalInfo } from "@/data/portfolio";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Xavier Carrier pour vos projets web. Formulaire de contact et liens vers les réseaux sociaux.",
};

// quick array of my social links for the bottom section
const socialLinks = [
  {
    icon: "📧",
    label: "Email",
    href: personalInfo.socialLinks.email,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    href: personalInfo.socialLinks.linkedin,
  },
  {
    icon: "🐙",
    label: "GitHub",
    href: personalInfo.socialLinks.github,
  },
];

export default function ContactPage() {
  return (
    <section
      style={{
        background:
          "linear-gradient(to bottom, #1a0f2e 0%, rgba(35, 20, 60, 0.8) 30%, rgba(15, 8, 25, 1) 70%, #0a0515 100%)",
        padding: "140px 50px 100px",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <AnimatedSection>
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-subtitle">
            Have a project in mind? Let&apos;s talk about it.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div
            className="glass-card"
            style={{
              padding: "40px",
              marginBottom: "60px",
              cursor: "default",
            }}
          >
            <ContactForm />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              textAlign: "center",
              color: "rgba(237,237,240,0.6)",
              marginBottom: "24px",
              letterSpacing: "-0.01em",
            }}
          >
            Or find me on
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                  padding: "25px 30px",
                  minWidth: "120px",
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: "36px" }}>{link.icon}</span>
                <span style={{ fontWeight: 600, fontSize: "14px" }}>
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
