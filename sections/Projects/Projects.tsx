import s from './Projects.module.css';
import ProjectsItem from './ProjectsItem';
import { Messages } from '../../messages/types';
import { projects } from './data';

interface IProps {
  messages: Messages['Projects'];
}

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
