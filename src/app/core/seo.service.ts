import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE } from '../content/site.content';
import { PageCopy } from '../content/site.model';

const HOME_TITLE = 'Germán Olivares — Mecánico oficial de rally raid · KTM · Dakar';
const HOME_DESCRIPTION =
  'Germán Olivares (Rafael Germán Olivares), mecánico oficial de rally raid en KTM. Ocho años en Honda y dos Dakar ganados junto a Kevin Benavides (2021 y 2023).';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  apply(key: string): void {
    const page = this.pageFor(key);
    const path = key === 'home' ? '/' : this.pathFor(key);
    const pageTitle = key === 'home' ? HOME_TITLE : `${page.title} · Germán Olivares`;
    const description = key === 'home' ? HOME_DESCRIPTION : page.description;
    const canonical = `${SITE.url}${path}`;

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:type', content: 'profile' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_AR' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.setCanonical(canonical);
    this.setJsonLd();
  }

  private pageFor(key: string): PageCopy {
    if (key === 'career') {
      return SITE.pages.career;
    }
    if (key === 'story') {
      return SITE.pages.story;
    }
    if (key === 'press') {
      return SITE.pages.press;
    }
    if (key === 'workshop') {
      return SITE.pages.workshop;
    }
    if (key === 'contact') {
      return SITE.pages.contact;
    }
    return {
      index: '01',
      kicker: 'Inicio',
      title: 'Germán Olivares',
      deck: SITE.heroDeck,
      description: HOME_DESCRIPTION,
    };
  }

  private pathFor(key: string): string {
    const paths: Record<string, string> = {
      career: '/trayectoria',
      story: '/historia',
      press: '/prensa',
      workshop: '/taller',
      contact: '/contacto',
    };
    return paths[key] ?? '/';
  }

  private setCanonical(url: string): void {
    const head = this.document.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setJsonLd(): void {
    const sameAs = [SITE.instagramUrl, SITE.linkedinUrl, SITE.brandUrl].filter((url) => url.length > 0);
    const data = {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: SITE.publicName,
        alternateName: SITE.alternateNames,
        jobTitle: SITE.jobTitle,
        description: SITE.boilerplate,
        url: SITE.url,
        knowsAbout: SITE.knowsAbout,
        sameAs,
        ...(SITE.portrait ? { image: `${SITE.url}${SITE.portrait}` } : {}),
        ...(SITE.email ? { email: SITE.email } : {}),
      },
    };

    let script = this.document.getElementById('ld-person');
    if (!script) {
      script = this.document.createElement('script');
      script.id = 'ld-person';
      script.setAttribute('type', 'application/ld+json');
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}
