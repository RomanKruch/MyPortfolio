import s from './Skills.module.css';
import ReactIcon from '../../assets/icons/React.icon';
import NextjsIcon from '../../assets/icons/Nextjs.icon';
import TypescriptIcon from '../../assets/icons/Typescript.icon';
import NestjsIcon from '../../assets/icons/Nestjs.icon';
import ExpressIcon from '../../assets/icons/Express.icon';
import PostgresqlIcon from '../../assets/icons/Postgresql.icon';
import MongodbIcon from '../../assets/icons/Mongodb.icon';
import GitIcon from '../../assets/icons/Git.icon';
import GithubIcon from '../../assets/icons/Github.icon';
import PostmanIcon from '../../assets/icons/Postman.icon';
import FigmaIcon from '../../assets/icons/Figma.icon';
import CloudinaryIcon from '../../assets/icons/Cloudinary.icon';
import SkillsItem from './SkillsItem';

const skills = {
  frontend: [
    { name: 'React', icon: ReactIcon, link: 'https://react.dev' },
    { name: 'Next.js', icon: NextjsIcon, link: 'https://nextjs.org' },
    { name: 'TypeScript', icon: TypescriptIcon, link: 'https://www.typescriptlang.org' },
  ],
  backend: [
    { name: 'NestJS', icon: NestjsIcon, link: 'https://nestjs.com' },
    { name: 'Express', icon: ExpressIcon, link: 'https://expressjs.com' },
    { name: 'PostgreSQL', icon: PostgresqlIcon, link: 'https://www.postgresql.org' },
    { name: 'MongoDB', icon: MongodbIcon, link: 'https://www.mongodb.com' },
  ],
  tools: [
    { name: 'Git', icon: GitIcon, link: 'https://git-scm.com' },
    { name: 'GitHub', icon: GithubIcon, link: 'https://github.com' },
    { name: 'Postman', icon: PostmanIcon, link: 'https://www.postman.com' },
    { name: 'Figma', icon: FigmaIcon, link: 'https://www.figma.com' },
    { name: 'Cloudinary', icon: CloudinaryIcon, link: 'https://cloudinary.com' },
  ],
};

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>

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
