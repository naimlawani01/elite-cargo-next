import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import PageIntro from '../components/PageIntro';
import Reveal from '../components/Reveal';

/**
 * Legal + privacy pages. `doc` = 'legal' | 'privacy'. Content is bilingual.
 * Note: RCCM/registration numbers are placeholders — replace with the company's
 * real figures.
 */
export default function LegalPage({ doc = 'legal' }) {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = ['fr', 'en'].includes(lang) ? lang : 'fr';
  const isFr = currentLang === 'fr';

  useEffect(() => {
    if (['fr', 'en'].includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    }
  }, [lang, i18n]);

  const content = {
    legal: {
      slug: 'legal',
      label: isFr ? 'Mentions légales' : 'Legal notice',
      title: isFr ? 'Mentions légales' : 'Legal notice',
      seo: {
        fr: { title: 'Mentions légales | Elite Cargo', description: "Mentions légales du site Elite Cargo — éditeur, hébergement et propriété intellectuelle." },
        en: { title: 'Legal notice | Elite Cargo', description: 'Legal notice for the Elite Cargo website — publisher, hosting and intellectual property.' },
      },
      sections: isFr
        ? [
            { h: 'Éditeur du site', p: ["Elite Cargo — Transport & Logistique", 'Aérogare de fret, Aéroport de Gbessia, Conakry, République de Guinée', 'Téléphone : +224 622 65 25 11', 'Email : info@elite-cargo.net', 'Directeur de la publication : LAWANI Aminou'] },
            { h: 'Hébergement', p: ['Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.'] },
            { h: 'Propriété intellectuelle', p: ["L'ensemble des contenus (textes, images, logo, charte graphique) présents sur ce site sont la propriété d'Elite Cargo, sauf mention contraire. Toute reproduction sans autorisation est interdite."] },
            { h: 'Crédits', p: ['Conception et développement : IMRANE TECH.'] },
          ]
        : [
            { h: 'Site publisher', p: ['Elite Cargo — Transport & Logistics', 'Cargo terminal, Gbessia Airport, Conakry, Republic of Guinea', 'Phone: +224 622 65 25 11', 'Email: info@elite-cargo.net', 'Publication director: LAWANI Aminou'] },
            { h: 'Hosting', p: ['This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.'] },
            { h: 'Intellectual property', p: ['All content (text, images, logo, visual identity) on this site is the property of Elite Cargo unless otherwise stated. Any reproduction without permission is prohibited.'] },
            { h: 'Credits', p: ['Design and development: IMRANE TECH.'] },
          ],
    },
    privacy: {
      slug: 'privacy',
      label: isFr ? 'Confidentialité' : 'Privacy',
      title: isFr ? 'Politique de confidentialité' : 'Privacy policy',
      seo: {
        fr: { title: 'Politique de confidentialité | Elite Cargo', description: "Comment Elite Cargo collecte et protège vos données personnelles." },
        en: { title: 'Privacy policy | Elite Cargo', description: 'How Elite Cargo collects and protects your personal data.' },
      },
      sections: isFr
        ? [
            { h: 'Données que nous collectons', p: ["Via notre formulaire de contact, nous collectons votre nom, votre adresse email, l'objet et le contenu de votre message. Ces données sont transmises par le service EmailJS uniquement pour traiter votre demande."] },
            { h: 'Finalité', p: ['Vos données sont utilisées exclusivement pour répondre à vos demandes de devis ou d\'information. Elles ne sont jamais vendues ni cédées à des tiers à des fins commerciales.'] },
            { h: 'Mesure d\'audience', p: ["Nous utilisons Google Analytics pour comprendre l'usage du site. Ces mesures ne sont activées qu'après votre consentement via la bannière de cookies."] },
            { h: 'Vos droits', p: ["Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer, écrivez-nous à info@elite-cargo.net."] },
            { h: 'Cookies', p: ['Le site n\'utilise que des cookies de mesure d\'audience, soumis à votre consentement. Vous pouvez le retirer à tout moment.'] },
          ]
        : [
            { h: 'Data we collect', p: ['Through our contact form we collect your name, email address, subject and message. This data is transmitted via the EmailJS service solely to handle your request.'] },
            { h: 'Purpose', p: ['Your data is used exclusively to respond to your quote or information requests. It is never sold or shared with third parties for commercial purposes.'] },
            { h: 'Analytics', p: ['We use Google Analytics to understand site usage. Analytics are only enabled after your consent via the cookie banner.'] },
            { h: 'Your rights', p: ['In accordance with data protection rules, you have the right to access, correct and delete your data. To exercise it, write to us at info@elite-cargo.net.'] },
            { h: 'Cookies', p: ['The site only uses analytics cookies, subject to your consent, which you can withdraw at any time.'] },
          ],
    },
  };

  const d = content[doc];
  const s = d.seo[currentLang] || d.seo.fr;

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink font-body pt-[5.5rem]">
      <SEO title={s.title} description={s.description} keywords="" canonical={`https://elite-cargo.net/${currentLang}/${d.slug}`} lang={currentLang} />
      <Header />

      <PageIntro label={d.label} title={d.title} />

      <main className="flex-grow pb-[clamp(4rem,10vw,7rem)]">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="pt-8 border-t border-ink/10 flex flex-col gap-10">
            {d.sections.map((sec, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <h2 className="font-display font-semibold tracking-tight text-xl mb-3">{sec.h}</h2>
                <div className="flex flex-col gap-1.5 text-ink-soft leading-relaxed">
                  {sec.p.map((line, j) => <p key={j}>{line}</p>)}
                </div>
              </Reveal>
            ))}
            <p className="mono-meta text-ink-soft/60 pt-4 border-t border-ink/10">
              {isFr ? 'Dernière mise à jour : juillet 2026' : 'Last updated: July 2026'}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
