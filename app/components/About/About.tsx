import s from './About.module.css';
import Image from 'next/image';
import img from '../../assets/hero.png';

export default function About() {
  return (
    <section className={s.section}>
      <Image src={img} alt="Fullstack Web Developer img" className={s.img} />

      <div className={s.wrap}>
        <h2>About Me</h2>
        <p className={s.description}>
          I’m Roman, a passionate Web Developer with a focus on building modern, fast, and
          user-friendly applications.
          <br /> With expertise in React, Next.js, and NestJS, I create seamless front-end
          experiences and robust back-end systems. <br />
          Beyond coding, I’m constantly exploring new technologies to stay ahead in the
          ever-evolving tech world. My goal is simple — to deliver clean, maintainable, and
          impactful digital solutions that make a difference.
        </p>
        <ul className={s.list}>
          <li className={s.item}>
            <h3 className={s.item_title}>3+</h3>
            <p className={s.item_subtitle}>Completed projects</p>
          </li>
          <li className={s.item}>
            <h3 className={s.item_title}>1+</h3>
            <p className={s.item_subtitle}>Year coding experience</p>
          </li>
          <li className={s.item}>
            <h3 className={s.item_title}>100%</h3>
            <p className={s.item_subtitle}>Client satisfaction</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
