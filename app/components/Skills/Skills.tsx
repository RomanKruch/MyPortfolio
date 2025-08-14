import s from './Skills.module.css';

const skills = {
  frontend: [
    { name: 'React', icon: '/icons/react.svg', link: 'https://react.dev' },
    { name: 'Next.js', icon: '/icons/nextjs.svg', link: 'https://nextjs.org' },
    { name: 'TypeScript', icon: '/icons/typescript.svg', link: 'https://www.typescriptlang.org' },
  ],
  backend: [
    { name: 'NestJS', icon: '/icons/nestjs.svg', link: 'https://nestjs.com' },
    { name: 'Express', icon: '/icons/express.svg', link: 'https://expressjs.com' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg', link: 'https://www.postgresql.org' },
    { name: 'MongoDB', icon: '/icons/mongodb.svg', link: 'https://www.mongodb.com' },
  ],
  tools: [
    { name: 'Git', icon: '/icons/git.svg', link: 'https://git-scm.com' },
    { name: 'GitHub', icon: '/icons/github.svg', link: 'https://github.com' },
    { name: 'Postman', icon: '/icons/postman.svg', link: 'https://www.postman.com' },
    { name: 'Figma', icon: '/icons/figma.svg', link: 'https://www.figma.com' },
    { name: 'Cloudinary', icon: '/icons/cloudinary.svg', link: 'https://cloudinary.com' },
  ],
};

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
    </section>
  );
}
