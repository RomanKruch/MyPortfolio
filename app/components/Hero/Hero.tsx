import s from './Hero.module.css';
import Image from 'next/image';
import img from '../../assets/Hero_img.png';

export default function Hero() {
  return (
    <section className={s.section}>
      <div className={s.wrap}>
        <h2 className={s.meeting}>Hi, I’m Roman 👋</h2>
        <h1 className={s.title}>Fullstack Web Developer</h1>
        <p className={s.subtitle}>React | Next.js | NestJS | Express | MongoDB | PostgreSQL</p>
        <div className={s.btn_wrap}>
          <button className={`${s.btn} ${s.primary}`}>Hire Me</button>
          <button className={`${s.btn} ${s.secondary}`}>View Projects</button>
        </div>
      </div>
      <Image src={img} alt="Fullstack Web Developer img" height={400} />
    </section>
  );
}
