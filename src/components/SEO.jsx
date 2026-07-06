import { useEffect } from 'react';

/**
 * Composant SEO pour gérer les meta tags dynamiques par page
 * Compatible avec React 19
 */
export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://elite-cargo.net/images/og-image.jpg',
  ogType = 'website',
  lang = 'fr'
}) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta tags à mettre à jour
    const metaTags = {
      'description': description,
      'keywords': keywords,
      'og:title': title,
      'og:description': description,
      'og:image': ogImage,
      'og:type': ogType,
      'og:url': canonical,
      'og:locale': lang === 'fr' ? 'fr_FR' : 'en_US',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': ogImage,
    };

    // Mettre à jour les meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      if (!content) return;

      // Chercher par name ou property
      let element = document.querySelector(`meta[name="${name}"]`) ||
                    document.querySelector(`meta[property="${name}"]`);

      if (element) {
        element.setAttribute('content', content);
      }
    });

    // Mettre à jour le canonical
    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      }

      // Mettre à jour les alternates hreflang pour CETTE page (fr / en / x-default)
      try {
        const url = new URL(canonical);
        const parts = url.pathname.split('/'); // ['', 'fr', 'services', ...]
        const withLang = (l) => {
          const p = [...parts];
          p[1] = l;
          return url.origin + p.join('/');
        };
        const setAlt = (hreflang, href) => {
          const el = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
          if (el) el.setAttribute('href', href);
        };
        setAlt('fr', withLang('fr'));
        setAlt('en', withLang('en'));
        setAlt('x-default', withLang('fr'));
      } catch { /* invalid URL */ }
    }

    // Mettre à jour la langue
    document.documentElement.lang = lang;

  }, [title, description, keywords, canonical, ogImage, ogType, lang]);

  return null;
}

