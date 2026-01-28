import messages from './en.json';

export type Messages = typeof messages;

export type ProjectsItemsKeys = keyof Messages['Projects']['projects'];
export type ServicesItemsKeys = keyof Messages['Services']['items'];
