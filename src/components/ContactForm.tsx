// contact form component
// handles the form state, validation, and sends to the api route
// shows success/error messages after submit

"use client";

import { useState, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  // send form data to the api endpoint
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // shared styles so i dont repeat them for every input
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    color: "white",
    fontSize: "15px",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "rgba(237, 237, 240, 0.5)",
    marginBottom: "6px",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "600px", margin: "0 auto" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <div>
          <label htmlFor="name" style={labelStyle}>
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Your name"
            value={formData.name}
            // spread the old state and just overwrite the field that changed
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="subject" style={labelStyle}>
          Subject
        </label>
        <input
          id="subject"
          type="text"
          required
          placeholder="What's this about?"
          value={formData.subject}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, subject: e.target.value }))
          }
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <label htmlFor="message" style={labelStyle}>
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          style={{
            ...inputStyle,
            resize: "vertical",
            minHeight: "150px",
          }}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="cta-button"
        style={{
          width: "100%",
          fontSize: "18px",
          opacity: status === "submitting" ? 0.7 : 1,
        }}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {/* conditional messages - only one shows at a time based on form status */}
      {status === "success" && (
        <p
          style={{
            textAlign: "center",
            color: "#4ade80",
            marginTop: "20px",
            fontSize: "16px",
          }}
        >
          ✓ Message sent successfully! I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p
          style={{
            textAlign: "center",
            color: "#f87171",
            marginTop: "20px",
            fontSize: "16px",
          }}
        >
          ✗ Something went wrong. Please try again or email me directly.
        </p>
      )}

      {/* on mobile, stack the name/email fields vertically instead of side by side */}
      <style jsx>{`
        @media (max-width: 768px) {
          form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </form>
  );
}
