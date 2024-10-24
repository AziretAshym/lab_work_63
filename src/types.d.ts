export interface IPostForm {
  title: string;
  text: string;
}

export interface IPost {
  id: string;
  title: string;
  text: string;
  datetime: string;
}

export interface IPostAPI {
  [id: string]: IPost;
}

