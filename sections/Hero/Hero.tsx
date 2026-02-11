import s from './Hero.module.css';
import Image from 'next/image';
import img from '../../assets/Hero_img.png';
import LinkBtn from '../../components/LinkBtn/LinkBtn';
import { Messages } from '../../messages/types';

interface IProps {
  messages: Messages['Hero'];
}

export default function Hero({ messages }: IProps) {
  return (
    <section className={s.section}>
      <div className={s.wrap}>
        <h2 className={s.meeting}>{messages.meeting}</h2>
        <h1 className={s.title}>Fullstack Web Developer</h1>
        <p className={s.subtitle}>React | Next.js | NestJS | Express | MongoDB | PostgreSQL</p>
        <div className={s.btn_wrap}>
          <LinkBtn text={messages.hireBtn} href="#hireMe" />
          <LinkBtn text={messages.projectsBtn} href="#projects" />
        </div>
      </div>
      <Image src={img} alt="Fullstack Web Developer img" height={400} className={s.img} />
    </section>
  );
}
