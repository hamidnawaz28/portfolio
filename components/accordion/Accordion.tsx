import { makeStyles } from "@mui/styles";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Link,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { Theme } from "@mui/system";
import { useState } from "react";

type AccordianProps = {
  data: any;
};

const useStyles = makeStyles((theme: Theme) => ({
  heading: {},
  stackCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
}));

export default function SimpleAccordion({ data }: AccordianProps) {
  const classes = useStyles();
  const { heading, stackCont } = classes;
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
        <Typography variant="body1">{from}</Typography>
        <Typography variant="body1">{to}</Typography>
        <Typography variant="body1">{company}</Typography>
        <Typography variant="body1">{location}</Typography>
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
            return <Typography key={id}>{item}</Typography>;
          })}
        </div>
        <Typography>Links:</Typography>
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
