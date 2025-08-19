import { StaticImageData } from 'next/image';
import Image from 'next/image';
import s from './Projects.module.css';
import LinkBtn from '../LinkBtn/LinkBtn';

interface IProps {
  img: StaticImageData;
  title: string;
  description: string;
  liveHref: string;
  hubHref: string;
}

export default function ProjectsItem({ img, title, description, liveHref, hubHref }: IProps) {
  return (
    <li className={s.item}>
      <Image src={img} alt="Preview of project" className={s.img} />
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{description}</p>
      <div className={s.btn_wrap}>
        <LinkBtn href={liveHref} target="_blank" text="Live" />
        <LinkBtn href={hubHref} target="_blank" text="GitHub" />
      </div>
    </li>
  );
}
