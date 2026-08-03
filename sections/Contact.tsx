"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { contactDetails } from "@/constants/social";

const infoRows = [
  { icon: Mail, label: "Email", value: contactDetails.email },
  { icon: Phone, label: "Phone", value: contactDetails.phone },
  { icon: MapPin, label: "Location", value: contactDetails.location },
  { icon: Github, label: "GitHub", value: contactDetails.github },
  { icon: Linkedin, label: "LinkedIn", value: contactDetails.linkedin },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (form.elements.namedItem("cf-name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("cf-email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("cf-message") as HTMLTextAreaElement).value;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 2200);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  const buttonLabel =
    status === "loading"
      ? "Sending…"
      : status === "success"
      ? "Message Sent!"
      : status === "error"
      ? "Failed — Try Again"
      : "Send Message";

  return (
    <section id="contact">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow-label">04 · Contact</span>
          <h2 className="section-title">Let&apos;s build something together</h2>
          <p className="section-sub">
            Have a project in mind, or just want to talk shop? My inbox is always open.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="contact-info-list">
              {infoRows.map(({ icon: Icon, label, value }) => (
                <div className="contact-row" key={label}>
                  <div className="ci"><Icon size={19} /></div>
                  <div>
                    <div className="cl">{label}</div>
                    <div className="cv">{value}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="secondary" href={contactDetails.resumeUrl} style={{ marginTop: 28 }}>
              <Download size={16} /> Download Resume
            </Button>
          </Reveal>

          <Reveal delay={0.1} className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="cf-name" type="text" placeholder="Your full name" required />
              </div>
              <div className="field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="cf-email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="field">
                <label htmlFor="cf-message">Message</label>
                <textarea id="cf-message" name="cf-message" placeholder="Tell me about your project…" required />
              </div>

              {status === "error" && (
                <p style={{ color: "#f87171", fontSize: "0.85rem", marginTop: 8 }}>
                  {errorMsg}
                </p>
              )}

              <Button
                variant="primary"
                className="form-submit"
                style={{ width: "100%", marginTop: 6 }}
                disabled={status === "loading"}
              >
                {buttonLabel}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}