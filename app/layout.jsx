
import './globals.css';

export const metadata = {
  title: 'Diego Artacho',
  description: 'PhD student in Mathematics at Imperial College London',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
