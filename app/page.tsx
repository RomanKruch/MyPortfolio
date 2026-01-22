import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import HireMeForm from './components/HireMeForm/HireMeForm';
import ParallaxBackground from './components/ParallaxBackground/ParallaxBackground';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <ParallaxBackground />
        <div className="container">
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Services />
          <HireMeForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
