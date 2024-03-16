import Social from "../../components/social/social";
import "./Posts.css";
import { timestampParser } from "../../../Utils";
import { useContext } from "react";
import { ContextApp } from "../../../AppContext";
import { baseUrlFile } from "../../bases/basesurl";
import Navbar from "../../components/header/header";
import { useNavigate } from "react-router-dom";
import { BsClock } from "react-icons/bs";

const Posts = () => {
  const { posts } = useContext(ContextApp);

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/sign-up");
  };

  return (
    <>
      <Social other={true} />
      <Navbar other={true} />

      <div className="posts">
        <div className="dashboard">
          <div className="head">
            <h5>{posts && posts.length} posts</h5>
            <button onClick={() => handleRedirect()}>Devenir membre</button>
          </div>

          <div className="contentUser">
            {posts &&
              posts.length > 0 &&
              posts.map((val) => {
                const url = val && val.url;
                const desc = val && val.desc;
                const title = val && val.title;
                return (
                  <div className="card" key={val && val.id}>
                    <div className="contentImage">
                      <div className="overPlay"></div>
                      <img src={baseUrlFile + "/" + url} alt={title} />
                    </div>
                    <h6>
                      {title && title.length > 100
                        ? title &&
                          title.length > 100 &&
                          title.substring(0, 100) + "..."
                        : title}
                    </h6>
                    <div className="desc">
                      {desc && desc.length > 100
                        ? desc &&
                          desc.length > 100 &&
                          desc.substring(0, 100) + "..."
                        : desc}
                    </div>

                    <div className="dateHorloge">
                      <BsClock />
                      <span className="date">
                        {timestampParser(val && val.createdAt)}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
