import s from './LinkBtn.module.css';

interface IProps {
  text: string;
  className?: string;
  href: string;
  target?: string;
}

export default function LinkBtn({ href, text, target = '', className = '' }: IProps) {
  return (
    <a href={href} target={target} className={s.btn + '  ' + className}>
      {text}
    </a>
  );
}
