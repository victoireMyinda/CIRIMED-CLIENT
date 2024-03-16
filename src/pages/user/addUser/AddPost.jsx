import React, { useContext, useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { FiX } from "react-icons/fi";
import axios from "axios";
import { toast } from "react-toastify";
import { ContextApp } from "../../../../AppContext";
import { baseUrl, baseUrlFile } from "../../../bases/basesurl";
import "./AddUser.css";
import JoditEditor from "jodit-react";

const AddUser = ({ setShow, show, post, setPost, index }) => {
  const { userConnected, setPosts, posts, getAllPosts } =
    useContext(ContextApp);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post && post.title);
      setDesc(post && post.desc);
      setFile(post && post.url);
    }
  }, [post, posts, index]);

  const [clic, setClic] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setClic(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("desc", desc);
      formData.append("file", file);
      formData.append("userId", userConnected && userConnected.id);

      if (post) {
        await axios.put(`${baseUrl}/posts/${post && post.id}`, formData);
        getAllPosts();
        setClic(false);
        setShow(false);
        setTitle("");
        setDesc("");
        setFile("");
        setPost(null);
        toast.success("Post modifié");
      } else {
        let { data } = await axios.post(`${baseUrl}/posts`, formData);
        if (posts && posts.length > 0) {
          setPosts([...posts, data]);
        } else {
          setPosts([data]);
        }

        setClic(false);
        toast.success("Post ajouté avec succès");
      }
    } catch (error) {
      console.log(error);
      const err =
        error &&
        error.response &&
        error.response.data &&
        error.response.data.messageError;
      toast.error(err);
      setClic(false);
    }
  };

  const editor = useRef(null);

  console.log(desc);

  return (
    <Modal show={show} className="addUser">
      <Modal.Header style={{ backgroundColor: "#fff", color: "#111" }}>
        <div className="headAdd">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>
              {post
                ? `Modification de ${post && post.title}`
                : "Ajout d'un nouveau post"}
            </span>
            {post && (
              <img
                style={{ width: "30px", height: "30px", borderRadius: "60px" }}
                src={baseUrlFile + "/" + post.url}
                alt=""
              />
            )}
          </div>

          <button
            onClick={() => {
              setShow(false);
              setTitle("");
              setDesc("");
              setFile("");
              post && setPost(null);
            }}
            style={{
              border: 0,
              background: "transparent",
            }}
          >
            <FiX style={{ cursor: "pointer" }} color="#333" size={25} />
          </button>
        </div>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Titre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Entrer un titre"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label>Description</label>

            <JoditEditor
              ref={editor}
              tabIndex={1}
              value={desc}
              onBlur={(newContent) => setDesc(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(e) => {}}
            />
          </div>

          <br />

          <div>
            <label>Choisir une photo</label>
            <input
              type="file"
              className="form-control"
              placeholder="Numéro de téléphone"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="button">
            <button
              className="save"
              style={{
                opacity: title && desc ? (clic ? 0.5 : 1) : 0.5,
              }}
              disabled={
                post ? false : title && desc ? (clic ? true : false) : true
              }
            >
              {clic
                ? post
                  ? "Modification..."
                  : "Ajout..."
                : post
                ? "Modifier"
                : "Ajouter"}
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};
export default AddUser;
