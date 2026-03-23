// app/layout.js
import './globals.css';

export const metadata = {
  title: 'DARK LABEL',
  description: 'Магазин мужской одежды',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
