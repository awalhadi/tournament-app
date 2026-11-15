import './globals.css';

export const metadata = {
  title: 'ITclan TT Arena — Table Tennis Tournament Manager',
  description: 'Spin-the-wheel team draw, groups, live standings and knockout bracket for table tennis tournaments.',
};

export const viewport = { themeColor: '#070b14', width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='13' cy='13' r='10' fill='%2310b981'/%3E%3Cpath d='M20.5 20.5 27 27' stroke='%23fbbf24' stroke-width='4' stroke-linecap='round'/%3E%3Ccircle cx='25.5' cy='7.5' r='3' fill='%23fff'/%3E%3C/svg%3E"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
