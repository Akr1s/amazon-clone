import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../../database";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const validateEmail = (value) => {
    setEmail(value);

    if (!value) {
      setError((error) => ({ ...error, email: "Email is required" }));
      return;
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        value
      )
    ) {
      setError((error) => ({ ...error, email: "Email is incorect" }));
      return;
    }
    setError((error) => ({ ...error, email: "" }));
  };

  const validatePassword = (value) => {
    setPassword(value);

    if (!value) {
      setError((error) => ({ ...error, password: "Password is required" }));
      return;
    } else if (password.length < 5) {
      setError((error) => ({ ...error, password: "Password is too short" }));
      return;
    }
    setError((error) => ({ ...error, password: "" }));
  };

  useEffect(() => {
    validateEmail(email);
    validatePassword(password);
  }, []);

  const signIn = (e) => {
    e.preventDefault();

    if (!error.password.length && !error.email.length) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth) {
            history.push("/");
          }
        })
        .catch((error) => alert(error.message));
    }
  };
  const register = (e) => {
    e.preventDefault();
    if (!error.password.length && !error.email.length) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth) {
            history.push("/");
          }
        })
        .catch((error) => alert(error.message));
    }
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="login_logo"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => validateEmail(e.target.value)}
          />
          <div className="errorInField">{error.email}</div>
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => validatePassword(e.target.value)}
          />
          <div className="errorInField">{error.password}</div>
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By singing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookie Notice and our
          Interest Based Ads Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon acount
        </button>
      </div>
    </div>
  );
}

export default Login;
