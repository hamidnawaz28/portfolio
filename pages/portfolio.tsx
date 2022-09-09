import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { Typography, Link } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import { Footer } from "../containers/footer";
import { Seo } from "../components/seo";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .swiper-pagination": {
      color: "red",
      backgroundColor: "red",
    },
  },
}));

const Portfolio = () => {
  const { root } = useStyles();
  return (
    <div>
      <Seo
        description="Hamid nawaz portfolio"
        pageTitle="Portfolio"
        contentTitle="Hamid nawaz portfolio"
        pageUrl="/portfolio"
      />
      <main>
        <div className={root}>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/portfolio/thrift/submit_item.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/portfolio/thrift/submit_item_2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Portfolio;
