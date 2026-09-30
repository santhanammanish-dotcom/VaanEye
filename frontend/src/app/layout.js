import './globals.css';
import Navbar from '../components/Navbar/navbar';

export const metadata = {
  title: 'VaanEye',
  description: 'VaanEye - Geo-AI platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
      </body>
    </html>
  );
}