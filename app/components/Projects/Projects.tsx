import s from './Projects.module.css';
import ProjectsItem from './ProjectsItem';
import brudenPrev from '../../assets/bruden_prev.jpg';
import dreamHousePrev from '../../assets/dreamHouse_prev.jpg';
import travelPrev from '../../assets/travel_prev.jpg';
import brainBrewPrev from '../../assets/brainBrewPrev.png';
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
    liveHref: 'https://romankruch.github.io/DreamHouse',
    hubHref: 'https://github.com/RomanKruch/DreamHouse',
  },
  {
    id: 'bruden',
    img: brudenPrev,
    liveHref: 'https://romankruch.github.io/bruden',
    hubHref: 'https://github.com/RomanKruch/bruden',
  },
  {
    id: 'travel',
    img: travelPrev,
    liveHref: 'https://romankruch.github.io/Travel',
    hubHref: 'https://github.com/RomanKruch/Travel',
  },
  {
    id: 'brainBrew',
    img: brainBrewPrev,
    hubHref: 'https://github.com/RomanKruch/BrainBrew',
    liveHref: 'https://t.me/brainbrew8117_bot',
  },
];

export default function Projects({ messages }: IProps) {
  return (
    <section id="projects">
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
