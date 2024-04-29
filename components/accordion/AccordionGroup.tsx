import { makeStyles } from "@mui/material/styles";
import Accordion from "./Accordion";
import { ExpandMore } from "@mui/icons-material";
import { Timeline } from "../timeline";
import { Timeline as TimelineWrap } from "@mui/lab";
import { Theme } from "@mui/system";
import { Box } from "@mui/material";

interface AppProps {
  dataArr: object[];
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
    "@global": {
      ".MuiTimelineOppositeContent-positionRight": {
        display: "none",
      },
    },
  }
}


export default function AccordianGroup({ dataArr }: AppProps) {


  return (
    <Box sx={rootStyle}>
      <TimelineWrap position="right">
        {dataArr?.map((el: any, key: number) => (
          <Timeline  >
            <Accordion data={el} />
          </Timeline>
        ))}
      </TimelineWrap>
    </Box>
  );
}
