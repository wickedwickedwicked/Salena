import React from 'react';
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const contentStyle = {
  flex: '1',
};

const footerStyle = {
  height: '70px',
  backgroundColor: '#b6857c',
  color: 'white',
  textAlign: 'center',
  lineHeight: '70px',
};

const buttonStyle = {
  backgroundColor: 'transparent', // Make button background transparent
  border: 'none', // Remove border
  color: 'black', // Icon color
  cursor: 'pointer', // Change cursor to pointer on hover
  fontSize: '2rem',
  padding: '10px', // Reduce padding to make button smaller
};


function Footer() {
  return (
    <div style={footerStyle}>

      <a href="https://www.instagram.com/salena_writes/" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
       <button style={buttonStyle}>
      <FaInstagram />
      </button>
      </a>
     

      <a href="https://www.linkedin.com/in/salena-c" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
      <button style={buttonStyle}>
      <FaLinkedin />
      </button>
      </a>

      <a href="https://www.pinterest.com/SalenaGomazz/" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
      <button style={buttonStyle}>
        <FaPinterest />
      </button>
      </a>
      

    </div>
  );
}

export default Footer;
