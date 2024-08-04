
import {
  AppBar,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";


export default function ButtonAppBar() {

  return (
    <Box sx={(theme) => {
      return {
        flexGrow: 1,
        backgroundColor: theme.palette.common.white,
      }
    }}>
      <AppBar position="static">
        <Toolbar sx={(theme) => {
          return {
            backgroundColor: theme.palette.common.white,
          }
        }}>
          <IconButton
            edge="start"
            sx={(theme) => {
              return {
                marginRight: theme.spacing(2),
                color: theme.palette.common.black,
              }
            }}
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" sx={(theme) => {
            return {
              flexGrow: 1,
              fontFamily: "Aller",
              color: theme.palette.common.black,
              "& span:nth-child(1)": {
                color: theme.palette.primary.main,
              },
              "& span:nth-child(2)": {
                color: theme.palette.secondary.main,
              },
            }
          }}>
            <Link href="/" underline="none">
              <span>Hamid</span>
              <span>Nawaz</span>
            </Link>
          </Typography>
          {/* <Link href="/" underline="none">
            <Button>Services</Button>
          </Link> */}
          {/* <Link href="/about-me" underline="none">
            <Button>About Me</Button>
          </Link> */}
          <Link href="/contact-me" underline="none">
            <Button sx={(theme) => {
              return {
                backgroundColor: theme.palette.common.white,
                color: theme.palette.common.black,
                margin: 5,
              }
            }}>Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
