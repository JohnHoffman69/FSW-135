import React from "react"
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div>
 <header role="banner">
        <h1>DigiVote</h1>
        <Link to="/">
          <ul className="utilities">
            <li className="logout warn">
              <a href="">Log Out</a>
            </li>
          </ul>
        </Link>
      </header>
        </div>
    )
}

export default Header