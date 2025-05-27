
export default function Home() {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4">About</h2>
        <p className="leading-7">
          I am a fourth-year Mathematics PhD student at Imperial College London, working under the supervision
          of Marie-Amélie Lawn and Steven Sivek. My research lies at the intersection of spin geometry, homogeneous
          spaces, and special spinor fields. I am also passionate about teaching and mentoring students.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4">Publications</h2>
        <ul className="space-y-3 list-disc list-inside">
          <li><a href="https://arxiv.org/abs/2501.12998" className="text-blue-600 hover:underline">Killing Mean Curvature Solitons from Riemannian Submersions</a>, with Marie-Amélie Lawn and Miguel Ortega. (Preprint, 2025)</li>
          <li><a href="https://www.worldscientific.com/doi/10.1142/S0129167X25500120" className="text-blue-600 hover:underline">Invariant Spinors on Flag Manifolds</a>, with Uwe Semmelmann. (IJM, 2025)</li>
          <li><a href="https://doi.org/10.3842/SIGMA.2025.017" className="text-blue-600 hover:underline">The Geometry of Generalised Spinʳ Spinors on Projective Spaces</a>, with Jordan Hofmann. (SIGMA, 2025)</li>
          <li><a href="https://doi.org/10.1007/s00229-025-01617-y" className="text-blue-600 hover:underline">Generalised Killing Spinors on Three-Dimensional Lie Groups</a>. (Manuscripta Mathematica, 2025)</li>
          <li><a href="https://arxiv.org/abs/2303.05433" className="text-blue-600 hover:underline">Generalised Spinʳ Structures on Homogeneous Spaces</a>, with Marie-Amélie Lawn. (Preprint, 2023)</li>
          <li><a href="https://arxiv.org/abs/2211.14529" className="text-blue-600 hover:underline">Translating Solitons in Generalised Robertson–Walker Geometries</a>, with Marie-Amélie Lawn and Miguel Ortega. (Preprint, 2022)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4">Talks</h2>
        <ul className="space-y-3 list-disc list-inside">
          <li>Generalised Spin Structures – Bari, Italy (July 2025)</li>
          <li>A Generalisation of Spin Structures – UB, Barcelona (May 2025)</li>
          <li>Quaternion-Kähler Manifolds – Marburg, Germany (Feb 2025)</li>
          <li>Spin Geometry and Generalisations – UAB, Barcelona (Nov 2024)</li>
          <li>Characteristic Classes on Homogeneous Spaces – London, UK (June 2024)</li>
          <li>What is Spin Geometry? – KCL/UCL, London (Jan 2024)</li>
          <li>Twisted Spin Structures – Marburg, Germany (Nov 2023)</li>
          <li>Invariant Twisted Spinors on Homogeneous Spaces – Stuttgart, Germany (Oct 2023)</li>
          <li>Generalised Spinʳ Structures on Homogeneous Spaces – Banff, Canada (May 2023)</li>
          <li>Tauberian Operators on Banach Spaces – Tenerife, Spain (Mar 2020)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-semibold mb-4">Teaching</h2>
        <ul className="space-y-3 list-disc list-inside">
          <li>Associate Fellow of the Higher Education Academy (2024–)</li>
          <li>Supervised an undergraduate project on Killing spinors (2024–2025)</li>
          <li>Senior Graduate Teaching Assistant at Imperial College (2022–2025)</li>
          <li>Graduate Teaching Assistant at Imperial College (2021–2025)</li>
          <li>Undergraduate Teaching Assistant at the Autonomous University of Barcelona (2018)</li>
        </ul>
      </section>
    </div>
  );
}
