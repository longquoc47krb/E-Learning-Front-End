/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";
const Slideshow = () => {
  const images = [
    {
      url: "https://cdn.dribbble.com/users/2762684/screenshots/11455380/online_course-01_4x.jpg",
    },
    {
      url: "https://thumbs.dreamstime.com/b/online-education-training-courses-e-learning-distance-exam-preparation-home-schooling-web-banner-background-workplace-monitor-113851546.jpg",
    },
    {
      url: "https://thumbs.dreamstime.com/b/online-education-e-learning-via-digital-device-online-education-e-learning-e-library-via-digital-device-educational-158376937.jpg",
    },
    {
      url: "https://thumbs.dreamstime.com/b/e-learning-student-online-uses-digital-virtual-tablet-education-marketing-commerce-instagram-filter-vector-illustration-151879629.jpg",
    },
    {
      url: "https://thumbs.dreamstime.com/b/online-learning-seniors-concept-banner-header-webinar-internet-lesson-distance-university-tutor-educator-courses-additional-155935451.jpg",
    },
  ];

  //! Sử dụng useEffect, axios để fetch api từ unsplash => hơi lâu
  //  const [images, setImages] = useState([]);
  // const fetchImages = async () => {
  //   let urllist = [];
  //   for (let i = 0; i < 5; i++) {
  //     let config = "vMnXHdmz6WhzBIiL-R9zfyNfWqE9Nxpo1v-WBiAuUxU";
  //     let res = await axios.get(
  //       `https://api.unsplash.com/search/photos?query=e learning&per_page=30&orientation=landscape&page=1&client_id=${config}`
  //     );
  //     urllist.push(res.data.results[i].urls.full);
  //   }
  //   setImages(urllist);
  // };
  // useEffect(() => {
  //   fetchImages();
  // }, []);
  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
    autoplay: true,
    arrows: false,
  };
  return (
    <div>
      <Fade {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index}>
            <img
              style={{ objectFit: "cover", width: "100%", height: "600px" }}
              src={each.url}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
