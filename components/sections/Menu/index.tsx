'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../../ui/SectionHeading';
import type { MenuSectionData } from '../../types';

export default function Menu({ data }: { data: MenuSectionData }) {
  const [activeId, setActiveId] = useState(
    data.default_category || data.categories[0]?.id || ''
  );

  const activeCategory =
    data.categories.find((cat) => cat.id === activeId) ?? data.categories[0];

  if (!activeCategory) return null;

  return (
    <section id="menu" className="bg-white py-11 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={data.eyebrow}
          headingMain={data.heading_main}
          headingHighlight={data.heading_highlight}
        />

        {/* Category Filter Tabs with diamond separators */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          {data.categories.map((cat, idx) => {
            const isActive = cat.id === activeCategory.id;
            return (
              <React.Fragment key={cat.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(cat.id)}
                  className={`relative px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors sm:text-xs ${
                    isActive
                      ? 'text-white'
                      : 'text-[#1A1713] hover:text-[#C89D54]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="menuTabActive"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                      className="absolute inset-0 rounded-[2px] bg-[#B88E4A] shadow-xs"
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
                {idx < data.categories.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden text-[9px] text-[#1A1713] sm:inline"
                  >
                    ◆
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Framed Menu Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative mt-9 flex overflow-hidden border border-[#C89D54]/55 bg-[#FDFBF7] shadow-[0_12px_36px_rgba(26,23,19,0.04)]"
          >
            {/* Left decorative wave/scallop gold pattern strip */}
            <div
              aria-hidden="true"
              className="hidden w-10 shrink-0 border-r border-[#C89D54]/20 bg-[radial-gradient(circle_at_0_50%,transparent_65%,rgba(200,157,84,0.22)_66%,transparent_69%)] bg-[length:28px_28px] sm:block"
            />

            <div className="grid flex-1 grid-cols-1 items-center gap-8 p-6 sm:p-9 lg:grid-cols-12 lg:gap-6 lg:p-10">
              {/* Left Dish List */}
              <div className="lg:col-span-6">
                <h3 className="font-serif text-3xl font-medium text-[#1A1713]">
                  {activeCategory.label}
                </h3>
                <div className="mt-2 h-[2px] w-10 bg-[#C89D54]/75" />

                <div className="mt-6 divide-y divide-[#EAE2D6]/80">
                  {activeCategory.items.map((dish, idx) => (
                    <motion.div
                      key={dish.id}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.07 }}
                      className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[#C89D54]/55 bg-white p-0.5 shadow-xs">
                        <div className="relative h-full w-full overflow-hidden rounded-full">
                          <Image
                            src={dish.image}
                            alt={dish.name}
                            fill
                            sizes="64px"
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-serif text-[14px] font-bold uppercase tracking-[0.05em] text-[#1A1713]">
                              {dish.name}
                            </h4>
                            {dish.badge && (
                              <span className="rounded-[2px] bg-[#B88E4A] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                                {dish.badge}
                              </span>
                            )}
                          </div>
                          <span className="shrink-0 font-serif text-sm font-bold text-[#B88E4A]">
                            {dish.price}
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-[#5F5850]">
                          {dish.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Arched Featured Image + Vertical Divider + Rotated Category Label */}
              <div className="flex items-center justify-center lg:col-span-6 lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="relative aspect-[4/4.2] w-full max-w-[360px] overflow-hidden rounded-t-[220px] border border-[#C89D54]/70 bg-white shadow-sm"
                >
                  <Image
                    src={activeCategory.featured_image}
                    alt={activeCategory.featured_alt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 360px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>

                <div
                  aria-hidden="true"
                  className="mx-5 hidden h-64 w-px bg-[#C89D54]/55 lg:block"
                />

                <span
                  aria-hidden="true"
                  className="pointer-events-none hidden select-none font-serif text-4xl font-normal uppercase tracking-[0.22em] text-[#D7C6A7] lg:block [writing-mode:vertical-rl] rotate-180"
                >
                  {activeCategory.label}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
