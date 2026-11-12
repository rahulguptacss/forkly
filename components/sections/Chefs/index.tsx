'use client';

import React from 'react';
import Image from 'next/image';
import { ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ChefsSectionData } from '../../types';

export default function Chefs({ data }: { data: ChefsSectionData }) {
  return (
    <section id="chef" className="bg-[#FAF8F5] py-11 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with ChefHat Ornament */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-2.5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C89D54]/60" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5F5850]">
              {data.eyebrow}
            </span>
            <span className="h-px w-8 bg-[#C89D54]/60" />
          </div>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1A1713] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            {data.heading_main}{' '}
            <span className="italic text-[#C89D54]">
              {data.heading_highlight}
            </span>
          </h2>

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#1A1713]/35" />
            <ChefHat className="h-4 w-4 text-[#1A1713]" strokeWidth={1.7} />
            <span className="h-px w-16 bg-[#1A1713]/35" />
          </div>

          <p className="mt-3 text-sm leading-relaxed text-[#4E4841] sm:text-[15px]">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Chef Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {data.members.map((member, idx) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-full rounded-t-[180px] border border-[#C89D54]/65 bg-white p-2 shadow-xs transition-colors duration-300 group-hover:border-[#C89D54] group-hover:shadow-md">
                <div className="relative aspect-[3/3.45] w-full overflow-hidden rounded-t-[170px] bg-[#FAF8F5]">
                  <Image
                    src={member.image}
                    alt={member.image_alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <h3 className="mt-4 font-serif text-xl font-bold text-[#1A1713]">
                {member.name}
              </h3>

              <div className="mt-1.5 flex items-center justify-center gap-2.5">
                <span className="h-px w-5 bg-[#C89D54]/60" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B88E4A]">
                  {member.role}
                </p>
                <span className="h-px w-5 bg-[#C89D54]/60" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
