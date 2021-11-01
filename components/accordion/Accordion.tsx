import { makeStyles } from "@mui/styles";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Link,
} from "@mui/material";
import { ExpandMore, Business, LocationOn } from "@mui/icons-material";
import { Theme } from "@mui/system";
import { useState } from "react";
import { Dates as DateCard } from "../cards";
import {
  AWS,
  CProgramming,
  Django,
  Figma,
  Firebase,
  Javascript,
  Jira,
  MaterialUi,
  Nginx,
  PostgreSQl,
  Python,
  React,
  Redux,
  Typescript,
  Vue,
} from "../icons";

type AccordianProps = {
  data: any;
};

const useStyles = makeStyles((theme: Theme) => ({
  heading: {},
  stackCont: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
  },
  quickDetails: {
    display: "grid",
    gridTemplateColumns: "70% 30%",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1,1fr)",
    },
    paddingBottom: 20,
  },
  flexDisplay: {
    display: "flex",
    flexDirection: "row",
  },
}));
const logoIcons: any = {
  Typescript: <Typescript />,
  Javascript: <Javascript />,
  Vue: <Vue />,
  AWS: <AWS />,
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
};

export default function SimpleAccordion({ data }: AccordianProps) {
  const classes = useStyles();
  const { heading, stackCont, quickDetails, flexDisplay } = classes;
  const [expanded, isExpanded] = useState(true);
  const {
    jobTitle,
    details,
    company,
    location,
    from,
    to,
    summary,
    links,
    stack,
  } = data;

  return (
    <Accordion expanded={expanded}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        onClick={() => isExpanded(!expanded)}
      >
        <Typography variant="body1">{jobTitle}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={quickDetails}>
          <div>
            <div className={flexDisplay}>
              <Business style={{ paddingRight: 10 }} />
              <Typography variant="body1">{company}</Typography>
            </div>
            <div className={flexDisplay}>
              <LocationOn style={{ paddingRight: 10 }} />
              <Typography variant="body1">{location}</Typography>
            </div>
          </div>
          <div style={{ verticalAlign: "center" }}>
            <DateCard from={from} to={to} />
          </div>
        </div>

        <Typography variant="body1" gutterBottom>
          {summary}
        </Typography>

        {details.map((item: any, id: number) => {
          return (
            <Typography key={id}>
              {"• "}
              {item}
            </Typography>
          );
        })}
        <Typography variant="body2">Tech Stack:</Typography>
        <div className={stackCont}>
          {stack.map((item: any, id: number) => {
            return <div key={id}>{logoIcons[item]}</div>;
          })}
        </div>
        {links.length != 0 && <Typography>Links:</Typography>}
        <div>
          {links.map((el: any, id: number) => {
            return (
              <Link href={el} key={id} target="_blank">
                <Typography>{el}</Typography>
              </Link>
            );
          })}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
