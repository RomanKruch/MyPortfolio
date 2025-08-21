import s from './Services.module.css';
import WebDevIcon from '../../assets/icons/WebDev.icon';
import BackApiIcon from '../../assets/icons/BackApi.icon';
import CommerceIcon from '../../assets/icons/Commerce.icon';
import WebSeoIcon from '../../assets/icons/WebSeo.icon';
import ServicesItem from './ServicesItem';

const services = [
  {
    title: 'Web Development',
    subtitle: 'Modern and responsive websites',
    features: ['Clean UI design', 'Responsive layouts', 'Optimized performance'],
    icon: WebDevIcon,
  },
  {
    title: 'Backend API',
    subtitle: 'Secure and scalable solutions',
    features: ['RESTful APIs', 'JWT authentication', 'Database integration'],
    icon: BackApiIcon,
  },
  {
    title: 'E-commerce Solutions',
    subtitle: 'Online stores with full functionality',
    features: ['Product management', 'Payment integration', 'Admin dashboard'],
    icon: CommerceIcon,
  },
  {
    title: 'Website Optimization',
    subtitle: 'Faster, SEO-friendly websites',
    features: ['SEO improvements', 'Performance tuning', 'Better UX'],
    icon: WebSeoIcon,
  },
];

export default function Services() {
  return (
    <section>
      <h2>Services</h2>
      <ul className={s.list}>
        {services.map(item => (
          <ServicesItem
            Icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            features={item.features}
            key={item.title}
          />
        ))}
      </ul>
    </section>
  );
}
