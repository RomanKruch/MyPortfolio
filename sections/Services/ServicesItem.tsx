import LinkBtn from '../../components/LinkBtn/LinkBtn';
import s from './Services.module.css';

interface IProps {
  Icon: React.ElementType;
  title: string;
  subtitle: string;
  features: string[];
  linkText: string;
  linkHref: string;
}

export default function ServicesItem({ Icon, title, subtitle, features, linkText, linkHref }: IProps) {
  return (
    <li className={s.item}>
      <h3 className={s.item_title}>
        <Icon /> {title}
      </h3>
      <p className={s.item_subtitle}>{subtitle}</p>
      <ul className={s.item_list}>
        {features.map(item => (
          <li className={s.item_feature} key={item}>
            {item}
          </li>
        ))}
      </ul>

      <LinkBtn text={linkText} href={linkHref} className={s.item_btn} />
    </li>
  );
}
