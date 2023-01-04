import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface FooterLinkInterface{
  title: string
  link: string
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

export const FOOTER_CONTENT: FooterLinkInterface[] = [
  {
    title: 'github',
    link: 'https://github.com/ps0m',
    icon: GitHubIcon
  }, 
  {
    title: 'linkedin',
    link: 'https://www.linkedin.com/in/pobudey-sergey',
    icon: LinkedInIcon
  },
  {
    title: 'cv',
    link: ' https://drive.google.com/file/d/1mKSfviDMkoqzjWW39z40Lp5R7_nhV5Iu/view?usp=sharing',
    icon: ReceiptLongIcon
  },
]
