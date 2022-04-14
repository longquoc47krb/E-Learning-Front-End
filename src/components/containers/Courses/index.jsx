import React, { useState, useEffect } from "react";
import * as SC from "./../styledComponents";
import styled from "styled-components";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import axios from "axios";
import style from "./Course.module.scss";
import CourseItem from "./CourseItem";
import { Loading, Pagination } from "./../../presentational";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImgOverlay,
} from "reactstrap";

export const CoursesContainer = styled.div`
  padding: 0 1rem;
  display: ${(props) => (props.display ? props.display : "static")};
`;
export const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 2rem 2rem;
  margin: ${(props) => (props.mg ? props.mg : "0")};
  padding: ${(props) => (props.pd ? props.pd : "0")};
`;
export function Courses() {
  const { t } = useTranslation();
  const [courses, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(6);

  useEffect(() => {
    setLoading(true);
    const getImages = async (keyword, count) => {
      let client_id = "vMnXHdmz6WhzBIiL-R9zfyNfWqE9Nxpo1v-WBiAuUxU";
      const res = await axios
        .get(
          `https://api.unsplash.com/search/photos?query=${keyword}&per_page=${count}&orientation=landscape&page=1&client_id=${client_id}`
        )
        .then((res) => {
          const { results } = res.data;
          setLoading(false);
          setCourse(results);
        });
    };

    getImages("football", 10);
    console.log(courses);
  }, []);
  // Get current Courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <CoursesContainer>
      <SC.Typo
        fsize="3rem"
        fw="700"
        transform="uppercase"
        display="flex"
        pd="0 1rem"
        bdLeft="0.3em solid #ca786d"
        mg="0 0 0.8rem 0"
      >
        {t("top-courses")}
      </SC.Typo>
      <CoursesGrid>
        {loading ? <Loading /> : <div></div>}
        {courses.map((course) => {
          <Card className={style.card}>
            <div className={style.cardImg}>
              <CardImg top width="100%" src={course.urls.full} />
            </div>
            <CardBody>
              <CardTitle>
                <SC.Typo transform="capitalize">{course.description}</SC.Typo>
              </CardTitle>
            </CardBody>
          </Card>;
        })}
      </CoursesGrid>
      <Pagination
        postsPerPage={coursesPerPage}
        totalPosts={courses.length}
        paginate={paginate}
      />
    </CoursesContainer>
  );
}
