import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { business } from "@/lib/site-data";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#home" className={cn("brand", footer && "brand-footer")} aria-label="Shree Sanwariya Marketing — home">
      <span className="brand-mark" aria-hidden="true">ssm<span className="brand-period">.</span></span>
      <span className="brand-name">SHREE SANWARIYA<br />MARKETING</span>
    </a>
  );
}

export function SectionLabel({ children, number }: { children: React.ReactNode; number?: string }) {
  return <p className="section-label"><span className="label-dot" aria-hidden="true" />{children}{number && <span className="label-number">/ {number}</span>}</p>;
}

export function CampaignLink({ children = "Start Your Campaign", className, href = business.campaignUrl, variant = "default" }: {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "default" | "outline" | "secondary";
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant, size: "campaign" }), className)}>
      {children}<ArrowUpRight data-icon="inline-end" aria-hidden="true" />
      <span className="sr-only"> (opens WhatsApp in a new tab)</span>
    </a>
  );
}
