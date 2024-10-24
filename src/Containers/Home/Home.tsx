import React, { useCallback, useEffect, useState } from 'react';
import './Home.css';
import { IPost, IPostAPI } from '../../types';
import axiosAPI from '../../AxiosAPI.ts';

const Home = () => {
  const [posts, setPosts] =useState<IPost[]>([]);

  const fetchData = useCallback(async () => {
    const response: {data: IPostAPI} =  await axiosAPI<IPostAPI>('posts.json');

    if (response.data) {
      const postsFromApi: IPost[] = Object.keys(response.data).map(postKey => {
        return {
          id: postKey,
          ...response.data[postKey],
          datetime: response.data[postKey].datetime,
        }
      });
      setPosts(postsFromApi);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <div className="homeBlock">
      <div className="container">
        <div className="blogContainer">
          {posts.length === 0 ? <h3>No posts</h3> :
            <>
            {posts.map((post) => (
              <div key={post.id} className="onePost">
                <div className="postHeader">
                  <strong>{post.id}</strong>
                  <p className="postDate">Created on: <strong>{new Date(post.datetime).toLocaleDateString()}</strong></p>
                </div>
                <div className="postBody">
                  <p className="postText">
                    <img src="https://www.svgrepo.com/show/530592/creativity.svg" alt="lampAppLogo"/>
                    {post.title}
                  </p>
                  <div className="postBtnsContainer">
                    <button type="button" className="postBtn">Reade more >></button>
                    <button type="button" className="additionalPostBtns">
                      <img src="https://www.svgrepo.com/show/433450/edit-o.svg" alt="edit"
                           className="additionalPostImgs"/>
                    </button>
                    <button type="button" className="additionalPostBtns">
                      <img src="https://www.svgrepo.com/show/488897/delete-2.svg" alt="delete"
                           className="additionalPostImgs"/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Home;