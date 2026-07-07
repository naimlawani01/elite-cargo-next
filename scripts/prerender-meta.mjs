/**
 * Post-build: generate a static HTML file per route with route-specific meta
 * (title, description, canonical, Open Graph, Twitter, hreflang, <html lang>).
 *
 * Why: the app is a client-rendered SPA — per-page meta is set in JS, which
 * social crawlers (Facebook, WhatsApp, LinkedIn, X) don't execute. Baking the
 * meta into static HTML per route fixes link previews and per-page SEO without
 * needing a headless browser. Vercel serves these static files for each path,
 * falling back to the SPA rewrite for anything not prerendered.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, '..', 'dist');
const BASE = 'https://elite-cargo.net';

// Route meta. Keep titles ≤ ~60 chars, descriptions ≤ ~160.
const pages = {
  '': {
    fr: { t: "Elite Cargo | Fret Aérien & Logistique en Afrique de l'Ouest depuis 1997", d: "Elite Cargo, leader du fret aérien, maritime et terrestre depuis 1997. Transit, douane et déménagement international en Guinée, Mali, Bénin et Sierra Leone." },
    en: { t: 'Elite Cargo | Air Freight & Logistics Leader in West Africa since 1997', d: 'Elite Cargo, leader in air, sea and land freight since 1997. Customs, transit and international moving in Guinea, Mali, Benin and Sierra Leone.' },
  },
  services: {
    fr: { t: 'Nos Services | Fret Aérien & Maritime, Transit, GSA — Elite Cargo', d: "Fret aérien et maritime, transit et douane, représentation GSA/CSA, chaîne du froid, marchandises réglementées et déménagement à Conakry, Guinée. Elite Cargo depuis 1997." },
    en: { t: 'Our Services | Air & Sea Freight, Transit, GSA — Elite Cargo', d: 'Air and sea freight, transit and customs, GSA/CSA representation, cold chain, regulated cargo and moving in Conakry, Guinea. Elite Cargo since 1997.' },
  },
  about: {
    fr: { t: "À Propos | Elite Cargo — Transitaire & Logistique depuis 1997", d: "Depuis 1997, Elite Cargo est un groupe leader du fret aérien et de la logistique en Afrique de l'Ouest, avec des filiales en Guinée, Mali, Bénin et Sierra Leone." },
    en: { t: 'About | Elite Cargo — Freight Forwarder & Logistics since 1997', d: 'Since 1997, Elite Cargo is a leading air freight and logistics group in West Africa, with branches in Guinea, Mali, Benin and Sierra Leone.' },
  },
  gallery: {
    fr: { t: 'Galerie | Elite Cargo - Nos Installations & Opérations', d: "Découvrez les installations et opérations d'Elite Cargo en images : entrepôts de 2400m², équipe et équipements pour le fret aérien à Conakry." },
    en: { t: 'Gallery | Elite Cargo - Our Facilities & Operations', d: 'Discover Elite Cargo facilities and operations in pictures: 2400m² warehouses, team and equipment for air freight in Conakry.' },
  },
  contact: {
    fr: { t: 'Contact | Elite Cargo - Fret Aérien & Logistique Guinée', d: "Contactez Elite Cargo pour vos besoins en fret aérien, maritime et transit douane. Devis gratuit. Aéroport Gbessia, Conakry. Tél: +224 622 65 25 11" },
    en: { t: 'Contact | Elite Cargo - Air Freight & Logistics Guinea', d: 'Contact Elite Cargo for air freight, sea freight and customs. Free quote. Gbessia Airport, Conakry. Tel: +224 622 65 25 11' },
  },
  legal: {
    fr: { t: 'Mentions légales | Elite Cargo', d: "Mentions légales du site Elite Cargo — éditeur, hébergement et propriété intellectuelle." },
    en: { t: 'Legal notice | Elite Cargo', d: 'Legal notice for the Elite Cargo website — publisher, hosting and intellectual property.' },
  },
  privacy: {
    fr: { t: 'Politique de confidentialité | Elite Cargo', d: "Comment Elite Cargo collecte et protège vos données personnelles." },
    en: { t: 'Privacy policy | Elite Cargo', d: 'How Elite Cargo collects and protects your personal data.' },
  },
};

const esc = (str) => str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const template = readFileSync(join(dist, 'index.html'), 'utf8');

const setAttr = (html, re, value) => html.replace(re, (m, p1, _old, p3) => `${p1}${esc(value)}${p3}`);

let count = 0;
for (const [slug, langs] of Object.entries(pages)) {
  for (const lang of ['fr', 'en']) {
    const { t, d } = langs[lang];
    const path = slug ? `/${lang}/${slug}` : `/${lang}`;
    const url = BASE + path;
    const frUrl = BASE + (slug ? `/fr/${slug}` : '/fr');
    const enUrl = BASE + (slug ? `/en/${slug}` : '/en');

    let html = template;
    html = html.replace(/<html lang="[^"]*"/, `<html lang="${lang}"`);
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(t)}</title>`);
    html = setAttr(html, /(<meta name="title" content=")([^"]*)(")/, t);
    html = setAttr(html, /(<meta name="description" content=")([^"]*)(")/, d);
    html = setAttr(html, /(<link rel="canonical" href=")([^"]*)(")/, url);
    html = setAttr(html, /(<meta property="og:url" content=")([^"]*)(")/, url);
    html = setAttr(html, /(<meta property="og:title" content=")([^"]*)(")/, t);
    html = setAttr(html, /(<meta property="og:description" content=")([^"]*)(")/, d);
    html = setAttr(html, /(<meta property="og:locale" content=")([^"]*)(")/, lang === 'fr' ? 'fr_FR' : 'en_US');
    html = setAttr(html, /(<meta name="twitter:url" content=")([^"]*)(")/, url);
    html = setAttr(html, /(<meta name="twitter:title" content=")([^"]*)(")/, t);
    html = setAttr(html, /(<meta name="twitter:description" content=")([^"]*)(")/, d);
    html = setAttr(html, /(<link rel="alternate" hreflang="fr" href=")([^"]*)(")/, frUrl);
    html = setAttr(html, /(<link rel="alternate" hreflang="en" href=")([^"]*)(")/, enUrl);
    html = setAttr(html, /(<link rel="alternate" hreflang="x-default" href=")([^"]*)(")/, frUrl);

    const outDir = join(dist, path);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), html, 'utf8');
    count++;
  }
}
console.log(`prerender-meta: wrote ${count} static route HTML files`);
