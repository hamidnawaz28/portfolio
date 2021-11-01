import "../styles/globals.css";
import type { AppProps } from "next/app";

import theme from "../components/theme";
import { ThemeProvider } from "@mui/material";
import { Header } from "../containers/header";
import { useState, useEffect } from "react";
import { addADoc } from "../firebase";

function MyApp({ Component, pageProps }: AppProps) {
  const [data, getData] = useState({});

  function getLocation(getIPData: Function) {
    if (navigator.geolocation) {
      const loc = navigator.geolocation.getCurrentPosition(
        (position) => {
          getIPData({ success: true, data: position.coords });
        },
        () => {
          getIPData({ success: false });
        }
      );
    }
  }

  const getIPData = async (res: any) => {
    try {
      const request = await fetch(
        "https://ipinfo.io/json?token=f49864b253a53e"
      );
      let data = await request.json();
      if (res.success) {
        data = { ...data, ...res.data };
      }
      getData(data);
      addADoc("user-ip", data);
    } catch (err) {
      console.log("-----ipinfo----", err);
    }
  };

  useEffect(() => {
    const loc = getLocation(getIPData);
    console.log("---Loc---", loc);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
