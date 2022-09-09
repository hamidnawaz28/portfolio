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
    jobTitle: "Full Stack Developer | React | Firebase",
    company: "Iplex Pvt Ltd",
    location: "Islamabad, Pakistan",
    from: "Mar 2021",
    to: "Jan 2022",
    summary: "As full stack react developer my achievements and tasks are",
    details: [
      "Developed applications for the tech startups to calculate their performance index and included the content needed for Investors and founders to have more insights about the company. ",
      "The sass platform provided investors and founders a unified place to check their standing.",
      "Added the simulator tool to compare deal terms.",
      "Translated AdobeXd designs into pixel perfect and responsive applications.",
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
    jobTitle: "Full Stack Developer | React | Django | AWS",
    company: "Robolyx",
    location: "Sydney, Australia (Remote)",
    from: "Aug 2020",
    to: "June 2021",
    summary: "As full stack developer my achievements and tasks were:",
    details: [
      "Developed a procurement and analysis platform for decreasing the procurement costs, improving visibility, efficiency and transparency by analyzing and categorizing the spent data, then displaying useful information using interactive dashboards.",
      "Developed CI/CI pipelines for application deployment.",
      "Refactored the class based components into functional components using the react hooks, and added redux for state management.",
    ],
    links: [],
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
