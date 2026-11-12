'use client';

import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../../ui/SectionHeading';
import type { ContactSectionData } from '../../types';

const ICON_MAP = {
  MapPin,
  Phone,
  Mail,
};

export default function Contact({ data }: { data: ContactSectionData }) {
  return (
    <section id="contact" className="bg-[#FAF8F5] py-11 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={data.eyebrow}
          headingMain={data.heading_main}
          headingHighlight={data.heading_highlight}
          subtitle={data.subtitle}
        />

        <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Contact List with Horizontal Dividers & Right Vertical Gold Border */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="divide-y divide-[#C89D54]/25 lg:col-span-5 lg:border-r lg:border-[#C89D54]/45 lg:pr-8"
          >
            {data.info_cards.map((card, idx) => {
              const Icon =
                ICON_MAP[card.icon as keyof typeof ICON_MAP] ?? MapPin;

              const inner = (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 py-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E8D6] text-[#B88E4A]">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#1A1713] sm:text-[15px]">
                      {card.label}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#4E4841] sm:text-[13px]">
                      {card.value}
                    </p>
                  </div>
                </motion.div>
              );

              return card.href ? (
                <a key={card.id} href={card.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={card.id}>{inner}</div>
              );
            })}
          </motion.div>

          {/* Right Normal Interactive Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="h-[280px] w-full overflow-hidden rounded-lg border-[1.5px] border-[#C89D54]/70 bg-white shadow-sm sm:h-[310px]">
              <iframe
                src={data.map.embed_url}
                title={data.map.pin_label}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
