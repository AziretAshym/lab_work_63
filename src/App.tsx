import React from 'react';
import Contacts from './Containers/Contacts/Contacts.tsx';
import Header from './Components/Header/Header.tsx';
import Footer from './Components/Footer/Footer.tsx';
import About from './Containers/About/About.tsx';
import Home from './Containers/Home/Home.tsx';
import { Route, Routes } from 'react-router-dom';
import NewPost from './Containers/NewPost/NewPost.tsx';
import EditPost from './Containers/EditPost/EditPost.tsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={(<Home/>)}></Route>
        <Route path="/posts" element={(<Home/>)}></Route>
        <Route path="/posts/new-post" element={(<NewPost/>)}></Route>
        <Route path="/posts/:idPost/edit" element={(<EditPost />)}></Route>
        <Route path="/about" element={(<About/>)}></Route>
        <Route path="/contacts" element={(<Contacts/>)}></Route>
        <Route path="*" element={<h1>Not found</h1>}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;