import { useContext, useEffect, useState } from "react";
import Social from "../../components/social/social";
import Navbar from "../../components/header/header";
import "./User.css";
import { ContextApp } from "../../../AppContext";
import AddPost from "./addUser/AddPost";
import { baseUrl, baseUrlFile } from "../../bases/basesurl";
import { timestampParser } from "../../../Utils";
import {
  BsCheck2Circle,
  BsFileEarmarkPlus,
  BsFillInfoCircleFill,
  BsHourglass,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { FiMoreVertical } from "react-icons/fi";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import swal from "sweetalert";
import axios from "axios";
import { toast } from "react-toastify";
import parse from "html-react-parser";

const User = () => {
  const { userConnected, posts, setPosts } = useContext(ContextApp);

  const [post, setPost] = useState(null);
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(null);

  const userId = userConnected && userConnected.id;

  const postsUser =
    posts &&
    posts.length > 0 &&
    posts.filter((val) => {
      const userID = val && val.userId;
      if (parseInt(userId) === parseInt(userID)) {
        return val;
      }
    });

  const handleDeletePost = async (postID) => {
    swal({
      text: "Etes-vous sûr de vouloir supprimer ce post ?",
      buttons: true,
      dangerMode: true,
    })
      .then(async (willDelete) => {
        if (willDelete) {
          await axios.delete(`${baseUrl}/posts/${postID}`);
          const filterlivreurs =
            posts &&
            posts.length > 0 &&
            posts.filter((val) => val.id !== postID);
          setPosts(filterlivreurs);
          toast.success("Post supprimé avec succès");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Social other={true} />
      <Navbar other={true} />

      <div className="userMain">
        <h2>
          Salut {userConnected && userConnected.prenom}{" "}
          {userConnected && userConnected.nom}
        </h2>

        <div className="dashboard">
          <div className="head">
            <h5>{postsUser && postsUser.length} posts</h5>
            <button onClick={() => setShow(true)}>Ajouter un post</button>
          </div>

          <div className="contentUser">
            {postsUser &&
              postsUser.length > 0 &&
              postsUser.map((val, i) => {
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
                    <div
                      style={{
                        background:
                          val && val.status === false ? "#f3f5f8" : "green",
                        width: "120px",
                        textAlign: "center",
                        borderRadius: "20px",
                        border:
                          val && val.status === false ? "1px solid #999" : "",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                        marginBottom: "1rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "14px",
                          fontFamily: "Alegreya",
                          color: val && val.status === false ? "" : "#fff",
                        }}
                      >
                        {val && val.status === false
                          ? "En attente"
                          : "Approuvé"}
                      </span>
                      {val && val.status === false ? (
                        <BsHourglass size={10} />
                      ) : (
                        <BsCheck2Circle size={10} color="#fff" />
                      )}
                    </div>
                    <div className="desc">
                      {desc && desc.length > 100
                        ? desc &&
                          desc.length > 100 &&
                          parse(desc.substring(0, 100) + "...")
                        : parse(desc)}
                    </div>

                    <div className="contentBtnMore">
                      <span className="date">
                        {timestampParser(val && val.createdAt)}
                      </span>

                      <Popup
                        trigger={
                          <button className="btnMoreOptions">
                            <FiMoreVertical />
                          </button>
                        }
                        position={[
                          "bottom center",
                          "bottom right",
                          "bottom left",
                        ]}
                        closeOnDocumentClick
                      >
                        <div className="btnsLinks">
                          <Link
                            to={{ pathname: "detail" }}
                            state={{ data: val }}
                          >
                            <BsFillInfoCircleFill />
                          </Link>
                          <Link
                            to={{ pathname: "" }}
                            onClick={() => {
                              setShow(true);
                              setPost(val);
                              setIndex(i);
                            }}
                          >
                            <BiEditAlt />
                          </Link>
                          <BiTrash
                            onClick={() => handleDeletePost(val && val.id)}
                          />

                          <BsFileEarmarkPlus />
                        </div>
                      </Popup>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <AddPost
        index={index}
        post={post}
        setPost={setPost}
        setShow={setShow}
        show={show}
      />
    </>
  );
};

export default User;
