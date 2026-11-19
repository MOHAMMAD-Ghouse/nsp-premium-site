"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { whatsappUrl } from "@/lib/constants";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const whatsappMessage = useMemo(() => {
    return [
      "Hello New Steam & Press Co. Ltd,",
      "I would like to get in touch via your website.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
  }, [name, phone, email, message]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError("Please enter your name, phone number and message.");
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[1.35rem] border border-gold/30 bg-card p-6 soft-shadow">
        <div className="flex gap-3">
          <CheckCircle2 className="mt-1 size-5 text-gold" aria-hidden />
          <div>
            <h3 className="font-display text-2xl text-ink">Message ready</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Continue on WhatsApp to send this enquiry to our team. This form
              does not auto-submit to a backend.
            </p>
            <a
              href={whatsappUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white"
            >
              <MessageCircle className="size-4" aria-hidden />
              Send via WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.35rem] border border-gold/25 bg-card p-6 soft-shadow"
      noValidate
    >
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Full name *</Label>
          <Input
            id="contact-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-required="true"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Phone number *</Label>
          <Input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            aria-required="true"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email (optional)</Label>
          <Input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-message">Message *</Label>
          <Textarea
            id="contact-message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            aria-required="true"
          />
        </div>
      </div>

      {error ? (
        <p className="mt-3 text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        className="mt-5 rounded-full bg-gold-gradient font-semibold tracking-[0.14em] text-ink uppercase hover:brightness-110"
      >
        Prepare Enquiry
      </Button>
    </form>
  );
}
