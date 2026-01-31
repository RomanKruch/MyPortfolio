'use client';

import { usePathname, useRouter } from 'next/navigation';
import styles from './LanguageSwitcher.module.css';
import { locales } from '../../../messages/config';
import UkraineIcon from '../../assets/icons/UkraineIcon';
import UnitedKingdomIcon from '../../assets/icons/UnitedKingdomIcon';

// const locales = ['uk', 'en'] as const;

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split('/');
  const currentLocale = segments[1];
  const restPath = segments.slice(2).join('/');

  const switchLocale = (locale: string) => {
    router.push(`/${locale}/${restPath}`);
  };

  return (
    <div className={styles.switcher}>
      {locales.map(locale => (
        <button
          key={locale}
          className={styles.btn}
          onClick={() => switchLocale(locale)}
          style={{
            // fontWeight: locale === currentLocale ? 700 : 400,
            // opacity: locale === currentLocale ? 1 : 0.6,
            backgroundColor: locale === currentLocale ? ' var(--hover_color)' : 'inherit',
          }}
        >
          {locale === 'uk' ? <UkraineIcon /> : <UnitedKingdomIcon />}
          {/* {locale.toUpperCase()} */}
          {/* <UkraineIcon /> */}
        </button>
      ))}
    </div>
  );
}
