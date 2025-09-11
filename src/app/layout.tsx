// app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { Metadata } from 'next';
import { websiteConfig } from '@/data/websiteConfig';

export const metadata: Metadata = {
  title: websiteConfig.title,
  description: websiteConfig.description,
  icons: {
    icon: websiteConfig.favicon, // favicon .ico hoặc .png
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
