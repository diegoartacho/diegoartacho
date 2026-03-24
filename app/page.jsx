export default function Home() {
  return (
    <div className="space-y-16">

      <section id="📖about">
        <h2 className="text-xl font-semibold font-serif mb-4 border-b pb-2">
          📖 About
        </h2>
        <p className="leading-7 text-gray-800">
          I am a postdoctoral researcher at the Geometry group in KU Leuven. My research explores the rich interplay between spin geometry, homogeneous spaces, and special spinors. Beyond research, I am committed to teaching and student mentoring. Aside from mathematics, I love reading, squash, and chess (although I am a terrible player).
        </p>
      </section>

      <section id="💼experience">
        <h2 className="text-xl font-semibold font-serif mb-4 border-b pb-2">
          💼 Experience
        </h2>
        <ul className="space-y-2 list-disc list-inside text-gray-800">
          <li>
            <strong>Postdoctoral researcher</strong>, KU Leuven, Belgium (Nov 2025 – present)
          </li>
        </ul>
      </section>

      <section id="🎓education">
        <h2 className="text-xl font-semibold font-serif mb-4 border-b pb-2">
          🎓 Education
        </h2>
        <ul className="space-y-4 list-disc list-inside text-gray-800">
          <li>
            <strong>PhD in Mathematics</strong>, Imperial College London, UK (Oct 2021 – Oct 2025)
            <br />
            Research in Differential Geometry under the supervision of Marie-Amélie Lawn and Steven Sivek.
            <br />
            Thesis examined by Simon Donaldson and Simon Salamon.
          </li>
          <li>
            <strong>MASt in Pure Mathematics (Part III)</strong>, University of Cambridge, UK (Sept 2020 – June 2021)
          </li>
          <li>
            <strong>Bachelor's Degree in Mathematics</strong>, Autonomous University of Barcelona, Spain (Sept 2015 – June 2020)
          </li>
          <li>
            <strong>Bachelor's Degree in Physics</strong>, Autonomous University of Barcelona, Spain (Sept 2015 – June 2020)
          </li>
        </ul>
      </section>

      <section id="📚publications">
        <h2 className="text-xl font-semibold font-serif mb-4 border-b pb-2">
          📚 Publications
        </h2>
        <ul className="space-y-3 list-disc list-inside">
          <li><a href="https://arxiv.org/abs/2512.01620" className="text-blue-700 hover:underline">On the stability of Einstein metrics carrying a special twisted spinor</a>. (Preprint, 2025)</li>
          <li><a href="https://doi.org/10.1016/j.jmaa.2025.130088" className="text-blue-700 hover:underline">Killing Mean Curvature Solitons from Riemannian Submersions</a>, with Marie-Amélie Lawn and Miguel Ortega. (Journal of Mathematical Analysis and Applications, 2026)</li>
          <li><a href="https://doi.org/10.25560/124245" className="text-blue-700 hover:underline">Special spinors in generalised spin geometry</a>. (PhD thesis, 2025)</li>
          <li><a href="https://doi.org/10.1142/S0129167X25500120" className="text-blue-700 hover:underline">Invariant Spinors on Flag Manifolds</a>, with Uwe Semmelmann. (International Journal of Mathematics, 2025)</li>
          <li><a href="https://doi.org/10.3842/SIGMA.2025.017" className="text-blue-700 hover:underline">The Geometry of Generalised Spinʳ Spinors on Projective Spaces</a>, with Jordan Hofmann. (SIGMA, 2025)</li>
          <li><a href="https://doi.org/10.1007/s00229-025-01617-y" className="text-blue-700 hover:underline">Generalised Killing Spinors on Three-Dimensional Lie Groups</a>. (Manuscripta Mathematica, 2025)</li>
          <li><a href="https://doi.org/10.1016/j.difgeo.2025.102291" className="text-blue-700 hover:underline">Generalised Spinʳ Structures on Homogeneous Spaces</a>, with Marie-Amélie Lawn. (Differential Geometry and its Applications, 2025)</li>
          <li><a href="https://dx.doi.org/10.4310/AJM.260122040802" className="text-blue-700 hover:underline">New Examples of Translating Solitons in Generalised Robertson-Walker Geometries</a>, with Marie-Amélie Lawn and Miguel Ortega. (Asian Journal of Mathematics, 2025)</li>
        </ul>
      </section>

      <section id="🎤talks">
        <h2 className="text-xl font-semibold font-serif mb-4 border-b pb-2">
          🎤 Talks
        </h2>
        <ul className="space-y-3 list-disc list-inside">
        </ul>
      </section>

    </div>
  );
}
