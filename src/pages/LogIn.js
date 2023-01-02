import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Import des composants

import Footer from "../components/Footer";
import Input from "../components/Input";
import Header from "../components/Header";

const LogIn = ({ handleToken, setId, id }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Veuillez remplir touts les champs");
    } else {
      try {
        const response = await axios.post(
          "https://site--vinted-backend--b4q4rvkfdvcr.code.run/user/login",
          {
            email: email,
            password: password,
          }
        );

        handleToken(response.data.token);
        setId(response.data._id);

        navigate("/");
      } catch (error) {
        if (error.response?.status === 401) {
          setErrorMessage("Le mail ou le monts de passes n'est pas correct");
        }
        if (error.response?.data === "The element missing") {
          setErrorMessage("Veuillez remplir touts les champs");
        }
      }
    }
  };

  return (
    <>
      <Header />
      <form className="connection-form" onSubmit={handleLogin}>
        <h1>Se connecter</h1>
        <Input
          type="email"
          value={email}
          placeholder="Adresse email"
          setFunction={(event) => {
            setEmail(event.target.value);
          }}
        />
        <Input
          type="password"
          value={password}
          placeholder="Mots de passe"
          setFunction={(event) => {
            setPassword(event.target.value);
          }}
        />

        <p className="error">{errorMessage}</p>
        <button className="connection-button" type="submit">
          Se connecter
        </button>
        <Link className="redirection" to="/user/signup">
          Pas encore de compte? Inscris-toi!
        </Link>
      </form>
      <Footer />
    </>
  );
};

export default LogIn;
