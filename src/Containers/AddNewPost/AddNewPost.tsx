import React from 'react';
import './AddNewPost.css';

const AddNewPost = () => {
  return (
    <div className="addNewPostBlock">
      <div className="container">
        <h2>Add new post</h2>
        <form className="addNewPostForm">
          <input type="text" className="form__input" placeholder="Enter the title of the post" required=""/>
          <textarea className="form__input textInput" placeholder="Enter the text of the post"></textarea>
          <button className="formBtn" type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewPost;