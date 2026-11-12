'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  Clock,
  ConciergeBell,
  MessageCircleMore,
  Phone,
  User,
  Users,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../../ui/SectionHeading';
import type { ReservationSectionData } from '../../types';

const ICON_MAP = {
  CalendarClock,
  Users,
  ConciergeBell,
};

export default function Reservation({ data }: { data: ReservationSectionData }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [dateType, setDateType] = useState<'text' | 'date'>('text');
  const [time, setTime] = useState('');
  const [timeOpen, setTimeOpen] = useState(false);
  const [guests, setGuests] = useState('');
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [requests, setRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !date.trim() || !time || !guests) {
      return;
    }
    setSubmitted(true);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setDate('');
    setDateType('text');
    setTime('');
    setGuests('');
    setRequests('');
    setSubmitted(false);
  };

  return (
    <section id="reservation" className="bg-[#FAF8F5] py-11 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <SectionHeading
              eyebrow={data.eyebrow}
              headingMain={data.heading_main}
              headingHighlight={data.heading_highlight}
              subtitle={data.subtitle}
              align="left"
            />

            <div className="mt-8 space-y-6">
              {data.highlights.map((item, idx) => {
                const Icon =
                  ICON_MAP[item.icon as keyof typeof ICON_MAP] ??
                  CalendarClock;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4"
                  >
                    <Icon
                      className="h-7 w-7 shrink-0 text-[#B88E4A]"
                      strokeWidth={1.5}
                    />
                    <div
                      aria-hidden="true"
                      className="h-10 w-px shrink-0 bg-[#C89D54]/50"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-[#1A1713] sm:text-[15px]">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#5F5850]">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="rounded-[4px] border border-[#EAE2D6] bg-white p-6 shadow-[0_10px_30px_rgba(26,23,19,0.04)] sm:p-7 lg:col-span-7"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[300px] flex-col items-center justify-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C89D54]/15 text-[#C89D54]">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-serif text-2xl font-bold text-[#1A1713]">
                  {data.form.success_title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-[#5F5850]">
                  {data.form.success_message}
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-6 rounded-[3px] bg-[#1E1D1B] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#C89D54]"
                >
                  {data.form.reset_text}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="relative">
                    <User
                      className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4E4841]"
                      strokeWidth={1.6}
                    />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={data.form.name_placeholder}
                      className="w-full rounded-[3px] border border-[#E5DDD1] bg-white py-3 pl-10 pr-4 text-xs text-[#1A1713] placeholder:text-[#5F5850] focus:border-[#C89D54] focus:outline-none sm:text-[13px]"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <Phone
                      className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4E4841]"
                      strokeWidth={1.6}
                    />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={data.form.phone_placeholder}
                      className="w-full rounded-[3px] border border-[#E5DDD1] bg-white py-3 pl-10 pr-4 text-xs text-[#1A1713] placeholder:text-[#5F5850] focus:border-[#C89D54] focus:outline-none sm:text-[13px]"
                    />
                  </div>

                  {/* Date */}
                  <div className="relative">
                    <Calendar
                      className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4E4841]"
                      strokeWidth={1.6}
                    />
                    <input
                      type={dateType}
                      required
                      value={date}
                      onFocus={() => setDateType('date')}
                      onBlur={() => {
                        if (!date) setDateType('text');
                      }}
                      onChange={(e) => setDate(e.target.value)}
                      placeholder={data.form.date_placeholder}
                      aria-label={data.form.date_placeholder}
                      className="w-full rounded-[3px] border border-[#E5DDD1] bg-white py-3 pl-10 pr-4 text-xs text-[#1A1713] placeholder:text-[#5F5850] focus:border-[#C89D54] focus:outline-none sm:text-[13px]"
                    />
                  </div>

                  {/* Time Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setTimeOpen((o) => !o);
                        setGuestsOpen(false);
                      }}
                      className="flex w-full items-center justify-between rounded-[3px] border border-[#E5DDD1] bg-white py-3 pl-10 pr-3.5 text-left text-xs transition-colors focus:border-[#C89D54] focus:outline-none sm:text-[13px]"
                    >
                      <Clock
                        className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4E4841]"
                        strokeWidth={1.6}
                      />
                      <span className={time ? 'text-[#1A1713]' : 'text-[#5F5850]'}>
                        {time || data.form.time_placeholder}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-[#4E4841] transition-transform duration-200 ${
                          timeOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {timeOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.16 }}
                          className="absolute z-30 mt-1.5 max-h-48 w-full overflow-y-auto rounded-[3px] border border-[#EAE2D6] bg-white py-1 shadow-lg"
                        >
                          {data.form.time_options.map((slot) => (
                            <li key={slot}>
                              <button
                                type="button"
                                onClick={() => {
                                  setTime(slot);
                                  setTimeOpen(false);
                                }}
                                className={`block w-full px-4 py-2 text-left text-xs transition-colors sm:text-[13px] ${
                                  time === slot
                                    ? 'bg-[#C89D54]/15 font-semibold text-[#9B7536]'
                                    : 'text-[#1A1713] hover:bg-[#FAF8F5]'
                                }`}
                              >
                                {slot}
                              </button>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* No. of Guests Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setGuestsOpen((o) => !o);
                      setTimeOpen(false);
                    }}
                    className="flex w-full items-center justify-between rounded-[3px] border border-[#E5DDD1] bg-white py-3 pl-10 pr-3.5 text-left text-xs transition-colors focus:border-[#C89D54] focus:outline-none sm:text-[13px]"
                  >
                    <Users
                      className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4E4841]"
                      strokeWidth={1.6}
                    />
                    <span className={guests ? 'text-[#1A1713]' : 'text-[#5F5850]'}>
                      {guests || data.form.guests_placeholder}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#4E4841] transition-transform duration-200 ${
                        guestsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {guestsOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.16 }}
                        className="absolute z-20 mt-1.5 w-full overflow-hidden rounded-[3px] border border-[#EAE2D6] bg-white py-1 shadow-lg"
                      >
                        {data.form.guest_options.map((opt) => (
                          <li key={opt}>
                            <button
                              type="button"
                              onClick={() => {
                                setGuests(opt);
                                setGuestsOpen(false);
                              }}
                              className={`block w-full px-4 py-2 text-left text-xs transition-colors sm:text-[13px] ${
                                guests === opt
                                  ? 'bg-[#C89D54]/15 font-semibold text-[#9B7536]'
                                  : 'text-[#1A1713] hover:bg-[#FAF8F5]'
                              }`}
                            >
                              {opt}
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* Special Request */}
                <div className="relative">
                  <MessageCircleMore
                    className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-[#4E4841]"
                    strokeWidth={1.6}
                  />
                  <textarea
                    rows={3}
                    value={requests}
                    onChange={(e) => setRequests(e.target.value)}
                    placeholder={data.form.requests_placeholder}
                    className="w-full rounded-[3px] border border-[#E5DDD1] bg-white py-3 pl-10 pr-4 text-xs text-[#1A1713] placeholder:text-[#5F5850] focus:border-[#C89D54] focus:outline-none sm:text-[13px]"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[3px] bg-[#1E1D1B] py-3.5 text-xs font-semibold tracking-wider text-white transition-colors hover:bg-[#C89D54] sm:text-[13px]"
                >
                  <span>{data.form.submit_text}</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
