import React, { useState } from "react";

const Pagination = ({ page, setPage, max }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    if (page < Math.ceil(max)) {
      setInput(parseInt(input) + 1);
      setPage(parseInt(page) + 1);
    }
  };

  const previousPage = () => {
    if (page > 1) {
      setInput(parseInt(input) - 1);
      setPage(parseInt(page) - 1);
    }
  };

  const goToFirstPage = () => {
    setInput(1);
    setPage(1);
  };

  const goToLastPage = () => {
    setInput(Math.ceil(max));
    setPage(Math.ceil(max));
  };

  const pageButtons = [];

  for (let i = 1; i <= Math.ceil(max); i++) {
    if (i === page) {
      pageButtons.push(
        <button key={i} className="pageButton active" disabled>
          {i}
        </button>
      );
    } else if (
      i >= page - 3 &&
      i <= page + 3 &&
      i > 0 &&
      i <= Math.ceil(max)
    ) {
      pageButtons.push(
        <button
          key={i}
          className="pageButton"
          onClick={() => {
            setPage(i);
            setInput(i);
          }}
        >
          {i}
        </button>
      );
    }
  }
  return (
    <article className="pagination">
      <button
        disabled={page === 1}
        className="firstPage"
        onClick={goToFirstPage}
      >
        <i className="fa-solid fa-angle-double-left fa-2x"></i>
      </button>
      <button
        disabled={page === 1}
        className="previousPage"
        onClick={previousPage}
      >
        <i className="fa-solid fa-angle-left fa-2x"></i>
      </button>
      {pageButtons}
      <button
        disabled={page === Math.ceil(max)}
        className="nextPage"
        onClick={nextPage}
      >
        <i className="fa-solid fa-angle-right fa-2x"></i>
      </button>
      <button
        disabled={page === Math.ceil(max)}
        className="lastPage"
        onClick={goToLastPage}
      >
        <i className="fa-solid fa-angle-double-right fa-2x"></i>
      </button>
    </article>
  );
};

export default Pagination;