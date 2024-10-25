import React, { useEffect, useState } from "react";
import "./PostForm.css";
import { IPostForm } from "../../types";

const initialForm = {
  title: "",
  text: "",
  datetime: new Date(),
};

interface Props {
  postToEdit?: IPostForm;
  submitForm: (post: IPostForm) => void;
}

const PostForm: React.FC<Props> = ({ postToEdit, submitForm }) => {
  const [post, setPost] = useState<IPostForm>({ ...initialForm });

  useEffect(() => {
    if (postToEdit) {
      setPost((prevState) => ({
        ...prevState,
        ...postToEdit,
      }));
    }
  }, [postToEdit]);

  const onChangeField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitForm({ ...post });

    if (!postToEdit) {
      setPost({ ...initialForm });
    }
  };

  return (
    <div className="addNewPostBlock">
      <div className="container">
        <h2>{postToEdit ? "Edit post" : "Add new post"}</h2>
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
          <button className="formBtn" type="submit">
            {postToEdit ? "Edit" : "Add new post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
