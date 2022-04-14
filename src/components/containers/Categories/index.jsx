import React from "react";
import * as SC from "../styledComponents";
import { useTranslation } from "react-i18next";
import CategoryItem from "./CategoryItem";
import { CategoryList } from "./CategoryList";
import styled from "styled-components";

export const CategoriesContainer = styled.div`
  padding: 0 1rem;
  display: ${(props) => (props.display ? props.display : "static")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "1rem")};
`;
export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1rem 1rem;
  margin: ${(props) => (props.mg ? props.mg : "0")};
  padding: ${(props) => (props.pd ? props.pd : "0")};
`;
export function Categories() {
  const { t } = useTranslation();
  return (
    <CategoriesContainer display="block">
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
      <CategoriesGrid>
        {CategoryList.map((category) => (
          <CategoryItem title={t(`${category.title}`)} img={category.url} />
        ))}
      </CategoriesGrid>
    </CategoriesContainer>
  );
}
