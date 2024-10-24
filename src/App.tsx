import React from 'react';
import Contacts from './Containers/Contacts/Contacts.tsx';
import Header from './Containers/Header/Header.tsx';
import Footer from './Containers/Footer/Footer.tsx';
import About from './Containers/About/About.tsx';
import Home from './Containers/Home/Home.tsx';
import AddNewPost from './Containers/AddNewPost/AddNewPost.tsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={(<Home/>)}></Route>
        <Route path="new-post" element={(<AddNewPost/>)}></Route>
        <Route path="about" element={(<About/>)}></Route>
        <Route path="contacts" element={(<Contacts/>)}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;