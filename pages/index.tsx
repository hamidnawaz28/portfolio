import { NextPage } from "next";
import { Seo } from "../components/seo";
import { useTranslation } from "react-i18next";
import { Footer } from "../containers/footer";
import Head from "next/head";
import Image from "next/image";
import { Grid } from "@mui/material";
import { PersonalDetails } from "../containers/personal-details";
import { WorkHistory } from "../containers/work-history";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    verticalAlign: "center",
    textAlign: "center",
  },
});

const Home: NextPage = () => {
  const { t, i18n } = useTranslation();

  const { root } = useStyles();

  return (
    <div>
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
      <main>
        <PersonalDetails />
        <WorkHistory />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
