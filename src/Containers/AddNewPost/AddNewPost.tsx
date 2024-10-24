import React, { FormEvent, useState } from 'react';
import './AddNewPost.css';
import { IPostForm } from '../../types';
import { name } from 'axios';
import AxiosAPI from '../../AxiosAPI.ts';

const initialForm = {
  title: '',
  text: '',
  datetime: new Date(),
}

const AddNewPost = () => {
  const [post, setPost] = useState<IPostForm>({...initialForm});

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setPost(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await AxiosAPI.post('posts.json', {...post});

    console.log(post);

    setPost({...initialForm});
  };

  return (
    <div className="addNewPostBlock">
      <div className="container">
        <h2>Add new post</h2>
        <form className="addNewPostForm" onSubmit={onFormSubmit}>
          <input
            type="text"
            label="Title"
            name="title"
            className="form__input"
            value={post.title}
            placeholder="Enter the title of the post"
            required=""
            onChange={onChangeField}
          />
          <textarea
            className="form__input textInput"
            label="Text"
            name="text"
            value={post.text}
            placeholder="Enter the text of the post"
            onChange={onChangeField}
          ></textarea>
          <button className="formBtn" type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewPost;