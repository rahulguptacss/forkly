import data from '../data/data.json';

export interface NavItem {
  name: string;
  href: string;
}

export type LinkType = NavItem;

export interface HeaderData {
  logo: string;
  logo_text: string;
  logo_subtext: string;
  links: LinkType[];
  button_text: string;
  button_link: string;
  menu_aria_label: string;
  close_aria_label: string;
  drawer_drag_title: string;
  drag_hint: string;
}

export interface SocialLinkItem {
  platform: string;
  href: string;
  icon: string;
}

export interface FooterData {
  logo: string;
  logo_text: string;
  logo_subtext: string;
  tagline: string;
  quick_links_title: string;
  quick_links: LinkType[];
  contact_title: string;
  address: string;
  phone: string;
  phone_href: string;
  email: string;
  email_href: string;
  social_title: string;
  social_links: SocialLinkItem[];
  copyright: string;
}

export interface BackToTopData {
  aria_label: string;
}

export interface HeroSectionData {
  background_image: string;
  background_alt: string;
  headline_line1: string;
  headline_line2: string;
  headline_highlight: string;
  cta_text: string;
  cta_link: string;
}

export interface SpecialtyItem {
  id: string;
  title: string;
  description: string;
  image: string;
  image_alt: string;
}

export interface SpecialtiesSectionData {
  eyebrow: string;
  heading_main: string;
  heading_highlight: string;
  items: SpecialtyItem[];
}

export interface AboutHighlight {
  id: string;
  icon: string;
  title: string;
}

export interface AboutSectionData {
  eyebrow: string;
  heading_main: string;
  heading_highlight: string;
  description: string;
  primary_image: string;
  primary_image_alt: string;
  secondary_image: string;
  secondary_image_alt: string;
  highlights: AboutHighlight[];
}

export interface MenuItem {
  id: string;
  name: string;
  badge?: string;
  description: string;
  price: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  featured_image: string;
  featured_alt: string;
  items: MenuItem[];
}

export interface MenuSectionData {
  eyebrow: string;
  heading_main: string;
  heading_highlight: string;
  default_category: string;
  categories: MenuCategory[];
}

export interface ChefMember {
  id: string;
  name: string;
  role: string;
  image: string;
  image_alt: string;
}

export interface ChefsSectionData {
  eyebrow: string;
  heading_main: string;
  heading_highlight: string;
  subtitle: string;
  members: ChefMember[];
}

export interface GalleryImageItem {
  src: string;
  alt: string;
}

export interface GalleryFeatureImage extends GalleryImageItem {
  overlay_title: string;
  overlay_subtitle: string;
}

export interface GallerySectionData {
  eyebrow: string;
  heading_main: string;
  heading_highlight: string;
  subtitle: string;
  close_aria_label: string;
  prev_aria_label: string;
  next_aria_label: string;
  left_top_image: GalleryImageItem;
  left_bottom_image: GalleryImageItem;
  center_top_image: GalleryImageItem;
  center_bottom_image: GalleryImageItem;
  feature_image: GalleryFeatureImage;
  right_top_image: GalleryImageItem;
  right_bottom_image: GalleryImageItem;
}

export interface ReservationHighlight {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ReservationFormConfig {
  name_placeholder: string;
  phone_placeholder: string;
  date_placeholder: string;
  time_placeholder: string;
  time_options: string[];
  guests_placeholder: string;
  guest_options: string[];
  requests_placeholder: string;
  submit_text: string;
  success_title: string;
  success_message: string;
  reset_text: string;
}

export interface ReservationSectionData {
  eyebrow: string;
  heading_main: string;
  heading_highlight: string;
  subtitle: string;
  highlights: ReservationHighlight[];
  form: ReservationFormConfig;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author_name: string;
  role: string;
  rating: number;
  image: string;
  image_alt: string;
}

export interface TestimonialsSectionData {
  eyebrow: string;
  heading_main: string;
  heading_highlight: string;
  subtitle: string;
  prev_aria_label: string;
  next_aria_label: string;
  items: TestimonialItem[];
}

export interface ContactInfoCard {
  id: string;
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface ContactMapData {
  embed_url: string;
  pin_label: string;
}

export interface ContactSectionData {
  eyebrow: string;
  heading_main: string;
  heading_highlight: string;
  subtitle: string;
  info_cards: ContactInfoCard[];
  map: ContactMapData;
}

export interface PageComponent {
  key: string;
  component: string;
}

export interface PageMeta {
  title: string;
  pageName: string;
  metadata: {
    title: string;
    description: string;
  };
  components: PageComponent[];
}

export interface SiteSections {
  hero: HeroSectionData;
  specialties: SpecialtiesSectionData;
  about: AboutSectionData;
  menu: MenuSectionData;
  chefs: ChefsSectionData;
  gallery: GallerySectionData;
  reservation: ReservationSectionData;
  testimonials: TestimonialsSectionData;
  contact: ContactSectionData;
}

export interface SitePages {
  home: PageMeta;
}

export interface TemplateComponents {
  pages: SitePages;
  sections: SiteSections;
}

export interface SiteData {
  common: {
    Header: HeaderData;
    Footer: FooterData;
    BackToTop: BackToTopData;
  };
  categories: {
    RestaurantDining: {
      templateComponents: {
        'template-1': TemplateComponents;
      };
    };
  };
}

export const siteJson: SiteData = data;
export const common = siteJson.common;
export const template = siteJson.categories.RestaurantDining.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;

