import React from "react";
import * as SC from "./../../presentational/components";
import { useTranslation } from "react-i18next";
import CategoryItem from "./CategoryItem";
import { CategoryList } from "./CategoryList";
function Categories() {
  const { t } = useTranslation();
  return (
    <SC.CategoriesContainer display="block">
      <SC.Typo
        fsize="3rem"
        fw="700"
        transform="uppercase"
        display="flex"
        pd="0 1rem"
        bdLeft="0.3em solid #ca786d"
        mg="0 0 0.8rem 0"
      >
        {t("top-categories")}
      </SC.Typo>
      <SC.CategoriesGrid>
        <CategoryItem
          title={t(`${CategoryList[0].dev.title}`)}
          img={CategoryList[0].dev.url}
        />
        <CategoryItem
          title={t(`${CategoryList[0].des.title}`)}
          img={CategoryList[0].des.url}
        />
        <CategoryItem
          title={t(`${CategoryList[0].mkt.title}`)}
          img={CategoryList[0].mkt.url}
        />
        <CategoryItem
          title={t(`${CategoryList[0].bus.title}`)}
          img={CategoryList[0].bus.url}
        />
        <CategoryItem
          title={t(`${CategoryList[0].photo.title}`)}
          img={CategoryList[0].photo.url}
        />
        <CategoryItem
          title={t(`${CategoryList[0].health.title}`)}
          img={CategoryList[0].health.url}
        />
      </SC.CategoriesGrid>
    </SC.CategoriesContainer>
  );
}

export default Categories;
