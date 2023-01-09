import { Link, Stack, Tooltip, Typography } from '@mui/material';
import { FooterLinkInterface, FOOTER_CONTENT as content } from './constants';

const Footer = () => {
  return (
    <Stack
      component="footer"
      direction="row"
      justifyContent="center"
      width="100%"
      spacing={5}
      m={3}
    >
      {content.map((element: FooterLinkInterface) => (
        <Tooltip
          key={element.title}
          title={
            <Typography variant="h4" component="p">
              {element.title}
            </Typography>
          }
          placement="top"
        >
          <Link href={element.link} target="_blank">
            <element.icon color="secondary" sx={{ width: '30px', height: '30px' }} />
          </Link>
        </Tooltip>
      ))}
    </Stack>
  );
};
export default Footer;
