/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import sample from "pages/images/post-sample-image.jpg";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";


export default function ContentsSection() {
  
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  // console.log(params.get('no'));
  const [post, setPost] = useState({
    ctnt_no: 0, 
    ctnt_title: '',
    ctnt_body: '',
    inp_dttm:''
  });

  // let p : any = {}

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/content/" + params.get('no'))
      .then((response) => {
        // console.log(response.data);

        setPost(Object.assign({}, response.data));

        // post = Object.assign({}, post)
        
        // p = Object.assign({}, post)

        // console.log(p)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="col-md-10 col-lg-8 col-xl-7">
      <div className="article">
        <div className="post-header">
          <h1>{post.ctnt_title }</h1>
          {/* <h2 className="subheader">
            Problems look mighty small from 150 miles up
          </h2> */}
        </div>
        <div className="content-box" dangerouslySetInnerHTML={{__html:post.ctnt_body}}>
          {/* {post.ctnt_body} */}
        </div>
        {/* <img src={sample} alt="sample" /> */}
        {/* <a href="#!"
              ><img
                class="img-fluid"
                src="../assets/img/post-sample-image.jpg"
                alt="..."
            /></a> */}
        {/* <span className="caption text-muted">
          To go places and do things that have never been done before – that’s
          what living is all about.
        </span> */}
        
        {/* <p>
          Placeholder text by
          <Link to="http://spaceipsum.com/">Space Ipsum</Link>
          &middot; Images by
          <Link to="https://www.flickr.com/photos/nasacommons/">
            NASA on The Commons
          </Link>
        </p> */}
        <hr className="my-4" />
        <div className="post-footer">
          {/* <p className="meta">
            <FontAwesomeIcon icon={faTags} /> Tags1, Tags2, Tags3
          </p> */}
          <p className="meta">
            <FontAwesomeIcon icon={faCalendarDays} /> {post.inp_dttm}
            2023
          </p>
        </div>
      </div>
    </div>
  );
}
