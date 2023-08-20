import profile from "../../pages/images/profile.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function SideBar() {
  return (
    <aside className="sidebar col-lg-2 col-xl-2">
      {/* // <aside className="sidebar col-md-4 col-lg-3 col-xl-2"> */}
      <div className="author_profile">
        <div className="author__avatar">
          <img src={profile} alt="profile" />
        </div>
        <div className="author__content">
          <div className="author__name" style={{ margin: "auto" }}>
            <div className="line">
              <label>
                <span>zoetrope</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="author__urls-wrapper">
        <ul className="author__urls social-icons">
          <li>
            <Link
              to="#"
              id="location"
              data-tooltip-text="Suwon, Republic of Korea"
            >
              <FontAwesomeIcon icon={faLocationDot} />
              <label htmlFor="location"> Republic of Korea</label>
            </Link>
          </li>
          <li>
            <Link
              to="mailto:chldpwl5620@gmail.com"
              target="_blank"
              id="envelope"
              data-tooltip-text="chldpwl5620@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <label htmlFor="envelope"> Email</label>
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/zoetrope56"
              target="_blank"
              id="github"
              data-tooltip-text="github.com/zoetrope56"
            >
              <FontAwesomeIcon icon={faGithub} />
              <label htmlFor="github"> GitHub</label>
            </Link>
          </li>
          <li>
            <Link
              to="https://twitter.com/tromm_dev"
              target="_blank"
              id="location"
              data-tooltip-text="twitter.com/tromm_dev"
            >
              <FontAwesomeIcon icon={faTwitter} />
              <label htmlFor="location"> Twitter</label>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
