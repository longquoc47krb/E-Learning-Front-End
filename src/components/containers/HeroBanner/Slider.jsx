/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";
const Slideshow = () => {
  const [images, setImages] = useState([]);
  const fetchImages = async () => {
    let urllist = [];
    for (let i = 0; i < 5; i++) {
      let config = "vMnXHdmz6WhzBIiL-R9zfyNfWqE9Nxpo1v-WBiAuUxU";
      let res = await axios.get(
        `https://api.unsplash.com/search/photos?query=e learning&per_page=30&orientation=landscape&page=1&client_id=${config}`
      );
      urllist.push(res.data.results[i].urls.full);
    }
    setImages(urllist);
  };
  useEffect(() => {
    fetchImages();
  }, []);
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
              src={each}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
