import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <footer>
      <p>Copyright 2020 - Holberton School</p>

      {isLoggedIn && (
        <a href="#contact">Contact us</a>
      )}
    </footer>
  );
};

export default Footer;