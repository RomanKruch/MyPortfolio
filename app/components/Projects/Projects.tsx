import s from './Projects.module.css';
import ProjectsItem from './ProjectsItem';
import brudenPrev from '../../assets/bruden_prev.jpg';
import dreamHousePrev from '../../assets/dreamHouse_prev.jpg';
import travelPrev from '../../assets/travel_prev.jpg';
import { Messages, ProjectsItemsKeys } from '../../../messages/types';
import { StaticImageData } from 'next/image';

interface IProps {
  messages: Messages['Projects'];
}

const projects: {
  id: ProjectsItemsKeys;
  img: StaticImageData;
  liveHref: string;
  hubHref: string;
}[] = [
  {
    id: 'dreamHouse',
    img: dreamHousePrev,
    liveHref: '/',
    hubHref: '/',
  },
  {
    id: 'bruden',
    img: brudenPrev,
    liveHref: '/',
    hubHref: '/',
  },
  {
    id: 'travel',
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
        {projects.map(item => {
          const text = messages.projects[item.id];

          return (
            <ProjectsItem
              img={item.img}
              title={text.title}
              description={text.description}
              hubHref={item.hubHref}
              liveHref={item.liveHref}
              githubBtn={messages.githubBtn}
              liveBtn={messages.liveBtn}
              key={text.title}
            />
          );
        })}
      </ul>
    </section>
  );
}
