import type { Metadata } from 'next';
import NotFoundBody from '@/components/NotFoundBody';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundBody />;
}