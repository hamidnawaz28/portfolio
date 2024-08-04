
import { Box, Link, Typography } from "@mui/material";
import {
  AWS,
  Firebase,
  Jira,
  MaterialUi,
  Node,
  React,
  Typescript,
} from "../../components/icons";

export default function ButtonAppBar() {


  return (
    <Box>
      {/* <img src="/personal-data/blueleaves.jpg" alt="" width="100%" /> */}
      <Box sx={{
        display: "flex",
        textAlign: "center",
        verticalAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "100px 0px",
      }}>
        <Box>
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
        </Box>
        <Box sx={{
          display: "flex",
        }}>
          <React />
          <Typescript />
          <Node />
          <MaterialUi />
          <Firebase />
          <Jira />
          <AWS />
        </Box>
      </Box>
    </Box>
  );
}
