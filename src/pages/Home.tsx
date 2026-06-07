import Hero from '../components/Hero';
import About from '../components/About';
import Works from '../components/Works';
import Experience from '../components/Experience';

export default function Home() {
  return (
    <main>
      <Hero />
      <hr className="border-brand-black/5 max-w-[1480px] mx-auto" />
      <Works />
      <hr className="border-brand-black/5 max-w-[1480px] mx-auto" />
      <About />
      <hr className="border-brand-black/5 max-w-[1480px] mx-auto" />
      <Experience />
    </main>
  );
}
