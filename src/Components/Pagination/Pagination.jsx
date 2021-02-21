import React from "react";
import TablePagination from "@material-ui/core/TablePagination";

const Pagination = (props) => {
  const { rowsPerPage = 1, total = 0, page = 0 } = props;

  return (
    <TablePagination
      component="div"
      count="3"
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[
        {
          value: 10,
          label: 10,
        },
        {
          value: 25,
          label: 25,
        },
        {
          value: 50,
          label: 50,
        },
        {
          value: 100,
          label: 100,
        },
        {
          value: 500,
          label: 500,
        },
        {
          value: 1000,
          label: 1000,
        },
      ]}
    />
  );
};

export default Pagination;
