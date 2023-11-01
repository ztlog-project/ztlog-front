/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import sample from "pages/images/post-sample-image.jpg";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import MarkdownPreview from '@uiw/react-markdown-preview';
import Comments from "./Comments";

export default function ContentsSection() {
  const commentsEl = useRef<HTMLDivElement>(null);
  const theme = 'dark_dimmed';

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [post, setPost] = useState({
    ctnt_no: 0,
    ctnt_title: '',
    ctnt_body: '',
    inp_dttm: ''
  });

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/content/" + params.get('no'))
      .then((response) => {
        setPost(Object.assign({}, response.data));

        const scriptEl = document.createElement("script");
        scriptEl.async = true;
        scriptEl.src = "https://giscus.app/client.js";
        scriptEl.setAttribute("repo", "zoetrope56/devlog-comments");
        scriptEl.setAttribute("repo-id", "R_kgDOKnxXWg");
        scriptEl.setAttribute("data-strict", "0");
        scriptEl.setAttribute("data-reactions-enabled", "1");
        scriptEl.setAttribute("data-emit-metadata", "0");
        scriptEl.setAttribute("data-input-position", "bottom");
        scriptEl.setAttribute("data-theme", "light");
        scriptEl.setAttribute("data-lang", "ko");
        scriptEl.setAttribute("crossorigin", "anonymous");
        commentsEl.current?.appendChild(scriptEl);

      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    iframe?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
  })

  return (
    <div className="col-md-10 col-lg-8 col-xl-7">
      <div className="article">
        <div className="post-header">
          <h1>{post.ctnt_title}</h1>
          <hr className="my-4" />
        </div>
        <p>
          Never in all their history have men been able truly to conceive of the
          world as one: a single sphere, a globe, having the qualities of a
          globe, a round earth in which all the directions eventually meet, in
          which there is no center because every point, or none, is center — an
          equal earth which all men occupy as equals. The airman's earth, if
          free men make it, will be truly round: a globe in practice, not in
          theory.
        </p>
        <p>
          Science cuts two ways, of course; its products can be used for both
          good and evil. But there's no turning back from science. The early
          warnings about technological dangers also come from science.
        </p>
        <p>
          What was most significant about the lunar voyage was not that man set
          foot on the Moon but that they set eye on the earth.
        </p>
        <p>
          A Chinese tale tells of some men sent to harm a young girl who, upon
          seeing her beauty, become her protectors rather than her violators.
          That's how I felt seeing the Earth for the first time. I could not
          help but love and cherish her.
        </p>
        <p>
          For those who have seen the Earth from space, and for the hundreds and
          perhaps thousands more who will, the experience most certainly changes
          your perspective. The things that we share in our world are far more
          valuable than those which divide us.
        </p>

        <div className="content-box">
          <img src={sample} alt="sample" />
          <span className="caption text-muted">
            To go places and do things that have never been done before – that’s
            what living is all about.
          </span>
          <p>
            Space, the final frontier. These are the voyages of the Starship
            Enterprise. Its five-year mission: to explore strange new worlds, to
            seek out new life and new civilizations, to boldly go where no man has
            gone before.
          </p>
          <p>
            As I stand out here in the wonders of the unknown at Hadley, I sort of
            realize there’s a fundamental truth to our nature, Man must explore,
            and this is exploration at its greatest.
          </p>
          <p>
            Placeholder text by
            <Link to="http://spaceipsum.com/">Space Ipsum</Link>
            &middot; Images by
            <Link to="https://www.flickr.com/photos/nasacommons/">
              NASA on The Commons
            </Link>
          </p>
          <br />
          <MarkdownPreview source={post.ctnt_body} wrapperElement={{ "data-color-mode": "light" }} />
          <br />
        </div>

        <div className="post-footer">
          <p className="meta">
            <FontAwesomeIcon icon={faTags} /> Tags1, Tags2, Tags3
          </p>
          <p className="meta">
            <FontAwesomeIcon icon={faCalendarDays} /> {post.inp_dttm}
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
