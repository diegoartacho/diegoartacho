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
        <ul className="space-y-3">
          <li><a href="https://arxiv.org/abs/2512.01620" className="hover:underline">On the stability of Einstein metrics carrying a special twisted spinor</a> (2025)</li>
          <li><a href="https://doi.org/10.1016/j.jmaa.2025.130088" className="hover:underline">Killing Mean Curvature Solitons from Riemannian Submersions</a> (2026)</li>
          <li><a href="https://doi.org/10.25560/124245" className="hover:underline">Special spinors in generalised spin geometry</a> (2025)</li>
          <li><a href="https://doi.org/10.1142/S0129167X25500120" className="hover:underline">Invariant Spinors on Flag Manifolds</a> (2025)</li>
          <li><a href="https://doi.org/10.3842/SIGMA.2025.017" className="hover:underline">Generalised Spinʳ Spinors on Projective Spaces</a> (2025)</li>
          <li><a href="https://doi.org/10.1007/s00229-025-01617-y" className="hover:underline">Generalised Killing Spinors on Three-Dimensional Lie Groups</a> (2025)</li>
          <li><a href="https://doi.org/10.1016/j.difgeo.2025.102291" className="hover:underline">Generalised Spinʳ Structures on Homogeneous Spaces</a> (2025)</li>
          <li><a href="https://dx.doi.org/10.4310/AJM.260122040802" className="hover:underline">New Examples of Translating Solitons</a> (2025)</li>
        </ul>
      </section>

    </div>
  );
}
