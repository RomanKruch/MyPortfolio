import { ProjectsItemsKeys } from '../../messages/types';
import { StaticImageData } from 'next/image';
import brudenPrev from '../../assets/bruden_prev.jpg';
import dreamHousePrev from '../../assets/dreamHouse_prev.jpg';
import travelPrev from '../../assets/travel_prev.jpg';
import brainBrewPrev from '../../assets/brainBrew_prev.jpg';

interface IProjectItem {
  id: ProjectsItemsKeys;
  img: StaticImageData;
  liveHref: string;
  hubHref: string;
}

export const projects: IProjectItem[] = [
  {
    id: 'dreamHouse',
    img: dreamHousePrev,
    liveHref: 'https://romankruch.github.io/DreamHouse',
    hubHref: 'https://github.com/RomanKruch/DreamHouse',
  },
  {
    id: 'bruden',
    img: brudenPrev,
    liveHref: 'https://romankruch.github.io/bruden',
    hubHref: 'https://github.com/RomanKruch/bruden',
  },
  {
    id: 'travel',
    img: travelPrev,
    liveHref: 'https://romankruch.github.io/Travel',
    hubHref: 'https://github.com/RomanKruch/Travel',
  },
  {
    id: 'brainBrew',
    img: brainBrewPrev,
    hubHref: 'https://github.com/RomanKruch/BrainBrew',
    liveHref: 'https://t.me/brainbrew8117_bot',
  },
];
