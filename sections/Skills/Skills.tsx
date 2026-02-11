import s from './Skills.module.css';
import SkillsItem from './SkillsItem';
import { Messages } from '../../messages/types';
import { skills } from './data';

interface IProps {
  messages: Messages['Skills'];
}

export default function Skills({ messages }: IProps) {
  return (
    <section>
      <h2>{messages.title}</h2>

      <div className={s.wrap}>
        <h3 className={s.title}>Frontend</h3>
        <ul className={s.list}>
          {skills.frontend.map(item => (
            <SkillsItem Icon={item.icon} link={item.link} title={item.name} key={item.name} />
          ))}
        </ul>
      </div>

      <div className={s.wrap}>
        <h3 className={s.title}>Backend</h3>
        <ul className={s.list}>
          {skills.backend.map(item => (
            <SkillsItem Icon={item.icon} link={item.link} title={item.name} key={item.name} />
          ))}
        </ul>
      </div>

      <div className={s.wrap}>
        <h3 className={s.title}>Tools</h3>
        <ul className={s.list}>
          {skills.tools.map(item => (
            <SkillsItem Icon={item.icon} link={item.link} title={item.name} key={item.name} />
          ))}
        </ul>
      </div>
    </section>
  );
}
