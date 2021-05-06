import React from 'react';
import { FaGithub, FaFacebook} from "react-icons/fa";


export default function Footer() {
  const year = new Date().getFullYear();
  return (
    
    <footer>
    <div class = 'icons'> 
        <a href="https://github.com/Cubas93">
        <FaGithub className="icon" />
        </a>
        <a href="https://www.facebook.com/DiagoMicky08">
        <FaFacebook className="icon" />
        </a>
        <p>Diago Montenegro ⓒ {year}</p>
        </div>
      
    </footer>
  );
}
