import s from './About.module.css';
import Image from 'next/image';
import img from '../../assets/About.png';
import { Messages } from '../../messages/types';

interface IProps {
  messages: Messages['About'];
}

export default function About({ messages }: IProps) {
  return (
    <section className={s.section}>
      <Image src={img} alt="Fullstack Web Developer img" className={s.img} />

      <div className={s.wrap}>
        <h2>{messages.title}</h2>
        <div className={s.description}>
          {messages.description.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <ul className={s.list}>
          {messages.items.map(item => (
            <li className={s.item} key={item.title}>
              <h3 className={s.item_title}>{item.title}</h3>
              <p className={s.item_subtitle}>{item.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
