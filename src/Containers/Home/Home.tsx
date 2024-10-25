import React, { useCallback, useEffect, useState } from 'react';
import './Home.css';
import { IPost, IPostAPI } from '../../types';
import axiosAPI from '../../AxiosAPI.ts';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from '../../Components/UI/Loader/Loader.tsx';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosAPI.get<IPostAPI>('posts.json');
      if (response.data) {
        const postsFromApi: IPost[] = Object.keys(response.data).map(postKey => ({
          id: postKey,
          ...response.data[postKey],
          datetime: response.data[postKey].datetime,
        }));
        setPosts(postsFromApi);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const deletePost = async (id: string) => {
    try {
      await axiosAPI.delete(`/posts/${id}.json`);
      setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="homeBlock">
      <div className="container">
        {loading ? <Loader /> : (
          <>
            {posts.length === 0 ? <h3>No posts</h3> : (
              <div className="blogContainer">
                {posts.map((post) => (
                  <div key={post.id} className="onePost">
                    <div className="postHeader">
                      <strong>{post.id}</strong>
                      <p className="postDate">Created on: <strong>{new Date(post.datetime).toLocaleDateString()}</strong></p>
                    </div>
                    <div className="postBody">
                      <p className="postText">
                        <img src="https://www.svgrepo.com/show/530592/creativity.svg" alt="lampAppLogo" />
                        {post.title}
                      </p>
                      <div className="postBtnsContainer">
                        <NavLink to={`posts/${post.id}`} className="postBtn">Read more >></NavLink>
                        <NavLink to={`/posts/${post.id}/edit`} className="additionalPostBtns">
                          <img src="https://www.svgrepo.com/show/433450/edit-o.svg" alt="edit" className="additionalPostImgs" />
                        </NavLink>
                        <button type="button" className="additionalPostBtns" onClick={() => deletePost(post.id)}>
                          <img src="https://www.svgrepo.com/show/488897/delete-2.svg" alt="delete" className="additionalPostImgs" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <Outlet />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
