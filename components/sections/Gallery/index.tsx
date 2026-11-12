'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../../ui/SectionHeading';
import type { GallerySectionData } from '../../types';

export default function Gallery({ data }: { data: GallerySectionData }) {
  const allImages = [
    { src: data.left_top_image.src, alt: data.left_top_image.alt },
    { src: data.left_bottom_image.src, alt: data.left_bottom_image.alt },
    { src: data.center_top_image.src, alt: data.center_top_image.alt },
    { src: data.center_bottom_image.src, alt: data.center_bottom_image.alt },
    {
      src: data.feature_image.src,
      alt: data.feature_image.alt,
      title: data.feature_image.overlay_title,
      subtitle: data.feature_image.overlay_subtitle,
    },
    { src: data.right_top_image.src, alt: data.right_top_image.alt },
    { src: data.right_bottom_image.src, alt: data.right_bottom_image.alt },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedIndex((i) =>
          i === null ? null : (i + 1) % allImages.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((i) =>
          i === null ? null : (i - 1 + allImages.length) % allImages.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex, allImages.length]);

  const activeItem =
    selectedIndex !== null ? allImages[selectedIndex] : null;

  return (
    <section id="gallery" className="bg-white py-11 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={data.eyebrow}
          headingMain={data.heading_main}
          headingHighlight={data.heading_highlight}
          subtitle={data.subtitle}
        />

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.45fr_1fr]">
          {/* Col 1 */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
            {[0, 1].map((idx, pos) => (
              <motion.button
                key={allImages[idx].src + idx}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: 0.05 + pos * 0.07 }}
                className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-[#FAF8F5] text-left focus:outline-none"
              >
                <Image
                  src={allImages[idx].src}
                  alt={allImages[idx].alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
                  <ZoomIn className="h-6 w-6 scale-75 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Col 2 */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
            {[2, 3].map((idx, pos) => (
              <motion.button
                key={allImages[idx].src + idx}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: 0.16 + pos * 0.06 }}
                className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-[#FAF8F5] text-left focus:outline-none"
              >
                <Image
                  src={allImages[idx].src}
                  alt={allImages[idx].alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
                  <ZoomIn className="h-6 w-6 scale-75 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Col 3 - Wide Center Feature with Inset Gold Frame */}
          <motion.button
            type="button"
            onClick={() => setSelectedIndex(4)}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="group relative min-h-[300px] w-full cursor-pointer overflow-hidden bg-[#14110E] text-left focus:outline-none sm:col-span-2 lg:col-span-1 lg:min-h-full"
          >
            <Image
              src={data.feature_image.src}
              alt={data.feature_image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 34vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-3.5 border border-[#C89D54]/65 transition-colors duration-300 group-hover:border-[#D4AF6A]"
            />

            <div className="absolute inset-x-0 bottom-0 p-7 text-left">
              <p className="font-serif text-2xl font-medium leading-tight text-white sm:text-[26px]">
                {data.feature_image.overlay_title}
              </p>
              <p className="mt-1 flex items-center gap-2 font-serif text-base italic text-[#D4AF6A]">
                <span className="h-px w-4 bg-[#D4AF6A]" />
                <span>{data.feature_image.overlay_subtitle}</span>
              </p>
            </div>
          </motion.button>

          {/* Col 4 */}
          <div className="grid grid-cols-2 gap-3 sm:col-span-2 lg:col-span-1 lg:grid-cols-1">
            {[5, 6].map((idx, pos) => (
              <motion.button
                key={allImages[idx].src + idx}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: 0.25 + pos * 0.05 }}
                className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-[#FAF8F5] text-left focus:outline-none"
              >
                <Image
                  src={allImages[idx].src}
                  alt={allImages[idx].alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
                  <ZoomIn className="h-6 w-6 scale-75 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Popup Modal */}
      <AnimatePresence>
        {activeItem && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl border border-[#C89D54]/50 bg-[#14110E] p-3 shadow-2xl sm:p-4"
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label={data.close_aria_label}
                className="absolute -right-3 -top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#C89D54]/60 bg-[#14110E] text-white shadow-lg transition-colors hover:bg-[#C89D54]"
              >
                <X className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + allImages.length) % allImages.length
                  )
                }
                aria-label={data.prev_aria_label}
                className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:border-[#C89D54] hover:bg-[#C89D54] sm:left-6"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedIndex((selectedIndex + 1) % allImages.length)
                }
                aria-label={data.next_aria_label}
                className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:border-[#C89D54] hover:bg-[#C89D54] sm:right-6"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  sizes="(max-width: 1024px) 95vw, 900px"
                  className="object-contain"
                />
              </div>

              <div className="mt-3 flex items-center justify-between gap-4 px-1 text-white">
                <div>
                  {activeItem.title ? (
                    <p className="font-serif text-lg font-medium text-white">
                      {activeItem.title}{' '}
                      <span className="italic text-[#D4AF6A]">
                        — {activeItem.subtitle}
                      </span>
                    </p>
                  ) : (
                    <p className="text-xs text-white/85 sm:text-sm">
                      {activeItem.alt}
                    </p>
                  )}
                </div>
                <span className="shrink-0 font-serif text-xs tracking-widest text-[#C89D54]">
                  {selectedIndex + 1} / {allImages.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
