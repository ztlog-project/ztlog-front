import { useState } from "react";
import Pagination from "react-js-pagination";

const Paging = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page: any) => {
    setPage(page);
  };

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={150}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;
