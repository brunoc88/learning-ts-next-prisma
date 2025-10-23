// app/layout.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Next 13 Intro',
  description: 'Proyecto con Navbar y Footer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', background: '#f0f0f0' }}>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main style={{ padding: '2rem' }}>
          {children}
        </main>

        <footer style={{ padding: '1rem', background: '#f0f0f0', textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} Mi Proyecto Next 13
        </footer>
      </body>
    </html>
  );
}
