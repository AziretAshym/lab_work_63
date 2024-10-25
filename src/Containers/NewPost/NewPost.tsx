import React, { useState } from 'react';
import PostForm from '../../Components/PostForm/PostForm.tsx';
import { IPostForm } from '../../types';
import AxiosAPI from '../../AxiosAPI.ts';
import Loader from '../../Components/UI/Loader/Loader.tsx';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate();

  const submitForm = async (post: IPostForm) => {
    try {
      setLoading(true)
      await AxiosAPI.post('posts.json', {...post});
      navigate('/')
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {loading ? <Loader /> : <PostForm submitForm={submitForm}/>
      }
    </>
  );
};

export default NewPost;