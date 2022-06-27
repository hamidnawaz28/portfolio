import "../styles/globals.css";
import type { AppProps } from "next/app";

import theme from "../components/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Header } from "../containers/header";
import { useState, useEffect } from "react";
import { addADoc, editADoc } from "../firebase";

const getIPData = async () => {
  try {
    const request = await fetch("https://ipinfo.io/json?token=f49864b253a53e");
    let data = await request.json();

    data = {
      ...data,
      appCodeName: navigator?.appCodeName,
      userAgent: navigator?.userAgent,
      product: navigator?.product,
      productSub: navigator?.productSub,
      vendor: navigator?.vendor,
      time: Date(),
    };

    const docId = await addADoc("user-ip", data);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          editADoc("user-ip", docId, {
            ...data,
            lat: position?.coords?.latitude,
            long: position?.coords?.longitude,
          });
        },
        (err) => {
          console.log("Unable to get the location ", err);
        }
      );
    }
  } catch (err) {
    console.log("-----ipinfo----", err);
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const enableLocation = false;
    if (process.env.NODE_ENV != "development" || enableLocation) getIPData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
