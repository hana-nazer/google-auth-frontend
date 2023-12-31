import React from "react";
import NavStyles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className={NavStyles.mainNav}>
      <div>
        <h3>Lsystem</h3>
      </div>
      <div>
        <i class="fa-solid fa-user"></i>
        <div>
          <span className="d-blcok">Account</span>
          <div className={NavStyles.container2}>
            <Link
              className={`d-block ${NavStyles.linkBTN}`}
              to="/account/login"
            >
              Login
            </Link>
            <span className={NavStyles.or}>or</span>
            <Link className={NavStyles.linkBTN} to="account/signup">
              Singup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
