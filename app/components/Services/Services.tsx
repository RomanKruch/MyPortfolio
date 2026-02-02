import s from './Services.module.css';
import WebDevIcon from '../../assets/icons/WebDev.icon';
import BackApiIcon from '../../assets/icons/BackApi.icon';
import CommerceIcon from '../../assets/icons/Commerce.icon';
// import WebSeoIcon from '../../assets/icons/WebSeo.icon';
import ServicesItem from './ServicesItem';
import { Messages, ServicesItemsKeys } from '../../../messages/types';
import { JSX } from 'react';

interface IProps {
  messages: Messages['Services'];
}

const services: {
  id: ServicesItemsKeys;
  icon: () => JSX.Element;
  linkHref: string;
}[] = [
  {
    id: 'webDev',
    icon: WebDevIcon,
    linkHref: '#hireMe',
  },
  {
    id: 'backApi',
    icon: BackApiIcon,
    linkHref: '#hireMe',
  },
  {
    id: 'commerce',
    icon: CommerceIcon,
    linkHref: '#hireMe',
  },
  // {
  //   title: 'Website Optimization',
  //   subtitle: 'Faster, SEO-friendly websites',
  //   features: ['SEO improvements', 'Performance tuning', 'Better UX'],
  //   icon: WebSeoIcon,
  // },
];

export default function Services({ messages }: IProps) {
  return (
    <section id='services'>
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
