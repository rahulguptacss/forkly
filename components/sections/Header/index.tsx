'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import type { HeaderData } from '../../types';

export default function Header({ data }: { data: HeaderData }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 80 || info.velocity.x > 300) {
      setMobileOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-[#14110E]/95 py-3 shadow-lg backdrop-blur-md'
            : 'bg-gradient-to-b from-black/70 via-black/35 to-transparent py-4'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="inline-flex h-11 items-center sm:h-12">
            <Image
              src={data.logo}
              alt={`${data.logo_text} - ${data.logo_subtext}`}
              width={240}
              height={80}
              priority
              className="-my-3 h-16 w-auto object-contain sm:h-[72px]"
            />
          </a>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
            {data.links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[13px] font-medium tracking-wide text-white/90 transition-colors hover:text-[#C89D54]"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={data.button_link}
              className="hidden rounded-[4px] bg-[#C89D54] px-5 py-2.5 text-xs font-semibold tracking-wider text-white transition-all hover:bg-[#B0863E] sm:inline-flex"
            >
              {data.button_text}
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label={data.menu_aria_label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/30 text-white transition-colors hover:border-[#C89D54] hover:text-[#C89D54] lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/65 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              drag="x"
              dragConstraints={{ left: 0, right: 320 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              className="fixed right-0 top-0 flex h-full w-72 flex-col justify-between border-l border-[#C89D54]/20 bg-[#14110E] p-6 text-white shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-serif text-lg font-bold tracking-[0.16em] text-[#C89D54]">
                    {data.logo_text}
                  </span>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    aria-label={data.close_aria_label}
                    className="rounded-full border border-white/15 p-1.5 text-white/80 hover:border-[#C89D54] hover:text-[#C89D54]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-3">
                  {data.links.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-md px-2 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-[#C89D54]"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-4">
                <a
                  href={data.button_link}
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-[4px] bg-[#C89D54] py-3 text-center text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#B0863E]"
                >
                  {data.button_text}
                </a>
                <p className="text-center text-[11px] text-white/45">
                  {data.drag_hint}
                </p>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

