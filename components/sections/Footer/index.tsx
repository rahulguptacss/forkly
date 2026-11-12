'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import type { FooterData } from '../../types';

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

const SOCIAL_ICON_MAP = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  WhatsApp: WhatsAppIcon,
};

export default function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="bg-[#191512] text-white">
      <div className="mx-auto max-w-6xl px-4 pb-5 pt-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-0">
          {/* Col 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-4 lg:border-r lg:border-white/15 lg:pr-8"
          >
            <a href="#home" className="inline-flex items-center">
              <Image
                src={data.logo}
                alt={`${data.logo_text} - ${data.logo_subtext}`}
                width={360}
                height={120}
                className="h-24 w-auto object-contain sm:h-[120px]"
              />
            </a>

            <p className="-mt-1 max-w-xs text-xs leading-relaxed text-white/75 sm:text-[13px]">
              {data.tagline}
            </p>
          </motion.div>

          {/* Col 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-2 lg:border-r lg:border-white/15 lg:px-7"
          >
            <h3 className="font-serif text-lg font-bold tracking-wide text-white">
              {data.quick_links_title}
            </h3>
            <div className="mt-1.5 h-[2px] w-10 bg-[#D4AF6A]" />

            <ul className="mt-4 space-y-1.5">
              {data.quick_links.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-xs text-white/80 transition-colors hover:text-[#D4AF6A] sm:text-[13px]"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-white/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#D4AF6A]" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="lg:col-span-4 lg:border-r lg:border-white/15 lg:px-8"
          >
            <h3 className="font-serif text-lg font-bold tracking-wide text-white">
              {data.contact_title}
            </h3>
            <div className="mt-1.5 h-[2px] w-10 bg-[#D4AF6A]" />

            <ul className="mt-4 space-y-3.5 text-xs text-white/80 sm:text-[13px]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E0B46C]" />
                <span>{data.address}</span>
              </li>
              <li>
                <a
                  href={data.phone_href}
                  className="flex items-center gap-3 transition-colors hover:text-[#D4AF6A]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#E0B46C]" />
                  <span>{data.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={data.email_href}
                  className="flex items-center gap-3 transition-colors hover:text-[#D4AF6A]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#E0B46C]" />
                  <span>{data.email}</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Col 4: Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="lg:col-span-2 lg:pl-7"
          >
            <h3 className="font-serif text-lg font-bold tracking-wide text-white">
              {data.social_title}
            </h3>
            <div className="mt-1.5 h-[2px] w-10 bg-[#D4AF6A]" />

            <div className="mt-5 flex items-center gap-3">
              {data.social_links.map((social) => {
                const Icon =
                  SOCIAL_ICON_MAP[
                    social.icon as keyof typeof SOCIAL_ICON_MAP
                  ] ?? InstagramIcon;
                return (
                  <motion.a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF6A] text-[#E0B46C] transition-colors hover:bg-[#D4AF6A] hover:text-[#191512]"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Gold Divider & Left-Aligned Copyright */}
        <div className="mt-6 border-t border-[#C89D54]/60 pt-3.5 text-left text-xs text-white/75">
          {data.copyright}
        </div>
      </div>
    </footer>
  );
}
