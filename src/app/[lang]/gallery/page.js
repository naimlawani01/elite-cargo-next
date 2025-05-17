import Gallery from '@/components/Gallery';

export function generateStaticParams() {
  return [
    { lang: 'fr' },
    { lang: 'en' }
  ];
}

export default function GalleryPage({ params: { lang } }) {
  return <Gallery />;
} 