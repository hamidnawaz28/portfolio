import React, { ReactNode } from "react";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";

type AppProps = {
  children: ReactNode;
  day?: number | string;
};

export default function Timeline({ children }: AppProps) {
  return (
    <TimelineItem>
      <TimelineOppositeContent></TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{children}</TimelineContent>
    </TimelineItem>
  );
}
