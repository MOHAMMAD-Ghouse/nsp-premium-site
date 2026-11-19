"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES, whatsappUrl } from "@/lib/constants";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  postcode: string;
  service: string;
  preference: string;
  preferredDate: string;
  instructions: string;
  callback: boolean;
};

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  postcode: "",
  service: "",
  preference: "",
  preferredDate: "",
  instructions: "",
  callback: false,
};

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const message = useMemo(() => {
    return [
      "Hello New Steam & Press Co. Ltd,",
      "I would like to submit a booking request via your website.",
      "",
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Address: ${form.address}`,
      `Postcode: ${form.postcode}`,
      `Service: ${form.service}`,
      `Preference: ${form.preference}`,
      `Preferred date: ${form.preferredDate}`,
      form.instructions ? `Instructions: ${form.instructions}` : null,
      form.callback ? "Please call me back to confirm." : null,
    ]
      .filter(Boolean)
      .join("\n");
  }, [form]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (
      !form.fullName.trim() ||
      !form.phone.trim() ||
      !form.address.trim() ||
      !form.postcode.trim() ||
      !form.service ||
      !form.preference ||
      !form.preferredDate
    ) {
      setError("Please complete the required fields before continuing.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[1.5rem] border border-gold/30 bg-card p-8 soft-shadow">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 size-6 text-gold" aria-hidden />
          <div>
            <h3 className="font-display text-3xl text-ink">
              Your booking request is ready
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              This is a booking handoff — your details have not been sent to our
              system automatically. Please continue on WhatsApp so our team can
              confirm availability, or call us if you prefer.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105"
              >
                <MessageCircle className="size-4" aria-hidden />
                Send via WhatsApp
              </a>
              <Button
                type="button"
                variant="outline"
                className="rounded-full"
                onClick={() => {
                  setSubmitted(false);
                  setForm(initialState);
                }}
              >
                Edit details
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.5rem] border border-gold/25 bg-card p-6 soft-shadow sm:p-8"
      noValidate
    >
      <div className="mb-6 rounded-xl border border-gold/20 bg-cream-deep/60 px-4 py-3 text-sm text-muted-foreground">
        Demo booking form with WhatsApp handoff — we confirm every request by
        message or phone. Free collection &amp; delivery is subject to
        service-area availability.
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name *" htmlFor="fullName">
          <Input
            id="fullName"
            name="fullName"
            autoComplete="name"
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            required
            aria-required="true"
          />
        </Field>

        <Field label="Phone number *" htmlFor="phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            required
            aria-required="true"
          />
        </Field>

        <Field label="Email address (optional)" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </Field>

        <Field label="Postcode *" htmlFor="postcode">
          <Input
            id="postcode"
            name="postcode"
            autoComplete="postal-code"
            value={form.postcode}
            onChange={(e) => update("postcode", e.target.value)}
            required
            aria-required="true"
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label="Collection address *" htmlFor="address">
            <Input
              id="address"
              name="address"
              autoComplete="street-address"
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              required
              aria-required="true"
            />
          </Field>
        </div>

        <Field label="Service required *" htmlFor="service">
          <select
            id="service"
            name="service"
            required
            aria-required="true"
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            className="premium-field"
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Multiple services">Multiple services</option>
            <option value="Not sure — please advise">
              Not sure — please advise
            </option>
          </select>
        </Field>

        <Field label="Collection or drop-off *" htmlFor="preference">
          <select
            id="preference"
            name="preference"
            required
            aria-required="true"
            value={form.preference}
            onChange={(e) => update("preference", e.target.value)}
            className="premium-field"
          >
            <option value="" disabled>
              Choose preference
            </option>
            <option value="Collection & delivery">
              Collection &amp; delivery
            </option>
            <option value="Drive-up drop-off">Drive-up drop-off</option>
            <option value="Shop collection later">Shop collection later</option>
          </select>
        </Field>

        <Field label="Preferred date *" htmlFor="preferredDate">
          <Input
            id="preferredDate"
            name="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={(e) => update("preferredDate", e.target.value)}
            required
            aria-required="true"
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label="Additional instructions" htmlFor="instructions">
            <Textarea
              id="instructions"
              name="instructions"
              rows={4}
              value={form.instructions}
              onChange={(e) => update("instructions", e.target.value)}
              placeholder="Stains, delicate fabrics, preferred finishing notes..."
            />
          </Field>
        </div>
      </div>

      <div className="mt-5 flex items-start gap-3">
        <Checkbox
          id="callback"
          checked={form.callback}
          onCheckedChange={(checked) => update("callback", checked === true)}
        />
        <Label htmlFor="callback" className="leading-snug font-normal">
          Please call me back to confirm this booking request
        </Label>
      </div>

      {error ? (
        <p className="mt-4 text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button
          type="submit"
          className="rounded-full bg-gold-gradient px-8 font-semibold tracking-[0.14em] text-ink uppercase hover:brightness-110"
        >
          Submit Booking Request
        </Button>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-2.5 text-sm font-medium transition hover:border-gold/50"
        >
          Or message on WhatsApp
        </a>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
