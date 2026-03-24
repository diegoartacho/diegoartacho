export default function Home() {
  return (
    <div className="space-y-16">

      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4">About</h2>
        <p className="leading-7 text-gray-800 max-w-2xl">
          I am a postdoctoral researcher at the Geometry group in KU Leuven. My research explores the rich interplay between spin geometry, homogeneous spaces, and special spinors. Beyond research, I am committed to teaching and student mentoring. Aside from mathematics, I love reading, squash, and chess (although I am a terrible player).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4">Experience</h2>
        <p className="text-gray-800">
          <strong>Postdoctoral researcher</strong>, KU Leuven, Belgium (Nov 2025 – present)
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4">Education</h2>
        <div className="space-y-4 text-gray-800">
          <p>
            <strong>PhD in Mathematics</strong>, Imperial College London (2021–2025)<br/>
            Research in Differential Geometry under Marie-Amélie Lawn and Steven Sivek.<br/>
            Examined by Simon Donaldson and Simon Salamon.
          </p>
          <p><strong>MASt in Pure Mathematics</strong>, University of Cambridge (2020–2021)</p>
          <p><strong>BSc Mathematics</strong>, Autonomous University of Barcelona (2015–2020)</p>
          <p><strong>BSc Physics</strong>, Autonomous University of Barcelona (2015–2020)</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4">Publications</h2>
        <ul className="space-y-4">
          <li>
            <a href="https://arxiv.org/abs/2512.01620" className="hover:underline">
              On the stability of Einstein metrics carrying a special twisted spinor
            </a>
            <div className="text-sm text-gray-600">Preprint, 2025</div>
          </li>
          <li>
            <a href="https://doi.org/10.1016/j.jmaa.2025.130088" className="hover:underline">
              Killing Mean Curvature Solitons from Riemannian Submersions
            </a>
            <div className="text-sm text-gray-600">Journal of Mathematical Analysis and Applications, 2026</div>
          </li>
          <li>
            <a href="https://doi.org/10.25560/124245" className="hover:underline">
              Special spinors in generalised spin geometry
            </a>
            <div className="text-sm text-gray-600">PhD thesis, 2025</div>
          </li>
          <li>
            <a href="https://doi.org/10.1142/S0129167X25500120" className="hover:underline">
              Invariant Spinors on Flag Manifolds
            </a>
            <div className="text-sm text-gray-600">International Journal of Mathematics, 2025</div>
          </li>
          <li>
            <a href="https://doi.org/10.3842/SIGMA.2025.017" className="hover:underline">
              The Geometry of Generalised Spinʳ Spinors on Projective Spaces
            </a>
            <div className="text-sm text-gray-600">SIGMA, 2025</div>
          </li>
          <li>
            <a href="https://doi.org/10.1007/s00229-025-01617-y" className="hover:underline">
              Generalised Killing Spinors on Three-Dimensional Lie Groups
            </a>
            <div className="text-sm text-gray-600">Manuscripta Mathematica, 2025</div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4">Talks</h2>
        <ul className="space-y-2 text-gray-800">
          {/* You should paste your original talks list here */}
        </ul>
      </section>

    </div>
  );
}
