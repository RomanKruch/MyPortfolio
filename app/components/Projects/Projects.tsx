import s from './Projects.module.css';
import ProjectsItem from './ProjectsItem';
import brudenPrev from '../../assets/bruden_prev.jpg';
import dreamHousePrev from '../../assets/dreamHouse_prev.jpg';
import travelPrev from '../../assets/travel_prev.jpg';

const projects = [
  {
    img: dreamHousePrev,
    title: 'Dream House',
    description:
      'Apartment Renovation Landing Page – modern design with dynamic elements, interactive gallery, and engaging features to attract clients.',
    liveHref: '/',
    hubHref: '/',
  },
  {
    img: brudenPrev,
    title: 'Bruden',
    description:
      'Clothing & Accessories E-commerce Store – fully functional online shop with user registration, personal accounts, and an easy-to-use admin panel.',
    liveHref: '/',
    hubHref: '/',
  },
  {
    img: travelPrev,
    title: 'Travel',
    description:
      'Tour Search Website – simple and user-friendly service for quickly finding exciting travel opportunities.',
    liveHref: '/',
    hubHref: '/',
  },
];

export default function Projects() {
  return (
    <section>
      <h2>My Projects</h2>

      <ul className={s.list}>
        {projects.map(item => (
          <ProjectsItem
            img={item.img}
            title={item.title}
            description={item.description}
            hubHref={item.hubHref}
            liveHref={item.liveHref}
            key={item.title}
          />
        ))}
      </ul>
    </section>
  );
}
