import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";

function Paging(cnt: number, total: number)  {
  // const [ctnt, setCtnt] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageChange = (page: any) => {
    setPage(cnt);
  };

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={5}
      totalItemsCount={total}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;
