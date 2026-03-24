import './globals.css';

export const metadata = {
  title: 'Diego Artacho',
  description: 'Postdoctoral researcher at KU Leuven',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <div className="min-h-screen flex flex-col lg:flex-row">

          <aside className="lg:w-72 w-full border-b lg:border-b-0 lg:border-r border-gray-200">
            <div className="max-w-sm mx-auto lg:mx-0 p-8 lg:sticky lg:top-0">

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
                <img
                  src="/foto.jpg"
                  alt="Diego Artacho"
                  className="rounded-full w-28 h-28 object-cover object-top"
                />

                <div>
                  <h1 className="text-xl font-semibold font-serif">
                    Diego Artacho
                  </h1>
                  <p className="text-sm text-gray-600 mt-1">
                    Postdoctoral researcher at KU Leuven
                  </p>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    diego (dot) artachodeobeso (at) kuleuven (dot) be
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm w-full pt-4">
                  <a href="/cv.pdf" target="_blank" className="hover:text-black text-gray-600">
                    📄 CV
                  </a>
                  <a href="https://orcid.org/0000-0003-2345-5043" target="_blank" className="hover:text-black text-gray-600">
                    🧬 ORCID
                  </a>
                  <a href="https://scholar.google.es/citations?user=TZccYM409X8C&hl=en" target="_blank" className="hover:text-black text-gray-600">
                    📚 Google Scholar
                  </a>
                  <a href="https://arxiv.org/search/math?searchtype=author&query=Artacho,+Diego" target="_blank" className="hover:text-black text-gray-600">
                    🧾 arXiv
                  </a>
                </div>

              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="max-w-3xl mx-auto px-6 py-12 lg:px-12">
              {children}
            </div>
          </main>

        </div>
      </body>
    </html>
  );
}
