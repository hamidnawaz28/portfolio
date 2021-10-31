import styles from "../../styles/Home.module.css";
import { Grid, Typography, Link } from "@mui/material";
import {
  Facebook,
  YouTube,
  Instagram,
  WhatsApp,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => {
  return {
    footer: {
      width: "100%",
      borderTop: "1px solid #eaeaea",
      backgroundColor: theme.palette.primary.main,
      color: "white",
      paddingTop: 10,
    },
    copyright: {
      textTransform: "uppercase",
      fontSize: 10,
    },
    link: {
      color: "white",
    },
  };
});

const siteLinks: any = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact",
    href: "/contact-us",
  },
  {
    label: "FAQ's",
    href: "/faqs",
  },
];

const email = "info@hamidnawaz.com";

const whatsapp = {
  url: "https://wa.me/message/BQNERPAFPKHYE1",
  qrImg: "others/qr-code.jpg",
  qrAlt: "Hamid Nawaz QR",
};

export default function Footer() {
  const { footer, link, copyright } = useStyles();

  const icons: any = [
    {
      icon: <Facebook fontSize="large" />,
      url: "https://www.facebook.com/",
    },
    {
      icon: <Instagram fontSize="large" />,
      url: "http://www.instagram.com/hamidnawazabbasi",
    },
    {
      icon: <WhatsApp fontSize="large" />,
      url: whatsapp.url,
    },
    {
      icon: <LinkedIn fontSize="large" />,
      url: "https://www.linkedin.com/in/hamidnawaz-",
    },
    {
      icon: <Twitter fontSize="large" />,
      url: "https://twitter.com/hamid_nawaz28",
    },
  ];

  return (
    <footer className={footer}>
      {icons.map((el: any, id: number) => {
        const { url, icon } = el;
        return (
          <Link href={url} target="_blank" className={link} key={id}>
            {icon}
          </Link>
        );
      })}
      <Typography align="center" className={copyright}>
        @Copyright! All Rights Reserved 2021
      </Typography>
    </footer>
  );
}
