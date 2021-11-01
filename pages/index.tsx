import { NextPage } from "next";
import { Seo } from "../components/seo";
import { useTranslation } from "react-i18next";
import { Footer } from "../containers/footer";
import { makeStyles } from "@mui/styles";
import Head from "next/head";
import Image from "next/image";
import { Grid } from "@mui/material";
import { PersonalDetails } from "../containers/personal-details";
import { WorkHistory } from "../containers/work-history";
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
        description="Homepage of Hamid Nawaz"
        pageTitle="Home"
        contentTitle="Software developer from pakistan"
        pageUrl=""
      />
      <main>
        <WorkHistory />
        <PersonalDetails />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
