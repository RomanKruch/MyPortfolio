import s from './Projects.module.css';
import ProjectsItem from './ProjectsItem';
import brudenPrev from '../../assets/bruden_prev.jpg';
import dreamHousePrev from '../../assets/dreamHouse_prev.jpg';
import travelPrev from '../../assets/travel_prev.jpg';

const projects = [
  {
    img: dreamHousePrev,
    title: 'Dream House',
    description: 'Descrrrrr..',
    liveHref: '/',
    hubHref: '/',
  },
  {
    img: brudenPrev,
    title: 'Bruden',
    description: 'Descrrrrr..',
    liveHref: '/',
    hubHref: '/',
  },
  {
    img: travelPrev,
    title: 'Travel',
    description: 'Descrrrrr..',
    liveHref: '/',
    hubHref: '/',
  },
];

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>

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
