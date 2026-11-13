export interface NavItem {
  path: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export interface FichaRow {
  label: string;
  value: string;
}

export interface Chapter {
  id: string;
  index: string;
  title: string;
  summary: string;
  body: string[];
}

export interface TimelineItem {
  id: string;
  period: string;
  kicker: string;
  title: string;
  body: string;
}

export interface PressItem {
  id: string;
  outlet: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
}

export interface Principle {
  id: string;
  title: string;
  body: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface PageCopy {
  index: string;
  kicker: string;
  title: string;
  deck: string;
  description: string;
}

export interface SiteContent {
  url: string;
  publicName: string;
  fullName: string;
  alternateNames: string[];
  role: string;
  jobTitle: string;
  knowsAbout: string[];
  portrait: string;
  gallery: GalleryImage[];
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  linkedinUrl: string;
  brandName: string;
  brandUrl: string;
  credit: { name: string; url: string };
  nav: NavItem[];
  heroKicker: string;
  heroItalic: string;
  heroDeck: string;
  stats: Stat[];
  ficha: FichaRow[];
  chapters: Chapter[];
  timeline: TimelineItem[];
  press: PressItem[];
  principles: Principle[];
  boilerplate: string;
  pages: {
    career: PageCopy;
    story: PageCopy;
    press: PageCopy;
    workshop: PageCopy;
    contact: PageCopy;
  };
}
