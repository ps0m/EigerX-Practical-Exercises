import { MAIN_PAGE, TODO_PAGE } from '../../../router/constants';

export interface HeaderLinkInterface {
  title: string;
  link: string;
}

export const HEADER_CONTENT: HeaderLinkInterface[] = [
  { title: 'Main', link: MAIN_PAGE },
  {
    title: 'ToDo',
    link: TODO_PAGE,
  },
];
