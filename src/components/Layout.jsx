import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderWrapper from './HeaderWrapper';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <HeaderWrapper />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;