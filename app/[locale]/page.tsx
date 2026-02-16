import About from '../../sections/About/About';
import Footer from '../../components/Footer/Footer';
import Hero from '../../sections/Hero/Hero';
import HireMeForm from '../../sections/HireMeForm/HireMeForm';
import Projects from '../../sections/Projects/Projects';
import Services from '../../sections/Services/Services';
import Skills from '../../sections/Skills/Skills';
import styles from './page.module.css';
import { Messages } from '../../messages/types';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';

interface IProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: IProps) {
  const { locale } = await params;

  const messages: Messages = (await import(`../../messages/${locale}.json`)).default;
  
  return (
    <>
      <LanguageSwitcher />
      <main className={styles.main}>
        <div className="container">
          <Hero messages={messages.Hero} />
          <Projects messages={messages.Projects} />
          <About messages={messages.About} />
          <Skills messages={messages.Skills} />
          <Services messages={messages.Services} />
          <HireMeForm messages={messages.HireMe} />
        </div>
      </main>
      <Footer messages={messages.Footer} />
    </>
  );
}
