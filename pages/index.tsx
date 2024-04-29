import { Box } from "@mui/material";
import { NextPage } from "next";
import { Seo } from "../components/seo";
import { Footer } from "../containers/footer";
import { PersonalDetails } from "../containers/personal-details";
import { WorkHistory } from "../containers/work-history";

const Home: NextPage = () => {


  return (
    <Box>
      <Seo
        description="Hamid Nawaz"
        pageTitle="Home"
        contentTitle="Full stack react and node software developer from pakistan"
        pageUrl=""
        tags={[
          "software developer",
          "react",
          "node",
          "pakistan",
          "remote",
          "full stack developer",
        ]}
      />
      <Box>
        <PersonalDetails />
        <WorkHistory />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
