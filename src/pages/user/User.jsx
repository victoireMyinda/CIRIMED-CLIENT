import React, { useContext, useState } from "react";
import Social from "../../components/social/social";
import Navbar from "../../components/header/header";
import "./User.css";
import { ContextApp } from "../../../AppContext";
import AddPost from "./addUser/AddPost";
import { baseUrlFile } from "../../bases/basesurl";
import { timestampParser } from "../../../Utils";
import ReactPaginate from "react-paginate";

const User = () => {
  const { userConnected, posts } = useContext(ContextApp);

  const [post, setPost] = useState(null);
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(null);

  const postsUser = posts && posts.data;

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 8;

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  function Items({ currentItems }) {
    return (
      <div className="itemsPag">
        {currentItems &&
          currentItems.map((item) => (
            <div key={item}>
              <h3>{}</h3>
            </div>
          ))}
      </div>
    );
  }

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

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
            <h5>{posts && posts.totalItems} posts</h5>
            <button onClick={() => setShow(true)}>Ajouter un post</button>
          </div>

          <div className="contentUser">
            {postsUser &&
              postsUser.length > 0 &&
              postsUser.map((val) => {
                const url = val && val.url;
                const desc = val && val.desc;
                const title = val && val.title;
                return (
                  <div className="card" key={val.id}>
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
                    <span className="date">
                      {timestampParser(val && val.createdAt)}
                    </span>
                  </div>
                );
              })}
          </div>
          <Items currentItems={currentItems} />
          <ReactPaginate
            breakLabel="..."
            nextLabel="Suivant >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            pageCount={posts && posts.totalPages}
            previousLabel="< Retour"
            renderOnZeroPageCount={null}
          />
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
