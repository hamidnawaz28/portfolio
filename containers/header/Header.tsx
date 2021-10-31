import { makeStyles } from "@mui/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  SvgIcon,
  Link,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  title: {
    flexGrow: 1,
    fontFamily: "Aller",
    color: "black",
    "& span:nth-child(1)": {
      color: theme.palette.primary.main,
    },
    "& span:nth-child(2)": {
      color: theme.palette.secondary.main,
    },
  },
  toolBar: {
    backgroundColor: "white",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link href="/" underline="none">
              <span>Hamid</span>
              <span>Nawaz</span>
            </Link>
          </Typography>
          <Link href="/" underline="none">
            <Button>Services</Button>
          </Link>
          <Link href="/about-me" underline="none">
            <Button>About Us</Button>
          </Link>

          <Link href="/contact-me" underline="none">
            <Button style={{ backgroundColor: "#F27171", color: "white" }}>
              Contact
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
