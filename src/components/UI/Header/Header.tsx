import { AppBar, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { HeaderLinkInterface, HEADER_CONTENT as content } from './constants';

const Header = () => {
  return (
    <AppBar position="static" color="secondary">
      <Stack component="ul" direction="row" justifyContent="center" spacing={5} m={2}>
        {content.map((element: HeaderLinkInterface) => (
          <Typography key={element.title} variant="h4" component="li">
            <NavLink to={element.link}>{element.title}</NavLink>
          </Typography>
        ))}
      </Stack>
    </AppBar>
  );
};
export default Header;
