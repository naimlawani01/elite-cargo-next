import ContactPage from './ContactPage';

export function generateStaticParams() {
  return [
    { lang: 'fr' },
    { lang: 'en' }
  ];
}

// Composant serveur qui rend le composant client
export default function Page({ params }) {
  return <ContactPage params={params} />;
} 