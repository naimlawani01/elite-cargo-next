'use client';

import React, { useEffect } from 'react';

export default function Head() {
  const GA_MEASUREMENT_ID = 'G-ZFVDK7CGLX';

  useEffect(() => {
    if (!window) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
      send_page_view: true,
    });

    const handleRouteChange = () => {
      gtag('event', 'page_view', {
        page_path: window.location.pathname,
        page_title: document.title,
      });
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <>
      {/* Meta additionnel non pris en charge par metadata */}
      <meta name="geo.region" content="GN" />
      <meta name="geo.placename" content="Conakry, Guinea" />
      <meta name="geo.position" content="9.575416;-13.620247" />
      <meta name="ICBM" content="9.6412, -13.5784" />
      <meta name="language" content="French" />
      <meta name="author" content="Elite Cargo" />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LogisticsCompany",
            name: "Elite Cargo",
            url: "https://elite-cargo.net/",
            logo: "https://elite-cargo.net/images/elite.svg",
            description:
              "Elite Cargo, société basée en Guinée, experte en fret aérien, maritime et terrestre, logistique, douane, déménagement international, import/export et transport en Afrique de l'Ouest.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Aéroport Ahmed Sékou Touré",
              addressLocality: "Conakry",
              addressCountry: "GN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "9.575416",
              longitude: "-13.620247",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+224 622 65 25 11",
              contactType: "customer service",
              areaServed: ["GN", "ML", "SN", "BJ", "CI"],
              availableLanguage: ["French", "English"],
            },
            sameAs: ["https://www.facebook.com/elitecargoconakry"],
          }),
        }}
      />
    </>
  );
}
