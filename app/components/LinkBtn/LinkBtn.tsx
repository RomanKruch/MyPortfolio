import s from './LinkBtn.module.css';

interface IProps {
  text: string;
  classname?: string;
  href: string;
  target: string;
}

export default function LinkBtn({ href, text, target, classname = '' }: IProps) {
  return (
    <a href={href} target={target} className={s.btn + classname}>
      {text}
    </a>
  );
}
