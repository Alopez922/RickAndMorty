import React, { useState } from "react";
import "./paginado.css";

export default function Paginado({ charactersPerPage, allCharacters, paginado }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
    paginado(pageNumber);
  };

  const handlePrevClick = (event) => {
    event.preventDefault();
    setCurrentPage(currentPage - 1);
    paginado(currentPage - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    setCurrentPage(currentPage + 1);
    paginado(currentPage + 1);
  };

  return (
    <nav className="paginador">
      <ul className="number">
        {currentPage > 1 && (
          <li className="number">
            <button onClick={handlePrevClick}>Anterior</button>
          </li>
        )}
        {pageNumbers.slice(currentPage - 1, currentPage + 4).map((number) => (
          <li className="number" key={number}>
            <button
              onClick={(event) => handleClick(event, number)}
              className={number === currentPage ? "active" : ""}
            >
              {number}
            </button>
          </li>
        ))}
        {currentPage < pageNumbers.length && (
          <li className="number">
            <button onClick={handleNextClick}>Siguiente</button>
          </li>
        )}
      </ul>
    </nav>
  );
}