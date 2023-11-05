/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import MarkdownPreview from '@uiw/react-markdown-preview';
import Comments from "./Comments";
import dayjs from 'dayjs';

export default function ContentsSection() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [inpDate, setInpDate] = useState('');
  const [post, setPost] = useState({
    ctnt_no: 0,
    ctnt_title: '',
    ctnt_body: '',
    inp_dttm: ''
  });


  useEffect(() => {
    axios.get("https://ztlogapi.com/api/content/" + params.get('no'))
      .then((response) => {
        setPost(Object.assign({}, response.data));
        setInpDate(dayjs(response.data.inp_dttm).format('YYYY년 M월 D일 h시 m분'));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="col-md-10 col-lg-8 col-xl-7">
      <div className="article">
        <div className="post-header">
          <h1>{post.ctnt_title}</h1>
          <hr className="my-4" />
        </div>

        <div className="content-box">
          <br />
          <MarkdownPreview source={post.ctnt_body} wrapperElement={{ "data-color-mode": "light" }} />
          <br />
        </div>
        <div className="post-footer">
          <p className="meta">
            <FontAwesomeIcon icon={faTags} /> Tags1, Tags2, Tags3
          </p>
          <p className="meta">
            <FontAwesomeIcon icon={faCalendarDays} /> {inpDate}
          </p>
        </div>
        <hr className="my-4" />
        <div className="giscus">
          <Comments />
        </div>
      </div>
    </div>
  );
}
