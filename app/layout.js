import '../styles/globals.css';  // CSS modülünü buradan import ediyoruz
import { CartProvider } from '../context/CartContext';

export const metadata = {
  title: 'E-Ticaret Sitesi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}