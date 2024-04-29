import { makeStyles } from "@mui/material/styles";

import { Typography, Link } from "@mui/material";
import { Menu } from "@mui/icons-material";
import {
  React,
  Typescript,
  Node,
  MaterialUi,
  Firebase,
  Jira,
  AWS,
} from "../../components/icons";
import { Theme } from "@mui/system";
import { Box } from "@mui/material";

const useStyles = ((theme: Theme) => ({
  root: {},
  self: {
    display: "flex",
    textAlign: "center",
    verticalAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "100px 0px",
  },
  skillsIcons: {
    display: "flex",
  },
  selfDetails: {},
}));

export default function ButtonAppBar() {


  return (
    <div className={useStyles.root}>
      {/* <img src="/personal-data/blueleaves.jpg" alt="" width="100%" /> */}
      <div className={self}>
        <div className={selfDetails}>
          <Typography variant="h4" pt={8}>
            Full Stack Developer
          </Typography>
          <Typography variant="body1" pb={8}>
            Typescript | React | Node | AWS | Serverless | Microservices
          </Typography>
          <Typography variant="h6" pb={8}>
            <Link href="https://github.com/hamidnawaz28" underline="none">
              Visit Github
            </Link>
            {" | "}
            <Link
              href="/personal-data/resume.pdf"
              underline="none"
              color="secondary"
              target="_blank"
            >
              Download CV
            </Link>
          </Typography>
        </div>
        <div className={skillsIcons}>
          <React />
          <Typescript />
          <Node />
          <MaterialUi />
          <Firebase />
          <Jira />
          <AWS />
        </div>
      </div>
    </div>
  );
}
