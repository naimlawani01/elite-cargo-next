import EliteCargoLandingPage from '../../components/EliteCargoLandingPage';

export default function Page({ params: { lang } }) {
  return <EliteCargoLandingPage />;
}

export async function generateStaticParams() {
  return [
    { lang: 'fr' },
    { lang: 'en' }
  ];
} 