'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../../ui/SectionHeading';
import type { TestimonialsSectionData } from '../../types';

function GoldQuoteMark() {
  return (
    <svg
      viewBox="0 0 36 26"
      className="mx-auto h-6 w-8 text-[#C89D54]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.5 0C6.8 2.2 1.8 8.3 1.8 15.8c0 5.3 3.4 9.2 8 9.2 4.1 0 7.2-3 7.2-7 0-3.8-2.8-6.6-6.5-6.6-.9 0-1.7.2-2.4.5.7-4 3.4-7.4 7.7-9.2L14.5 0zm19.7 0C26.5 2.2 21.5 8.3 21.5 15.8c0 5.3 3.4 9.2 8 9.2 4.1 0 7.2-3 7.2-7 0-3.8-2.8-6.6-6.5-6.6-.9 0-1.7.2-2.4.5.7-4 3.4-7.4 7.7-9.2L34.2 0z" />
    </svg>
  );
}

export default function Testimonials({ data }: { data: TestimonialsSectionData }) {
  const count = data.items.length;
  const initialCenter = count > 1 ? count + 1 : 0;

  const [trackIndex, setTrackIndex] = useState(initialCenter);
  const [instant, setInstant] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (count <= 1 || isPaused) return;
    const timer = setInterval(() => {
      setInstant(false);
      setTrackIndex((i) => i + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, [count, isPaused]);

  if (count === 0) return null;

  // Triple the array for seamless infinite horizontal sliding
  const trackItems = [...data.items, ...data.items, ...data.items];
  const activeDot = ((trackIndex % count) + count) % count;

  const prev = () => {
    setInstant(false);
    setTrackIndex((i) => i - 1);
  };

  const next = () => {
    setInstant(false);
    setTrackIndex((i) => i + 1);
  };

  const goTo = (dotIdx: number) => {
    setInstant(false);
    setTrackIndex(count + dotIdx);
  };

  const handleAnimationComplete = () => {
    if (trackIndex >= count * 2) {
      setInstant(true);
      setTrackIndex(trackIndex - count);
    } else if (trackIndex < count) {
      setInstant(true);
      setTrackIndex(trackIndex + count);
    }
  };

  const translatePercent = isDesktop
    ? -((trackIndex - 1) * (100 / 3))
    : -(trackIndex * 100);

  return (
    <section id="testimonials" className="bg-white py-11 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={data.eyebrow}
          headingMain={data.heading_main}
          headingHighlight={data.heading_highlight}
          subtitle={data.subtitle}
        />

        <div
          className="relative mt-11"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          <motion.button
            type="button"
            onClick={prev}
            aria-label={data.prev_aria_label}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="absolute -left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#C89D54]/60 bg-[#181715] text-[#D4AF6A] transition-colors hover:bg-[#C89D54] hover:text-white lg:flex"
          >
            <ArrowLeft className="h-4 w-4" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            type="button"
            onClick={next}
            aria-label={data.next_aria_label}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="absolute -right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#C89D54]/60 bg-[#181715] text-[#D4AF6A] transition-colors hover:bg-[#C89D54] hover:text-white lg:flex"
          >
            <ArrowRight className="h-4 w-4" />
          </motion.button>

          {/* Continuous Sliding Carousel Track */}
          <div className="lg:px-10">
            <div className="overflow-hidden">
              <motion.div
              animate={{ x: `${translatePercent}%` }}
              transition={
                instant
                  ? { duration: 0 }
                  : { type: 'spring', stiffness: 220, damping: 28 }
              }
              onAnimationComplete={handleAnimationComplete}
              className="flex items-center"
            >
              {trackItems.map((item, idx) => {
                const isFeatured = idx === trackIndex;
                return (
                  <div
                    key={`${item.id}-${idx}`}
                    className="w-full shrink-0 px-2.5 md:w-1/3"
                  >
                    <article
                      className={`flex flex-col justify-between rounded-lg border text-center transition-all duration-300 ${
                        isFeatured
                          ? 'border-[1.5px] border-[#C89D54] bg-[#181715] px-7 py-9 text-white md:py-11'
                          : 'border-[#C89D54]/60 bg-white px-6 py-7 text-[#1A1713]'
                      }`}
                    >
                      <div>
                        <GoldQuoteMark />
                        <p
                          className={`mt-4 text-xs leading-relaxed sm:text-[13.5px] ${
                            isFeatured ? 'text-white/90' : 'text-[#2F2A25]'
                          }`}
                        >
                          &ldquo;{item.quote}&rdquo;
                        </p>
                      </div>

                      <div className="mt-5">
                        <div className="flex items-center justify-center gap-1">
                          {Array.from({ length: item.rating }).map((_, sIdx) => (
                            <Star
                              key={sIdx}
                              className="h-4 w-4 fill-[#C89D54] text-[#C89D54]"
                            />
                          ))}
                        </div>

                        <div
                          className={`mx-auto my-4 h-px w-4/5 ${
                            isFeatured ? 'bg-white/15' : 'bg-[#C89D54]/25'
                          }`}
                        />

                        <div className="flex items-center justify-center gap-3.5">
                          <div
                            className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-full ${
                              isFeatured
                                ? 'border-2 border-[#C89D54]'
                                : 'border border-[#C89D54]/65'
                            }`}
                          >
                            <Image
                              src={item.image}
                              alt={item.image_alt}
                              fill
                              sizes="48px"
                              className="object-cover object-top"
                            />
                          </div>
                          <div className="text-left">
                            <p
                              className={`text-sm font-bold ${
                                isFeatured ? 'text-white' : 'text-[#1A1713]'
                              }`}
                            >
                              {item.author_name}
                            </p>
                            <p
                              className={`text-xs ${
                                isFeatured ? 'text-white/65' : 'text-[#6E675F]'
                              }`}
                            >
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
              </motion.div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="mt-6 flex items-center justify-center gap-2.5">
            {data.items.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(idx)}
                aria-label={item.author_name}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  idx === activeDot
                    ? 'scale-110 bg-[#C89D54]'
                    : 'bg-[#181715] hover:bg-[#C89D54]/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
