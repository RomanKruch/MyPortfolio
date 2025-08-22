import About from './components/About/About';
import Hero from './components/Hero/Hero';
import HireMeForm from './components/HireMeForm/HireMeForm';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <HireMeForm />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
}
