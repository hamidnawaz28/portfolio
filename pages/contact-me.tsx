import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { Typography } from "@mui/material";
import { Footer } from "../containers/footer";
import { Seo } from "../components/seo";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: "center",
    padding: "5% 20%",
    [theme.breakpoints.down("sm")]: {
      padding: "5% 2%",
    },
  },
}));

const contactDetails = [
  {
    label: "Email",
    info: "info@hamidnawaz.com",
  },
  {
    label: "Phone",
    info: "+923125012601",
  },
];

const ContactMe = () => {
  const { root } = useStyles();
  return (
    <div>
      <Seo
        description="Contact me page of hamid nawaz"
        pageTitle="Contact Me"
        contentTitle="Contact Hamid Nawaz"
        pageUrl="/contact-me"
      />
      <main>
        <div className={root}>
          {contactDetails.map((el, id) => {
            return (
              <div key={id}>
                <Typography variant="h3">{el.label}</Typography>
                <p>{el.info}</p>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default ContactMe;
