import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import axios from "axios";

export default function ContentsList() {

  const url = "/contents?no=";
  const [ctnt, setCtnt] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(10);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/contents?page="+page)
      .then((response) => {

        console.log(response.data);

        setPage(page)
        setCtnt(response.data.results);
        setTotal(response.data.count)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [page]);

  const handlePageChange = (page: any) => {
    setPage(page);
  };

  return (
    <div className="col-md-10 col-lg-8 col-xl-7">
      {ctnt && ctnt.map((e) => (
        <div key={e.ctnt_no} className="post-preview">
          <Link to={url+e.ctnt_no}>
            <h2 className="post-title">{e.ctnt_title}</h2>
            <h3 className="post-subtitle">{e.ctnt_subtitle}</h3>
          </Link>
          <div className="post-meta">
            <p>
              <FontAwesomeIcon icon={faCalendarDays} /> {e.inp_dttm}
              <br />
              {/* <FontAwesomeIcon icon={faTags} /> Tags1, Tags2, Tags3 */}
            </p>
          </div>
          <hr className="my-4" />
        </div>

      ))}

      <div className="d-flex justify-content-center mb-4">
        <Pagination
          activePage={page}
          itemsCountPerPage={5}
          totalItemsCount={total}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}
