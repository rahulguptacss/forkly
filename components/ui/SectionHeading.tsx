import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow?: string;
  headingMain: string;
  headingHighlight: string;
  subtitle?: string;
  showOrnament?: boolean;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  eyebrow,
  headingMain,
  headingHighlight,
  subtitle,
  showOrnament = false,
  align = 'center',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={isCenter ? 'mx-auto max-w-2xl text-center' : 'text-left'}>
      {eyebrow && (
        <div
          className={`mb-2.5 flex items-center gap-3 ${
            isCenter ? 'justify-center' : 'justify-start'
          }`}
        >
          <span className="h-px w-8 bg-[#C89D54]/60" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8E6F3E]">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-[#C89D54]/60" />
        </div>
      )}

      <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1A1713] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
        {headingMain}{' '}
        <span className="italic text-[#C89D54]">{headingHighlight}</span>
      </h2>

      {showOrnament && (
        <div
          className={`mt-3 flex items-center gap-3 ${
            isCenter ? 'justify-center' : 'justify-start'
          }`}
        >
          <span className="h-px w-10 bg-[#C89D54]/45" />
          <UtensilsCrossed className="h-3.5 w-3.5 text-[#C89D54]" />
          <span className="h-px w-10 bg-[#C89D54]/45" />
        </div>
      )}

      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-[#6E675F] sm:text-[15px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

