import WebDevIcon from '../../assets/icons/WebDev.icon';
import BackApiIcon from '../../assets/icons/BackApi.icon';
import CommerceIcon from '../../assets/icons/Commerce.icon';
import TelegramIcon from '../../assets/icons/TelegramIcon';
import { ServicesItemsKeys } from '../../messages/types';
import { JSX } from 'react';

interface IServiceItem {
  id: ServicesItemsKeys;
  icon: () => JSX.Element;
  linkHref: string;
}

export const services: IServiceItem[] = [
  {
    id: 'webDev',
    icon: WebDevIcon,
    linkHref: '#hireMe',
  },
  {
    id: 'backApi',
    icon: BackApiIcon,
    linkHref: '#hireMe',
  },
  {
    id: 'commerce',
    icon: CommerceIcon,
    linkHref: '#hireMe',
  },
  {
    id: 'telegramBot',
    icon: TelegramIcon,
    linkHref: '#hireMe',
  },
];
