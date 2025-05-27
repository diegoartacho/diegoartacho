
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Diego Artacho',
  description: 'PhD student in Mathematics at Imperial College London',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
