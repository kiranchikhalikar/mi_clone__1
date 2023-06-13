import React from 'react';
import "../styles/PreNavbar.css";


// const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.15 0 1.75 1.05.6 1.05 0 2.1L34.7 23.25q-.55.95-1.425 1.525t-1.925.575H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4h14.4Z"/></svg>

const PreNavbar = () => {
  return (
    <div className="preNav">
        <div>
            <a href="https://www.mi.com/in/">MI INDIA  </a> <span> |</span>
            <a href="#">GET MI STORE APP  </a> <span> | </span>
            <a href="#"> ONLINE HELP  </a> <span> | </span>
            <a href="#"> RETAIL STORE </a>
        </div>
        <div>
            <a href="#">SIGN IN  </a> <span> |</span>
            <a href="#">SIGN UP  </a> <span> |</span>
            <a href="#"> CART (0)</a>
        </div>

    </div>
  )
}

export default PreNavbar