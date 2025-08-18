import s from './Skills.module.css';

interface IProps {
  title: string;
  link: string;
  Icon: React.ElementType;
}

export default function SkillsItem({ Icon, link, title }: IProps) {
  return (
    <li className={s.item}>
      <a href={link} className={s.link} target="_blank">
        <Icon />
        <h4 className={s.item_title}>{title}</h4>
      </a>
    </li>
  );
}
