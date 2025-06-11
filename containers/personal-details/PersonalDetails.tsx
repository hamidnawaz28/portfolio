
import { Box, Link, Typography } from "@mui/material";
import {
  AWS,
  CSharp,
  DotNet,
  Firebase,
  Java,
  NestJs,
  Node,
  React,
  SpringBoot,
  Typescript,
} from "../../components/icons";
import { ContainerInterface } from "../../common/types";

export default function ButtonAppBar() {
  return (
    <MainContainer>
      <StackContainer />
      <TechIconContainer />
    </MainContainer >
  );
}

const MainContainer = ({ children }: ContainerInterface) => {
  return <Box
    sx={{
      display: "flex",
      textAlign: "center",
      verticalAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: "100px 0px",
    }}>
    {children}
  </Box>
}

const StackContainer = () => {
  return <Box>
    <Typography variant="h4" pt={8}>
      Full Stack Developer
    </Typography>
    <Typography variant="body1" pb={8}>
      Javascript |Typescript | React | Node | Nest | AWS
    </Typography>
  </Box>
}

const TechIconContainer = () => {
  return <Box sx={{
    display: "flex",
  }}>
    <React />
    <Typescript />
    <NestJs />
    <Node />
    <Firebase />
    <AWS />
  </Box>
}


export const PortfolioContainer = () => {
  return <Typography variant="h6" pb={8}>
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
}
