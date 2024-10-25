import React, { useCallback, useEffect, useState } from "react";
import PostForm from "../../Components/PostForm/PostForm.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { IPost, IPostAPI, IPostForm } from "../../types";
import axiosAPI from "../../AxiosAPI.ts";
import AxiosAPI from "../../AxiosAPI.ts";
import Loader from "../../Components/UI/Loader/Loader.tsx";

const EditPost = () => {
  const [post, setPost] = useState<IPost>();
  const params = useParams<{ idPost: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchOnePost = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const response = await axiosAPI.get<IPostAPI>(`posts/${id}.json`);
      if (response.data) {
        setPost(response.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (params.idPost) {
      void fetchOnePost(params.idPost);
    }
  }, [params.idPost, fetchOnePost]);

  const submitForm = async (post: IPostForm) => {
    try {
      setLoading(true);
      if (params.idPost) {
        await AxiosAPI.put(`posts/${params.idPost}.json`, { ...post });
      }
      navigate("/");
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {post ? (
            <>
              <PostForm postToEdit={post} submitForm={submitForm} />
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default EditPost;
