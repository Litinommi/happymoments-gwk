import Image from "next/image";
import { Camera, Phone, MapPin } from "lucide-react";
import { BUSINESS, NAV_LINKS, LOGO_SRC } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-bg-primary py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 sm:px-8 lg:flex-row lg:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/20">
              <Image src={LOGO_SRC} alt="Happy Moments GWK logo" fill sizes="36px" className="object-cover" />
            </div>
            <span className="font-display text-sm font-semibold uppercase tracking-wide">
              Happy Moments <span className="text-cyan">GWK</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            Party Hall &amp; Celebration Venue &mdash; making every moment a happy moment.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-text-secondary">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-primary">
            Explore
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-cyan">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm text-text-secondary">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-primary">
            Contact
          </span>
          <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-cyan">
            <Camera size={15} /> {BUSINESS.instagramHandle}
          </a>
          {BUSINESS.phones.map((phone) => (
            <a key={phone} href={`tel:+91${phone}`} className="flex items-center gap-2 transition-colors hover:text-cyan">
              <Phone size={15} /> +91 {phone}
            </a>
          ))}
          <span className="flex items-start gap-2">
            <MapPin size={15} className="mt-0.5 shrink-0" /> {BUSINESS.address.full}
          </span>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-5 text-xs text-text-secondary/70 sm:px-8">
        &copy; {new Date().getFullYear()} Happy Moments GWK. All rights reserved.
      </div>
    </footer>
  );
}
