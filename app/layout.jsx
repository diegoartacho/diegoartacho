
import './globals.css';

export const metadata = {
  title: 'Diego Artacho',
  description: 'PhD student in Mathematics at Imperial College London',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen text-gray-800 bg-white">
        <aside className="w-full max-w-xs p-6 bg-gray-100 border-r lg:fixed lg:h-screen">
          <div className="flex flex-col items-center text-center space-y-4">
            <img src="/foto.jpg" alt="Diego Artacho" className="rounded-full w-32 h-32 object-cover" />
            <h1 className="text-xl font-bold font-serif">Diego Artacho</h1>
            <p className="text-sm">PhD student in Mathematics at Imperial College London</p>
            <div className="flex space-x-4 justify-center text-gray-600 text-xl">
              <a href="/cv.pdf" target="_blank" title="CV">📄</a>
              <a href="mailto:d.artacho21@imperial.ac.uk" title="Email">📧</a>
              <a href="https://orcid.org/0000-0003-2345-5043" target="_blank" title="ORCID">🧬</a>
              <a href="https://scholar.google.es/citations?user=TZccYM409X8C&hl=en" target="_blank" title="Google Scholar">📚</a>
              <a href="https://arxiv.org/search/math?searchtype=author&query=Artacho,+Diego" target="_blank" title="arXiv">🧾</a>
            </div>
            <div className="mt-4 text-sm">
              <h2 className="font-semibold mb-1">Languages</h2>
              <ul className="space-y-1">
                <li>English</li>
                <li>Spanish</li>
                <li>Catalan</li>
                <li>French</li>
                <li>Italian</li>
                <li>Latin</li>
              </ul>
            </div>
          </div>
        </aside>
        <main className="lg:ml-[18rem] p-6 w-full max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
