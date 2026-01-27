import s from './Projects.module.css';
import ProjectsItem from './ProjectsItem';
import brudenPrev from '../../assets/bruden_prev.jpg';
import dreamHousePrev from '../../assets/dreamHouse_prev.jpg';
import travelPrev from '../../assets/travel_prev.jpg';
import { ProjectsMessages } from '../../../messages/types';

interface IProps {
  messages: ProjectsMessages;
}

const projects = [
  {
    img: dreamHousePrev,
    liveHref: '/',
    hubHref: '/',
  },
  {
    img: brudenPrev,
    liveHref: '/',
    hubHref: '/',
  },
  {
    img: travelPrev,
    liveHref: '/',
    hubHref: '/',
  },
];

export default function Projects({ messages }: IProps) {
  return (
    <section>
      <h2>{messages.title}</h2>

      <ul className={s.list}>
        {projects.map((item, i) => (
          <ProjectsItem
            img={item.img}
            title={messages.projects[i].title}
            description={messages.projects[i].description}
            hubHref={item.hubHref}
            liveHref={item.liveHref}
            key={messages.projects[i].title}
          />
        ))}
      </ul>
    </section>
  );
}
