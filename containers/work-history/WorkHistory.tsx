import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { AccordionGroup } from "../../components/accordion";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));
const workHistory = [
  {
    jobTitle: "Lead Full Stack Developer",
    company: "Nova",
    location: "Liverpool, UK(Remote)",
    from: "Jan 2022",
    to: "Present",
    summary: "As lead full stack developer my tasks are",
    details: [
      "Added smart search functionality to the platform, resulted in improved querying, which ultimately led to excellent results.",
      "Improved the algorithm logic of the platform, resulted in improved accuracy in search results of the saas platform.",
      "Refactored old code for more readability.",
      "Translated the UX/UI mockups into pixel perfect and responsive applications",
      "Along with routine development tasks, managed the engineering team",
      "Gave my feedback on product domain and provided technical support in day to day engineering problems.",
    ],
    links: ["https://app.thrift-app.com"],
    stack: [
      "Javascript",
      "React",
      "Node",
      "MySQL",
      "Material UI",
      "SASS",
      "AdobeXD",
    ],
  },
  {
    jobTitle: "React Developer",
    company: "Iplex Pvt Ltd",
    location: "Islamabad, Pakistan",
    from: "Mar 2021",
    to: "Jan 2022",
    summary: "As full stack react developer my achievements and tasks are",
    details: [
      "Developed applications for tech startups to calculate performance index for investors and founders and included the content needed for Investors and founders to have more insights about the company standing which boosted the engagement by 100%",
      "Included the simulator tool to compare deal terms, increasing the visibility by five times.",
    ],
    links: ["https://app.saaspi.io/deal-simulator"],
    stack: [
      "Typescript",
      "AWS",
      "React",
      "Firebase",
      "Jira",
      "Redux",
      "Material UI",
      "Adobe XD",
    ],
  },
  {
    jobTitle: "Assistant Tools Engineer | Full Stack",
    company: "Huawei Technologies",
    location: "Islamabad, Pakistan",
    from: "Sep 2019",
    to: "April 2021",
    summary: "As full stack developer my achievements and tasks were:",
    details: [
      "While working in a team environment, delivered various platforms.",
      "Worked at Middle East Digital Competence Center (ME- DCC) to develop with Huawei OWS cloud and successfully developed various OWS based platforms.  ",
      "Developed dashboards for the Middle East Region of Huawei.",
      "Created RESTful API’s for different requirements. Maintained code using distributed version control system Git and built pipelines with microsoft TFS.",
      "Developed data analysis and selenium-based automation tools in python.",
    ],
    links: [],
    stack: ["Javascript", "ES6", "Vue", "React", "Python"],
  },
  {
    jobTitle: "Freelance Software Developer",
    company: "Fiver.com",
    location: "Freelancing(Remote)",
    from: "Jan 2018",
    to: "June 2019",
    summary: "",
    details: [
      "Developed various software applications as freelancer based on Verilog language and C.",
      "Developed embedded systems software’s in C",
      "Got 4.9 out of 5 star rating in 6 projects",
    ],
    links: [],
    stack: ["Embedded C"],
  },
];

export default function WorkHistory() {
  const { root } = useStyles();

  return (
    <div className={root}>
      <Typography variant="h6" align="center">
        Work History
      </Typography>
      <AccordionGroup dataArr={workHistory} />
    </div>
  );
}
