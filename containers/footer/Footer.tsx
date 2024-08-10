import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp
} from "@mui/icons-material";
import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";


const siteLinks: Record<string, string>[] = [
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
  url: "https://wa.me/qr/I37QMGAGKDOOA1",
  qrImg: "others/qr-code.jpg",
  qrAlt: "Hamid Nawaz QR",
};

interface IconsInterface {
  icon: React.ReactNode
  url: string
}
export default function Footer() {

  const icons: IconsInterface[] = [
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
    <Box sx={(theme) => {
      return {
        width: "100%",
        borderTop: "1px solid #eaeaea",
        backgroundColor: theme.palette.primary.main,
        color: "white",
        paddingTop: 10,
      }
    }}>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        {icons.map((el, id: number) => {
          const { url, icon } = el;
          return (
            <Link href={url} target="_blank" sx={{
              color: "white",
            }} key={id}>
              {icon}
            </Link>
          );
        })}
      </Box>
      <Typography align="center" sx={{
        textTransform: "uppercase",
        fontSize: 10,
      }}>
        @Copyright! All Rights Reserved 2021
      </Typography>
    </Box>
  );
}
