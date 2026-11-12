'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '../../ui/SectionHeading';
import type { SpecialtiesSectionData } from '../../types';

export default function Specialties({ data }: { data: SpecialtiesSectionData }) {
  return (
    <section id="specialties" className="bg-white py-11 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={data.eyebrow}
          headingMain={data.heading_main}
          headingHighlight={data.heading_highlight}
          showOrnament
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {data.items.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-full max-w-[330px] rounded-t-[185px] border border-[#C89D54]/65 bg-white p-2 transition-colors duration-300 group-hover:border-[#C89D54]">
                <div className="relative aspect-[4/3.6] w-full overflow-hidden rounded-t-[175px] bg-[#FAF8F5]">
                  <Image
                    src={item.image}
                    alt={item.image_alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 330px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <h3 className="mt-5 font-serif text-2xl font-medium text-[#1A1713]">
                {item.title}
              </h3>

              <span className="my-2.5 h-px w-8 bg-[#C89D54]/65" />

              <p className="max-w-[260px] text-xs leading-relaxed text-[#6E675F] sm:text-[13px]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
