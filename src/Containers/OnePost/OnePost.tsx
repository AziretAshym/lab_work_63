import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosAPI from "../../AxiosAPI.ts";
import { IPost } from "../../types";
import Loader from "../../Components/UI/Loader/Loader";

const OnePost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<IPost | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchOnePost = async () => {
    setLoading(true);
    try {
      const response = await axiosAPI.get<IPost>(`/posts/${id}.json`);
      setPost(response.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      void fetchOnePost();
    }
  }, [id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="onePost">
            {post ? (
              <>
                <div className="postHeader">
                  <p className="postDate">
                    Created on:{" "}
                    <strong>
                      {new Date(post.datetime).toLocaleDateString()}
                    </strong>
                  </p>
                  <img
                    src="https://www.svgrepo.com/show/530592/creativity.svg"
                    alt="lampAppLogo"
                    className="postLogo"
                    style={{ width: "40px" }}
                  />
                </div>
                <div className="postBody">
                  <p className="postText">{post.title}</p>
                  <p>{post.text}</p>
                </div>
              </>
            ) : (
              <p>Post not found</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default OnePost;
