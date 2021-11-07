import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { Typography, Link } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import { Footer } from "../containers/footer";
import { Seo } from "../components/seo";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
          <div
            style={{
              color: "#06d755",
              padding: "5px 10px",
              border: "2px solid #06d755",
              borderRadius: "5px",
              width: "170px",
            }}
          >
            <Link
              href="https://wa.me/qr/I37QMGAGKDOOA1"
              underline="none"
              color="inherit"
              target="_blank"
            >
              Open WhatsApp{"  "}
              <WhatsApp style={{ verticalAlign: "middle", color: "#06d755" }} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default ContactMe;
