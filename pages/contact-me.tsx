import { WhatsApp } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import { Seo } from "../components/seo";
import { Footer } from "../containers/footer";

const rootStyle = (theme: Theme) => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "5% 20%",
    [theme.breakpoints.down("sm")]: {
      padding: "5% 2%",
    },
  }
}


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

  return (
    <Box>
      <Seo
        description="Contact me page of hamid nawaz"
        pageTitle="Contact Me"
        contentTitle="Contact Hamid Nawaz"
        pageUrl="/contact-me"
      />
      <Box>
        <Box sx={rootStyle}>
          {contactDetails.map((el, id) => {
            return (
              <Box key={id}>
                <Typography variant="h3">{el.label}</Typography>
                <Box>{el.info}</Box>
              </Box>
            );
          })}
          <Box
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
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
export default ContactMe;
