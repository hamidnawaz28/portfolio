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
  Typescript,
  Vue,
} from "../icons";
import { Timeline as TimelineItem } from "../timeline";
import { workHistorys } from "../../common/constant";
import { WorkHistoryDetailsInterface, WorkHistoryInterface } from "../../common/types";

export default function AccordianGroup() {
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
    <Accordion expanded={expanded} sx={(theme) => {
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
    <Box sx={{
      width: '100%'
    }
    }>
      <Box sx={((theme) => {
        return {
          display: "grid",
          gridTemplateColumns: "70% 30%",
          [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(1,1fr)",
          },
          paddingBottom: 20,
        }
      })}>
        <Box sx={(theme => {
          return {
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }
          }
        })}>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
          }}>
            <Business style={{ paddingRight: 10 }} />
            <Typography variant="body1">{workHistory.company}</Typography>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
          }}>
            <LocationOn style={{ paddingRight: 10 }} />
            <Typography variant="body1">{workHistory.location}</Typography>
          </Box>
        </Box>
        <Box style={{ verticalAlign: "center" }}>
          <DateCard from={workHistory.from} to={workHistory.to} />
        </Box>
      </Box>

      <Typography variant="body1" gutterBottom>
        {workHistory.summary}
      </Typography>

      {
        workHistory.responsibilities.map((responsibility: any, id: number) => {
          return (
            <Typography key={id}>
              {"• "}
              {responsibility}
            </Typography>
          );
        })
      }
      <TechStackContainer workHistory={workHistory} />

      {workHistory.links.length != 0 && <WorkHistoryLinks workHistory={workHistory} />}

    </Box>
  )
}


const WorkHistoryLinks = ({ workHistory }: WorkHistoryDetailsInterface) => {
  return <Box>
    <Typography>Links:</Typography>
    <Box>
      {workHistory.links.map((workHistoryLink: any, id: number) => {
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
  return <>
    <TechStackHeader />
    <TechStackIcons workHistory={workHistory}></TechStackIcons></>
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
    {workHistory.stack.map((item: any, id: number) => {
      return <div key={id}>{logoElements[item]}</div>;
    })}
  </Box>
}


const TechStackHeader = () => {
  return <Box pt={10}>
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
  "NestJs": <NestJs />
};
