import { makeStyles } from "@mui/styles";
import Accordion from "./Accordion";
import { ExpandMore } from "@mui/icons-material";
import { Timeline } from "../timeline";
import { Timeline as TimelineWrap } from "@mui/lab";
import { Theme } from "@mui/system";

interface AppProps {
  dataArr: object[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
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
  },
}));

export default function AccordianGroup({ dataArr }: AppProps) {
  const { root } = useStyles();

  return (
    <div className={root}>
      <TimelineWrap position="right">
        {dataArr?.map((el: any, key: number) => (
          <Timeline key={key}>
            <Accordion data={el} />
          </Timeline>
        ))}
      </TimelineWrap>
    </div>
  );
}
