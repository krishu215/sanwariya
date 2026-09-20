"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { createEnquiryUrl, services } from "@/lib/site-data";

export function EnquiryForm() {
  const [error, setError] = useState("");
  const [preparedUrl, setPreparedUrl] = useState("");

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "").trim();
    if (name.length < 2 || message.length < 5 || !services.some((item) => item.title === service)) {
      setError("Please add your name, choose a service and tell us a little about your campaign.");
      return;
    }
    setError("");
    const url = createEnquiryUrl(name.slice(0, 100), service, message.slice(0, 2000));
    setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="enquiry-form" onSubmit={submitEnquiry} aria-labelledby="enquiry-heading">
      <div className="enquiry-heading"><h3 id="enquiry-heading">A good campaign starts with a hello.</h3><p>QUICK ENQUIRY</p></div>
      <FieldGroup>
        <Field><FieldLabel htmlFor="enquiry-name">Your Name</FieldLabel><Input id="enquiry-name" name="name" autoComplete="name" placeholder="What should we call you?" required minLength={2} maxLength={100} onKeyDown={(event) => { if (event.key === "Enter" && (event.nativeEvent.isComposing || event.keyCode === 229)) event.preventDefault(); }} /></Field>
        <Field><FieldLabel htmlFor="enquiry-service">Service You Need</FieldLabel><NativeSelect id="enquiry-service" name="service" defaultValue="" required className="w-full"><NativeSelectOption value="" disabled>Select a service</NativeSelectOption>{services.map((service) => <NativeSelectOption key={service.id} value={service.title}>{service.id === "custom" ? "Customized Campaign" : service.title}</NativeSelectOption>)}</NativeSelect></Field>
        <Field><FieldLabel htmlFor="enquiry-message">Tell Us Briefly</FieldLabel><Textarea id="enquiry-message" name="message" placeholder="A little about your brand and what you have in mind…" rows={3} required minLength={5} maxLength={2000} /></Field>
        {error && <FieldError>{error}</FieldError>}
        <Button type="submit" size="campaign" className="w-full">Send via WhatsApp<ArrowUpRight data-icon="inline-end" aria-hidden="true" /></Button>
        <FieldDescription>No spam — this opens a WhatsApp conversation with your details filled in. Nothing is sent until you press send in WhatsApp.</FieldDescription>
        <p className="enquiry-status" role="status">{preparedUrl && <>Your message is ready. If WhatsApp didn&apos;t open, <a href={preparedUrl} target="_blank" rel="noopener noreferrer">open your conversation here</a>.</>}</p>
      </FieldGroup>
    </form>
  );
}
