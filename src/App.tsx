import React from 'react';
import Contacts from './Containers/Contacts/Contacts.tsx';
import Header from './Containers/Header/Header.tsx';
import Footer from './Containers/Footer/Footer.tsx';
import About from './Containers/About/About.tsx';
import Home from './Containers/Home/Home.tsx';
import AddNewPost from './Containers/AddNewPost/AddNewPost.tsx';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <AddNewPost />
      <About />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;