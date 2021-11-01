import { makeStyles } from "@mui/styles";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { Theme } from "@mui/system";

type AccordianProps = {
  title: string;
  details: any;
};

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion({ title, details }: AccordianProps) {
  const classes = useStyles();
  const { heading } = classes;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={heading}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {details.map((item: any, id: number) => {
          return (
            <Typography key={id}>
              {"• "}
              {item}
            </Typography>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}
