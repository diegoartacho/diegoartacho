import './globals.css';

export const metadata = {
  title: 'Diego Artacho',
  description: 'Postdoctoral researcher at KU Leuven',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <header className="mb-16 border-b pb-6">
            <h1 className="text-3xl font-serif font-semibold">Diego Artacho</h1>
            <p className="text-gray-600 mt-2">
              Postdoctoral researcher at KU Leuven
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
              <a href="/cv.pdf" target="_blank" className="hover:text-black">CV</a>
              <a href="https://orcid.org/0000-0003-2345-5043" target="_blank" className="hover:text-black">ORCID</a>
              <a href="https://scholar.google.es/citations?user=TZccYM409X8C&hl=en" target="_blank" className="hover:text-black">Google Scholar</a>
              <a href="https://arxiv.org/search/math?searchtype=author&query=Artacho,+Diego" target="_blank" className="hover:text-black">arXiv</a>
            </div>
          </header>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
