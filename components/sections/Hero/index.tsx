'use client';

import React from 'react';
import Image from 'next/image';
import { UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';
import type { HeroSectionData } from '../../types';

export default function Hero({ data }: { data: HeroSectionData }) {
  return (
    <section
      id="home"
      className="relative flex min-h-[540px] w-full items-center justify-center overflow-hidden bg-[#14110E] pt-20 pb-16 sm:min-h-[600px] lg:min-h-[640px]"
    >
      <Image
        src={data.background_image}
        alt={data.background_alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-4xl px-4 text-center"
      >
        <h1 className="font-serif text-4xl font-normal uppercase tracking-[0.14em] text-white sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.08]">
          <span className="block">{data.headline_line1}</span>
          <span className="mt-1 block">{data.headline_line2}</span>
          <span className="mt-1 block font-normal italic lowercase tracking-wide text-[#D4AF6A] sm:text-6xl md:text-7xl lg:text-[74px]">
            {data.headline_highlight}
          </span>
        </h1>

        <div className="mx-auto mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-[#C89D54]/60 sm:w-24" />
          <UtensilsCrossed className="h-4 w-4 text-[#D4AF6A]" />
          <span className="h-px w-16 bg-[#C89D54]/60 sm:w-24" />
        </div>
      </motion.div>
    </section>
  );
}

