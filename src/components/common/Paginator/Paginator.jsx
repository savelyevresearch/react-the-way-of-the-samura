import React from "react";

import paginatorStyleClasses from "./Paginator.module.css";

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageNumberChange,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pageNumbers = [];

  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.slice(0, 5).map((pageNumber) => (
        <span
          className={`
                ${
                  currentPage === pageNumber
                    ? paginatorStyleClasses.selectedPage
                    : ""
                } 
              ${paginatorStyleClasses.pageNumber}`}
          key={pageNumber}
          onClick={() => {
            onPageNumberChange(pageNumber);
          }}
        >
          {pageNumber}
        </span>
      ))}
    </div>
  );
};

export default Paginator;
