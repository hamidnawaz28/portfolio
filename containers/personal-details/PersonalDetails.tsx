import { makeStyles } from "@mui/styles";

import { Typography } from "@mui/material";
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

const useStyles = makeStyles((theme: Theme) => ({
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
  const { root, selfDetails, skillsIcons, self } = useStyles();

  return (
    <div className={root}>
      {/* <img src="/personal-data/blueleaves.jpg" alt="" width="100%" /> */}
      <div className={self}>
        <div className={selfDetails}>
          <Typography variant="h3" p={8}>
            Hamid Nawaz
          </Typography>
          <Typography variant="body1" p={8} pb={16}>
            Full Stack Developer
          </Typography>
        </div>
        <div className={skillsIcons}>
          <React />
          <Typescript />
          <Node />
          <MaterialUi />
          <Firebase /> <Jira /> <AWS />
        </div>
      </div>
    </div>
  );
}
