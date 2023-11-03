import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import axios from "axios";
import dayjs from 'dayjs';

export default function ContentsList() {

  const [inpDate, setInpDate] = useState('');

  const listWraper = {
    height: "1050px"
  }

  const prevewWraper = {
    height: "963.8px"
  }

  const url = "/contents?no=";
  const [ctnt, setCtnt] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(10);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/contents?page=" + page)
      .then((response) => {
        setPage(page)
        setCtnt(response.data.results);
        setTotal(response.data.count);
        setInpDate(dayjs(response.data.inp_dttm).format('YYYY년 M월 D일 h시 m분'));

      })
      .catch(function (error) {
        console.log(error);
      });
  }, [page]);

  const handlePageChange = (page: any) => {
    setPage(page);
  };

  return (
    <div className="col-md-10 col-lg-8 col-xl-7" style={listWraper}>
      <div style={prevewWraper}>
        {ctnt && ctnt.map((e) => (
          <div key={e.ctnt_no} className="post-preview">
            <Link to={url + e.ctnt_no}>
              <h2 className="post-title">{e.ctnt_title}</h2>
              <h3 className="post-subtitle">{e.ctnt_subtitle}</h3>
            </Link>
            <div className="post-meta">
              <p>
                <FontAwesomeIcon icon={faTags} /> Tags1, Tags2, Tags3
              </p>
              <p>
                <FontAwesomeIcon icon={faCalendarDays} /> {inpDate}
              </p>
            </div>
            <hr className="my-4" />
          </div>

        ))}
      </div>
      <div className="d-flex justify-content-center mb-4 pagnation">
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
