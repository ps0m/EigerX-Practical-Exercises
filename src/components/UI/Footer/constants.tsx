import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface FooterLinkInterface {
  title: string;
  link: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

export const FOOTER_CONTENT: FooterLinkInterface[] = [
  {
    title: 'Github',
    link: 'https://github.com/ps0m',
    icon: GitHubIcon,
  },
  {
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/pobudey-sergey',
    icon: LinkedInIcon,
  },
  {
    title: 'CV',
    link: ' https://drive.google.com/file/d/1mKSfviDMkoqzjWW39z40Lp5R7_nhV5Iu/view?usp=sharing',
    icon: ReceiptLongIcon,
  },
];
