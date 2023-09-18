import "./pagination.scss";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export default function Pagination({ pages, currentPage, setCurrentPage }) {
  const generatePage = [];
  for (let i = 1; i <= pages; i++) {
    generatePage.push(i);
  }
  return (
    <>
      <div className="pagination">
        <div className="container">
          <button
            disabled={currentPage == 1}
            className="page"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <BsArrowLeftCircle />
          </button>
          {generatePage.map((page) => (
            <div
              onClick={() => {
                setCurrentPage(page);
              }}
              key={page}
              className={`page ${currentPage === page && "selected-page"}`}
            >
              {page}
            </div>
          ))}
          <button
            disabled={currentPage == pages}
            className="page"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <BsArrowRightCircle />
          </button>
        </div>
      </div>
    </>
  );
}
