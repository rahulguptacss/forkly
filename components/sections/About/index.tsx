'use client';

import React from 'react';
import Image from 'next/image';
import { ChefHat, ConciergeBell, Leaf, UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';
import type { AboutSectionData } from '../../types';

const ICON_MAP = {
  ChefHat,
  Leaf,
  ConciergeBell,
  UtensilsCrossed,
};

export default function About({ data }: { data: AboutSectionData }) {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#FAF8F5] py-11 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left layered framed photo collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-[430px] pb-6 pr-3 lg:col-span-5"
          >
            {/* Tilted gold back accent frame */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: -2.5 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              aria-hidden="true"
              className="pointer-events-none absolute -left-2 -top-2 bottom-8 right-6 border border-[#C89D54]/60 bg-[#E6C891]/25"
            >
              <div className="h-3 w-2/5 bg-[#D9B472]/70" />
            </motion.div>

            {/* Primary dining room image */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.35 }}
              className="relative aspect-[4/4.2] w-full overflow-hidden border-[5px] border-white bg-white shadow-xl"
            >
              <Image
                src={data.primary_image}
                alt={data.primary_image_alt}
                fill
                sizes="(max-width: 1024px) 90vw, 430px"
                className="object-cover"
              />
            </motion.div>

            {/* Overlapping secondary dish photo */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              whileHover={{ y: -5, scale: 1.04 }}
              className="absolute -bottom-2 right-0 h-36 w-36 overflow-hidden border-[5px] border-white bg-white shadow-2xl sm:h-44 sm:w-44"
            >
              <Image
                src={data.secondary_image}
                alt={data.secondary_image_alt}
                fill
                sizes="180px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right centered editorial content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="mx-auto max-w-xl text-center lg:col-span-7"
          >
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C89D54]/60" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5F5850]">
                {data.eyebrow}
              </span>
              <span className="h-px w-10 bg-[#C89D54]/60" />
            </div>

            <h2 className="font-serif text-3xl font-bold leading-[1.12] tracking-tight text-[#1A1713] sm:text-4xl lg:text-[42px]">
              <span className="block">{data.heading_main}</span>
              <span className="mt-0.5 block italic text-[#C89D54]">
                {data.heading_highlight}
              </span>
            </h2>

            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-20 bg-[#1A1713]/35" />
              <UtensilsCrossed className="h-4 w-4 text-[#1A1713]" />
              <span className="h-px w-20 bg-[#1A1713]/35" />
            </div>

            <p className="mx-auto mt-5 max-w-[500px] text-left text-sm leading-[1.7] text-[#2F2A25] sm:text-[15px]">
              {data.description}
            </p>

            <div className="mx-auto mt-8 grid max-w-[500px] grid-cols-3 divide-x divide-[#C89D54]/55">
              {data.highlights.map((item, idx) => {
                const Icon =
                  ICON_MAP[item.icon as keyof typeof ICON_MAP] ??
                  UtensilsCrossed;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: 0.2 + idx * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="flex flex-col items-center px-2 text-center sm:px-3"
                  >
                    <Icon
                      className="mb-2.5 h-7 w-7 text-[#C89D54]"
                      strokeWidth={1.6}
                    />
                    <span className="font-serif text-sm font-bold text-[#1A1713] sm:text-[15px]">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
