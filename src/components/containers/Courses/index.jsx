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
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const PerPage = 4;
  const firstIndex = page * PerPage;
  const lastIndex = page * PerPage + PerPage;
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(
          "https://random-data-api.com/api/nation/random_nation?size=50"
        );
        setPeople(data.data);
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
              <div className="items">
                {people.slice(firstIndex, lastIndex).map((el) => (
                  <div className="item" key={el.uid}>
                    <img
                      src={`https://avatars.dicebear.com/api/miniavs/${el.first_name}.svg`}
                      alt={`${el.username} profile`}
                      className="item__img"
                    />

                    <div className="item__info">
                      <p className="nationality">
                        Nationality: {el.nationality}
                      </p>
                      <p className="lang">Language: {el.language}</p>
                      <p className="capital">{el.capital}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination">
                <UsePagination
                  pageCount={Math.ceil(people.length / 4)}
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
