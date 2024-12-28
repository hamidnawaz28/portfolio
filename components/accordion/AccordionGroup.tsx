import { Business, ExpandMore, LocationOn } from "@mui/icons-material";
import { Timeline as TimelineWrap } from "@mui/lab";
import { Accordion, AccordionDetails, AccordionSummary, Box, Link, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import { useState } from "react";
import { Dates as DateCard } from "../cards";
import {
  AWS,
  CProgramming,
  CSharp,
  Django,
  DotNet,
  Figma,
  Firebase,
  Java,
  Javascript,
  Jira,
  MaterialUi,
  NestJs,
  Nginx,
  Node,
  PostgreSQl,
  Python,
  React,
  Redux,
  SpringBoot,
  Typescript,
  Vue,
} from "../icons";
import { Timeline as TimelineItem } from "../timeline";
import { workHistorys } from "../../common/constant";
import { ContainerInterface, WorkHistoryDetailsInterface, WorkHistoryInterface } from "../../common/types";

export default function Timeline() {
  return (
    <Box sx={rootStyle}>
      <TimelineWrap position="right">
        {workHistorys.map((workHistory: WorkHistoryInterface, key: number) => (
          <TimelineItem key={key}>
            <AccordianItem workHistory={workHistory} />
          </TimelineItem>
        ))}
      </TimelineWrap>
    </Box >
  );
}

function AccordianItem({ workHistory }: WorkHistoryDetailsInterface) {
  const [expanded, isExpanded] = useState(true);
  return (
    <Accordion
      expanded={expanded}
      sx={(theme) => {
        return {
          backgroundColor: theme.palette.common.white,
          padding: "0px 5px",
        }
      }}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        onClick={() => isExpanded(!expanded)}
      >
        <JobSummaryCard workHistory={workHistory} />
      </AccordionSummary>
      <AccordionDetails>
        <WorkHistoryAccordian workHistory={workHistory} />
      </AccordionDetails>
    </Accordion>
  );
}

function WorkHistoryAccordian({ workHistory }: WorkHistoryDetailsInterface) {
  return (
    <WorkHistoryAccordianContainer>
      <WorkHistoryDetailsContainer>
        <WorkHistoryCompanyContainer>
          <WorkHistoryCompany workHistory={workHistory} />
          <WorkHistoryLocation workHistory={workHistory} />
        </WorkHistoryCompanyContainer>
        <WorkHistoryTimeline workHistory={workHistory} />
      </WorkHistoryDetailsContainer>
      {/* <WorkHistorySummary workHistory={workHistory} /> */}
      {/* <ResponsibilitiesContainer workHistory={workHistory} /> */}
      <TechStackContainer workHistory={workHistory} />
      {workHistory.links.length != 0 && <WorkHistoryLinks workHistory={workHistory} />}
    </WorkHistoryAccordianContainer >
  )
}

const WorkHistoryCompanyContainer = ({ children }: ContainerInterface) => {
  return <Box sx={(theme => {
    return {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }
    }
  })}>
    {
      children
    }
  </Box >
}

const WorkHistoryAccordianContainer = ({ children }: ContainerInterface) => {
  return <Box sx={{
    width: '100%'
  }}
  >
    {children}
  </Box>
}

const WorkHistoryDetailsContainer = ({ children }: ContainerInterface) => {
  return <Box sx={((theme) => {
    return {
      display: "grid",
      gridTemplateColumns: "70% 30%",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(1,1fr)",
      },
      paddingBottom: 5,
    }
  })}>
    {children}
  </Box>
}

const WorkHistoryTimeline = ({ workHistory }: WorkHistoryDetailsInterface) => {
  return <Box style={{ verticalAlign: "center" }}>
    <DateCard from={workHistory.from} to={workHistory.to} />
  </Box>
}

const WorkHistorySummary = ({ workHistory }: WorkHistoryDetailsInterface) => {
  return <Typography variant="body1" gutterBottom>
    {workHistory.summary}
  </Typography>
}

const WorkHistoryLocation = ({ workHistory }: WorkHistoryDetailsInterface) => {
  return <Box sx={{
    display: "flex",
    flexDirection: "row",
  }}>
    <LocationOn style={{ paddingRight: 10 }} />
    <Typography variant="body1">{workHistory.location}</Typography>
  </Box>
}

const WorkHistoryCompany = ({ workHistory }: WorkHistoryDetailsInterface) => {
  return <Box sx={{
    display: "flex",
    flexDirection: "row",
  }}>
    <Business style={{ paddingRight: 10 }} />
    <Typography variant="body1">{workHistory.company}</Typography>
  </Box>
}


const ResponsibilitiesContainer = ({ workHistory }: WorkHistoryDetailsInterface) => {
  return <Box>
    {
      workHistory.responsibilities.map((responsibility: string, id: number) => {
        return (
          <Typography key={id}>
            {"• "}
            {responsibility}
          </Typography>
        );
      })
    }
  </Box >
}

const WorkHistoryLinks = ({ workHistory }: WorkHistoryDetailsInterface) => {
  return <Box>
    <Typography>Links:</Typography>
    <Box>
      {workHistory.links.map((workHistoryLink: string, id: number) => {
        return (
          <Link href={workHistoryLink} key={id} target="_blank">
            <Typography>{workHistoryLink}</Typography>
          </Link>
        )
      })}
    </Box>
  </Box>
}


const TechStackContainer = ({ workHistory }: WorkHistoryDetailsInterface) => {
  return <Box>
    <TechStackHeader />
    <TechStackIcons workHistory={workHistory}></TechStackIcons>
  </Box>
}


const JobSummaryCard = ({ workHistory }: WorkHistoryDetailsInterface) => {
  return <Typography variant="subtitle1">{workHistory.jobTitle}</Typography>
}


const TechStackIcons = ({ workHistory }: WorkHistoryDetailsInterface) => {
  return <Box sx={{
    display: "flex",
    flexDirection: "row",
    padding: 5,
  }}>
    {workHistory.stack.map((item: string, id: number) => {
      return <div key={id}>{logoElements[item]}</div>;
    })}
  </Box>
}


const TechStackHeader = () => {
  return <Box pt={0}>
    <Typography variant="body2" sx={{
      fontWeight: 600,
    }}>
      Tech Stack:
    </Typography>
  </Box>
}


const rootStyle = (theme: Theme) => {
  return {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      width: "95%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "90%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: "80%",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      width: "70%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "60%",
    },
    margin: "auto",
    "& .MuiTimelineOppositeContent-positionRight": {
      display: "none",
    },
  }
}

const logoElements: Record<string, JSX.Element> = {
  Typescript: <Typescript />,
  Javascript: <Javascript />,
  Vue: <Vue />,
  AWS: <AWS />,
  Node: <Node />,
  React: <React />,
  Python: <Python />,
  Firebase: <Firebase />,
  Jira: <Jira />,
  Redux: <Redux />,
  Figma: <Figma />,
  Django: <Django />,
  PostgreSQL: <PostgreSQl />,
  Nginx: <Nginx />,
  "Material UI": <MaterialUi />,
  "Embedded C": <CProgramming />,
  "CSharp": <CSharp />,
  "DotNet": <DotNet />,
  "NestJs": <NestJs />,
  "Java": <Java />,
  "SpringBoot": <SpringBoot />,
};
