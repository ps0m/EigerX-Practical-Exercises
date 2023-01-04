// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { Link, Stack } from "@mui/material";
import { FooterLinkInterface, FOOTER_CONTENT as content } from "./constants";


const Footer = () => {
  
return(
  <Stack
    component='footer'
    direction='row'
    justifyContent='center'
    width='100%'
    spacing={5}
    m={3}
    >
    {content.map((element: FooterLinkInterface) => (
      <Link href={element.link} key={element.title} target='_blank'>
        <element.icon fontSize='large' color="secondary" />
    </Link>
    ))}
  </Stack>
);
};
export default Footer;