import * as React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import { GrNext, GrPrevious } from "react-icons/gr";
const List = styled("ul")({});

const UsePagination = (props) => {
  /**
   * Custom component built on top of MUI pagination component.
   */

  const { items } = usePagination({
    count: props.pageCount,
    onChange: props.onChangeHandler,
    componentName: "tbody",
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? "bold" : undefined,
                  color: selected ? "white" : undefined,
                  backgroundColor: selected ? "#ca786d" : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" {...item}>
                {type === "next" ? <GrNext /> : <GrPrevious />}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
};

export default UsePagination;
