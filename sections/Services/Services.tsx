import s from './Services.module.css';
import ServicesItem from './ServicesItem';
import { Messages } from '../../messages/types';
import { services } from './data';

interface IProps {
  messages: Messages['Services'];
}

export default function Services({ messages }: IProps) {
  return (
    <section id="services">
      <h2>{messages.title}</h2>
      <ul className={s.list}>
        {services.map(item => {
          const text = messages.items[item.id];

          return (
            <ServicesItem
              Icon={item.icon}
              title={text.title}
              subtitle={text.subtitle}
              features={text.features}
              linkText={text.linkText}
              linkHref={item.linkHref}
              key={text.title}
            />
          );
        })}
      </ul>
    </section>
  );
}
