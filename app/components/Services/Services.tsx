import s from './Services.module.css';
import WebDevIcon from '../../assets/icons/WebDev.icon';
import BackApiIcon from '../../assets/icons/BackApi.icon';
import CommerceIcon from '../../assets/icons/Commerce.icon';
// import WebSeoIcon from '../../assets/icons/WebSeo.icon';
import ServicesItem from './ServicesItem';
import { ServicesMessages } from '../../../messages/types';

interface IProps {
  messages: ServicesMessages;
}

const services = [
  {
    icon: WebDevIcon,
    linkHref: '/',
  },
  {
    icon: BackApiIcon,
    linkHref: '/',
  },
  {
    icon: CommerceIcon,
    linkHref: '/',
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
    <section>
      <h2>{messages.title}</h2>
      <ul className={s.list}>
        {services.map((item, i) => (
          <ServicesItem
            Icon={item.icon}
            title={messages.items[i].title}
            subtitle={messages.items[i].subtitle}
            features={messages.items[i].features}
            linkText={messages.items[i].linkText}
            linkHref={item.linkHref}
            key={messages.items[i].title}
          />
        ))}
      </ul>
    </section>
  );
}
