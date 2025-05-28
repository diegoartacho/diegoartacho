
import './globals.css';

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
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 mt-4">
              <a href="/cv.pdf" target="_blank" className="flex flex-col items-center" title="CV">
                <span className="text-xl">📄</span><span>CV</span>
              </a>
              <a href="https://orcid.org/0000-0003-2345-5043" target="_blank" className="flex flex-col items-center" title="ORCID">
                <span className="text-xl">🧬</span><span>ORCID</span>
              </a>
              <a href="https://scholar.google.es/citations?user=TZccYM409X8C&hl=en" target="_blank" className="flex flex-col items-center" title="Google Scholar">
                <span className="text-xl">📚</span><span>Google Scholar</span>
              </a>
              <a href="https://arxiv.org/search/math?searchtype=author&query=Artacho,+Diego" target="_blank" className="flex flex-col items-center" title="arXiv">
                <span className="text-xl">🧾</span><span>arXiv</span>
              </a>
            
</div>
          </div>
        </aside>
        <main className="lg:ml-64 p-6 w-full max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
