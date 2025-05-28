
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Diego Artacho',
  description: 'PhD student in Mathematics at Imperial College London',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen text-gray-800 bg-white">
        <aside className="w-full lg:w-64 p-6 bg-gray-100 border-r lg:fixed lg:h-screen overflow-y-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <img src="/foto.jpg" alt="Diego Artacho" className="rounded-full w-28 h-28 object-cover" />
            <h1 className="text-lg font-bold font-serif">Diego Artacho</h1>
            <p className="text-sm text-gray-700">PhD student in Mathematics at Imperial College London</p>
            <p className="text-xs text-gray-500">d (dot) artacho21 (at) imperial (dot) ac (dot) uk</p>
            <div className="mt-6 text-left w-full text-sm space-y-2">
              <h2 className="font-semibold text-gray-800 mb-1 border-b pb-1">Contents</h2>
              <ul className="space-y-1 pl-1 list-disc list-inside text-gray-700">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/education">Education</Link></li>
                <li><Link href="/publications">Publications</Link></li>
                <li><Link href="/talks">Talks</Link></li>
                <li><Link href="/teaching">Teaching</Link></li>
                <li><Link href="/languages">Languages</Link></li>
              </ul>
            </div>
          </div>
        </aside>
        <main className="lg:ml-64 p-6 w-full max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
