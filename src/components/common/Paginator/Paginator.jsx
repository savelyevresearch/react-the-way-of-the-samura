import React, { useState } from "react";

import classNames from "classnames";

import paginatorStyleClasses from "./Paginator.module.css";

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageNumberChange,
  portionSize = 10,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pageNumbers = [];

  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }

  const portionsCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);

  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      {pageNumbers
        .filter(
          (pageNumber) =>
            pageNumber >= leftPortionPageNumber &&
            pageNumber <= rightPortionPageNumber
        )
        .map((pageNumber) => {
          return (
            <span
              key={pageNumber}
              onClick={(event) => {
                onPageNumberChange(pageNumber);
              }}
              className={classNames(paginatorStyleClasses.pageNumber, {
                [paginatorStyleClasses.selectedPage]: currentPage == pageNumber,
              })}
            >
              {pageNumber}
            </span>
          );
        })}
      {portionsCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
