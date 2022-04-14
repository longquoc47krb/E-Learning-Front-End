import React from "react";
import Slideshow from "./Slider";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

import * as SC from "./../styledComponents";
export function HeroBanner() {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="heroSlider">
        <div className="heroSlogan">
          {/* <Typewriter
            options={{
              strings: [
                `${t("slogan.slogan1")}`,
                `${t("slogan.slogan2")}`,
                `${t("slogan.slogan3")}`,
                `${t("slogan.slogan4")}`,
              ],
              autoStart: true,
              loop: true,
            }}
          /> */}
          <SC.Button fsize="24px" fw="700" className="heroButton">
            {t("discover")}
          </SC.Button>
        </div>

        <Slideshow />
      </div>
    </div>
  );
}
