import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        {/* Logo + About */}
        <div className={s.section}>
          <h2 className={s.logo}>MyPortfolio</h2>
          <p className={s.text}>
            Building modern websites and applications with passion for design and performance.
          </p>
        </div>

        {/* Links */}
        <div className={s.section}>
          <h3 className={s.title}>Quick Links</h3>
          <ul className={s.list}>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className={s.section}>
          <h3 className={s.title}>Contact</h3>
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
            <li>Location: Kyiv, Ukraine</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className={s.bottom}>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</div>
    </footer>
  );
}
