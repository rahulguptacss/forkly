import React from 'react';
import type { Metadata } from 'next';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import Specialties from '../components/sections/Specialties';
import About from '../components/sections/About';
import Menu from '../components/sections/Menu';
import Chefs from '../components/sections/Chefs';
import Gallery from '../components/sections/Gallery';
import Reservation from '../components/sections/Reservation';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import BackToTop from '../components/ui/BackToTop';
import { common, pages, sections, type PageComponent } from '../components/types';

const pageData = pages.home;

export const metadata: Metadata = {
  title: pageData.metadata.title,
  description: pageData.metadata.description,
};

export default function Home() {
  const sectionMap: Record<string, React.ReactNode> = {
    Hero: sections.hero ? <Hero data={sections.hero} /> : null,
    Specialties: sections.specialties ? (
      <Specialties data={sections.specialties} />
    ) : null,
    About: sections.about ? <About data={sections.about} /> : null,
    Menu: sections.menu ? <Menu data={sections.menu} /> : null,
    Chefs: sections.chefs ? <Chefs data={sections.chefs} /> : null,
    Gallery: sections.gallery ? <Gallery data={sections.gallery} /> : null,
    Reservation: sections.reservation ? (
      <Reservation data={sections.reservation} />
    ) : null,
    Testimonials: sections.testimonials ? (
      <Testimonials data={sections.testimonials} />
    ) : null,
    Contact: sections.contact ? <Contact data={sections.contact} /> : null,
  };

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        {pageData.components.map((block: PageComponent) => (
          <React.Fragment key={block.key}>
            {sectionMap[block.component] ?? null}
          </React.Fragment>
        ))}
      </main>
      <Footer data={common.Footer} />
      <BackToTop data={common.BackToTop} />
    </div>
  );
}
