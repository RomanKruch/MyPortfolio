import s from './Footer.module.css';
import { Messages } from '../../../messages/types';
import UkraineIcon from '../../assets/icons/UkraineIcon';
import { style } from 'framer-motion/client';

interface IProps {
  messages: Messages['Footer'];
}

export default function Footer({ messages }: IProps) {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        {/* Logo + About */}
        <div className={s.section}>
          <h2 className={s.logo}>MyPortfolio</h2>
          <p className={s.text}>{messages.text}</p>
        </div>

        {/* Links */}
        <div className={s.section}>
          <h3 className={s.title}>{messages.linksTitle}</h3>
          <ul className={s.list}>
            <li>
              <a href="#services">{messages.links.services}</a>
            </li>
            <li>
              <a href="#projects">{messages.links.projects}</a>
            </li>
            <li>
              <a href="#hireMe">{messages.links.contact}</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className={s.section}>
          <h3 className={s.title}>{messages.contactTitle}</h3>
          <ul className={s.list}>
            <li>
              Email:{' '}
              <a href="https://mailto:kruchroman81@gmail.com" target="_blank">
                kruchroman81@gmail.com
              </a>
            </li>
            <li>
              Telegram:{' '}
              <a href="https://t.me/KrychRoman" target="_blank">
                @KrychRoman
              </a>
            </li>
            <li className={s.location}>
              {messages.location} <UkraineIcon />
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className={s.bottom}>
        © {new Date().getFullYear()} MyPortfolio. {messages.copyright}
      </div>
    </footer>
  );
}
