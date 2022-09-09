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
import "swiper/css/effect-fade";

import { Pagination, Navigation, EffectFade } from "swiper";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "auto",
    "& .swiper-pagination": {},
    "& .swiper-button-prev": {
      color: theme.palette.common.black,
    },
    "& .swiper-button-next": {
      color: theme.palette.common.black,
    },
    "& .swiper-slide-title": {
      color: "red",
    },
    "& .swiper-slide>img": {
      width: "-webkit-fill-available",
    },
  },
}));
const portfolioPath = [
  "thrift/submit_item_2",
  "thrift/bulk_upload",
  "thrift/db",
  "thrift/login",
  "thrift/product_details",
  "thrift/search_results",
  "thrift/settings",
  "thrift/submit_item",
  "thrift/submitted_items_detail",
  "thrift/test_data",
  "robolyx/admin_control",
  "robolyx/dashboard",
  "robolyx/ledger_control",
  "robolyx/login",
  "robolyx/manage_rules",
  "robolyx/mapping",
  "robolyx/new_rule",
  "robolyx/rule_summary",
  "robolyx/taxonomy_page",
  "robolyx/upload_documents",
  "saaspi/current_standing",
  "saaspi/dashboard",
  "saaspi/growth_graph",
  "saaspi/industry_benchmark",
  "saaspi/revenue_graph",
  "saaspi/saaspi_library",
  "saaspi/vc_deal_analyser",
  "saaspi/youtube_embedd_video_library",
];
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
            effect="creative"
            modules={[Pagination, Navigation, EffectFade]}
            pagination={{
              clickable: true,
            }}
            style={{
              height: "100vh",
            }}
            navigation={true}
            className="mySwiper"
            scrollbar={{ draggable: true }}
            slidesPerView={1}
            centeredSlides={true}
          >
            {portfolioPath.map((link, id) => {
              return (
                <SwiperSlide
                  key={id}
                  title="Hamid"
                  placeholder="dsdddddddddddddddd"
                  about="about"
                  accessKey="hamid"
                  className="hamid"
                  contextMenu="hamid"
                  dir="hamid"
                  id="hamid"
                  lang="hamid"
                  slot="hamid"
                  defaultValue="hamid"
                  datatype="hamid"
                  prefix="hamid"
                  property="hamid"
                  resource="hamid"
                  typeof="hamid"
                  vocab="hamid"
                  // Non-standard Attributes
                  autoCapitalize="hamid"
                  autoCorrect="hamid"
                  autoSave="hamid"
                  color="hamid"
                  itemProp="hamid"
                  itemType="hamid"
                  itemID="hamid"
                  itemRef="hamid"
                  security="hamid"
                >
                  <img src={`/portfolio/${link}.png`} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Portfolio;
