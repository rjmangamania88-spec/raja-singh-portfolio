import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Raja Singh - Senior AI Video Editor',
  description: 'Creative video editor specializing in AI-generated content, cinematic trailers, and anime/fantasy edits. 6+ years of experience.',
  keywords: ['video editing', 'AI video', 'cinematic', 'motion graphics', 'film editor'],
  authors: [{ name: 'Raja Singh' }],
  openGraph: {
    title: 'Raja Singh - Senior AI Video Editor',
    description: 'Crafting cinematic stories through cutting-edge AI technology and meticulous video editing.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}
