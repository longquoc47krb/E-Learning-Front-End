import React, { useState, useEffect } from "react";
import * as SC from "./../styledComponents";
import styled from "styled-components";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import axios from "axios";
import style from "./Course.module.scss";
import { Loading } from "./../../presentational";
import UsePagination from "../../presentational/Pagination/usePagination";
import { Pagination } from "@mui/material/Pagination";
import CourseItem from "./CourseItem";
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
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const PerPage = 4;
  const firstIndex = page * PerPage;
  const lastIndex = page * PerPage + PerPage;
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get("http://localhost:3000/course");
        setCourses(data.data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  const handleChangePage = (event, newPage) => {
    // set current page as newPage
    setPage(newPage - 1);
  };
  return (
    <div>
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
      <div>
        {loading ? (
          <Loading />
        ) : error ? (
          <h2>Error fetching users</h2>
        ) : (
          <>
            <div className="content">
              <CoursesGrid>
                {courses.slice(firstIndex, lastIndex).map((el) => (
                  <CourseItem
                    title={el.name}
                    img="https://static.vecteezy.com/system/resources/previews/002/037/235/non_2x/marketing-strategy-campaign-concept-vector.jpg"
                    author={el.author}
                    rating={el.rating}
                  />
                ))}
              </CoursesGrid>
              <div className="pagination">
                <UsePagination
                  pageCount={Math.ceil(courses.length / 6)}
                  onChangeHandler={handleChangePage}
                  variant={"text"}
                  className={style.paginationLinks}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
