import logo from "../assets/images/logo.png";

import { Link } from "react-router-dom";

import MenuBar from "./MenuBar";
import SelectLanguage from "./SelectLanguage";

const Header = ({ token, handleToken }) => {
  return (
    <>
      <header>
        <div className="container">
          <div className="enTête">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
            <div className="menu-bar">
              {token ? (
                <>
                  <button
                    onClick={() => handleToken(null)}
                    className="deconnection"
                  >
                    Deconnexion
                  </button>

                  <Link to="/offer/publish">
                    <button className="sell">Vends tes article </button>
                  </Link>
                  <button className="help">?</button>
                  <SelectLanguage />
                </>
              ) : (
                <div className="buttons-enTête">
                  <div className="authantification">
                    <Link to="/user/signup">
                      <button className="register">S'inscrire</button>
                    </Link>

                    <Link to="/user/login">
                      <button className="connect">Se connecter</button>
                    </Link>
                  </div>
                  <Link to="/offer/publish">
                    <button className="sell">Vends tes article </button>
                  </Link>

                  <button className="help">?</button>
                  <SelectLanguage />
                </div>
              )}
            </div>

            {/* <Link
              className="show"
              to={token ? ("/", handleToken(null)) : "/user/login"}
            >
              <i className="fa-solid fa-circle-user show"></i>
            </Link> */}

            <i className="fa-solid fa-bars show"></i>
          </div>
        </div>
      </header>
      <header>
        <div className="top-bar">
          <MenuBar />
        </div>
      </header>
    </>
  );
};
export default Header;
