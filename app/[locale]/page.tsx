import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import HireMeForm from '../components/HireMeForm/HireMeForm';
import ParallaxBackground from '../components/ParallaxBackground/ParallaxBackground';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services/Services';
import Skills from '../components/Skills/Skills';
import styles from './page.module.css';
import { Messages } from '../../messages/types';


interface IProps {
  messages: Messages;
}

export default function Home({ messages }: IProps) {
  return (
    <>
      <main className={styles.main}>
        <ParallaxBackground />
        <div className="container">
          <Hero messages={messages.Hero}/>
          <Projects messages={messages.Projects}/>
          <About messages={messages.About}/>
          <Skills messages={messages.Skills}/>
          <Services messages={messages.Services}/>
          <HireMeForm messages={messages.HireMe}/>
        </div>
      </main>
      <Footer messages={messages.Footer}/>
    </>
  );
}
