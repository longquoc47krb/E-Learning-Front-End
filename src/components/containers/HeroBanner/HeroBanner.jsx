import React from "react";
import style from "./HeroBanner.module.scss";
import Slideshow from "./Slider";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

import * as SC from "./../../presentational/components";
function HeroBanner() {
  const { t } = useTranslation();
  return (
    <div className={style.hero}>
      <div className={style.heroSlider}>
        <div className={style.heroSlogan}>
          <Typewriter
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
          />
          <SC.Button fsize="24px" fw="700" className={style.heroButton}>
            {t("started")}
          </SC.Button>
        </div>

        <Slideshow />
      </div>
    </div>
  );
}

export default HeroBanner;
