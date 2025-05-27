
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 py-12 max-w-3xl mx-auto">
      <Image
        src="/foto.jpg"
        alt="Portrait of Diego Artacho"
        width={200}
        height={200}
        className="rounded-full mb-6"
      />
      <h1 className="text-4xl font-serif font-semibold mb-2 text-center">
        Diego Artacho
      </h1>
      <p className="text-lg text-center mb-6">
        PhD student in Mathematics at Imperial College London
      </p>
      <div className="flex space-x-4 mb-8">
        <Link href="/cv.pdf" passHref>
          <a className="border px-4 py-2 rounded hover:bg-gray-100 transition">Download CV</a>
        </Link>
        <Link href="mailto:d.artacho21@imperial.ac.uk" passHref>
          <a className="border px-4 py-2 rounded hover:bg-gray-100 transition">Email</a>
        </Link>
      </div>

      <section className="w-full mb-12">
        <h2 className="text-2xl font-serif font-medium mb-4">About</h2>
        <p className="text-base leading-7">
          I am a fourth-year Mathematics PhD student at Imperial College London, working under
          the supervision of Marie-Amélie Lawn and Steven Sivek. My research lies at the intersection
          of spin geometry, homogeneous spaces, and special spinor fields. I am also passionate about
          teaching and mentoring students.
        </p>
      </section>

      <section className="w-full mb-12">
        <h2 className="text-2xl font-serif font-medium mb-4">Publications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="https://arxiv.org/abs/2501.12998" className="text-blue-600 hover:underline">
              Killing Mean Curvature Solitons from Riemannian Submersions
            </a> (preprint, 2025)
          </li>
          <li>
            <a href="https://www.worldscientific.com/doi/10.1142/S0129167X25500120" className="text-blue-600 hover:underline">
              Invariant Spinors on Flag Manifolds
            </a> (IJM, 2025)
          </li>
          <li>
            <a href="https://doi.org/10.3842/SIGMA.2025.017" className="text-blue-600 hover:underline">
              The Geometry of Generalised Spin<sup>r</sup> Spinors on Projective Spaces
            </a> (SIGMA, 2025)
          </li>
          <li>
            <a href="https://doi.org/10.1007/s00229-025-01617-y" className="text-blue-600 hover:underline">
              Generalised Killing Spinors on Three-Dimensional Lie Groups
            </a> (Manuscripta Mathematica, 2025)
          </li>
        </ul>
      </section>

      <section className="w-full mb-12">
        <h2 className="text-2xl font-serif font-medium mb-4">Talks</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Generalised Spin Structures, Bari, July 2025</li>
          <li>Quaternion-Kähler Manifolds, Marburg, February 2025</li>
          <li>Twisted Spin Structures, Marburg, November 2023</li>
          <li>Generalised Spin<sup>r</sup> Structures on Homogeneous Spaces, Banff, May 2023</li>
        </ul>
      </section>
    </main>
  );
}
