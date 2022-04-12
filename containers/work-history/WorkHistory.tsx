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
    jobTitle: "Lead Full Stack Developer | React | Node",
    company: "Nova",
    location: "Liverpool, UK(Remote)",
    from: "Jan 2022",
    to: "Present",
    summary: "As lead full stack developer my tasks are",
    details: [
      "Working on a SAAS platform for one of the leading tech startup of UK.", "Along with routine developement tasks, provide technical solutions on day to day challenges","Managing all the team members and supporting them in technical glitches","Making sure the quality work is being delivered"
     ],
    links: [],
    stack: [
      "Javascript",
      "React",
      "Node",
      "mySQL",
      "Material UI",
      "AdobeXD",
    ],
  },
  {
    jobTitle: "Full Stack Developer | React | Firebase",
    company: "Iplex Pvt Ltd",
    location: "Islamabad, Pakistan",
    from: "Mar 2021",
    to: "Jan 2022",
    summary: "As full stack react developer my achievements and tasks are",
    details: [
      "Developed application for the tech startups to calculate their performance index and included the content needed for Investors to have more insights about the company standing",
    ],
    links: [],
    stack: [
      "Typescript",
      "React",
      "Firebase",
      "Jira",
      "Redux",
      "Material UI",
      "Figma",
    ],
  },
  {
    jobTitle: "Full Stack Developer | React | Django | AWS",
    company: "Robolyx",
    location: "Sydney, Australia (Remote)",
    from: "Aug 2020",
    to: "June 2021",
    summary: "As full stack developer my achievements and tasks were:",
    details: [
      "Developed a SAAS procurement and analysis platform for decreasing the procurement costs, improving visibility, efficiency and transparency by analyzing and categorization the spend data, then displaying useful information using interactive dashboards.",
    ],
    links: ["robolyx.com"],
    stack: [
      "React",
      "Django",
      "PostgreSQL",
      "AWS",
      "Redux",
      "Material UI",
      "Nginx",
    ],
  },
  {
    jobTitle: "Full Stack Developer | JavaScript | My SQL | ES6",
    company: "Huawei Technologies",
    location: "Islamabad, Pakistan",
    from: "Sep 2019",
    to: "April 2021",
    summary: "As full stack developer my achievements and tasks were:",
    details: [
      "Efficiently worked in team projects for fast and reliable applications delivery",
      "Along with one other dev we were the first developers in Middle East Digital Competence Centre (ME- DCC) to start development in Huawei OWS cloud and successfully developed various OWS based platforms after that",
      "Developing application/ platforms for Middle East Region of Huawei using HTML, jQuery, CSS and JavaScript",
      "Creating RESTful API’s for different requirements",
      "Maintaining code using distributed version control system Git and TFS",
      "Selenium-based automation tools",
    ],
    links: ["starling.hrms.huawei.com"],
    stack: ["Javascript", "ES6", "Vue", "React", "Python"],
  },
  {
    jobTitle: "Embedded C developer",
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
