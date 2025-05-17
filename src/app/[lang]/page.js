import EliteCargoLandingPage from '../../components/EliteCargoLandingPage';
import Footer from '@/components/Footer';

export default function Page({ params: { lang } }) {
  return (
    <div>
      <EliteCargoLandingPage />
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { lang: 'fr' },
    { lang: 'en' }
  ];
} 