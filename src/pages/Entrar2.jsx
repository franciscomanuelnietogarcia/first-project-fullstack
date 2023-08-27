// About.jsx
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Header from "../components/Header/Header";
import logo from "../assets/images/logo.png";

const Entrar = () => {
  return (
    <section>
      <Header />
      
      <div className="d-flex justify-content-center align-items-center vh-100">
      <form class="form-signin">
      <img
        class="mb-4"
        src={logo}
        alt=""
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">Regístrese</h1>
      <label for="inputEmail" class="sr-only">
        Email
      </label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email"
        required=""
        autofocus=""
      />
      <label for="inputPassword" class="sr-only">
      Contraseña
      </label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Ingresa contraseña"
        required=""
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Acuérdate de mí
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Entrar
      </button>
      <p class="mt-5 mb-3 text-muted"> CoursDev © 2023</p>
    </form>
      </div>
    </section>
  );
};

export default Entrar;

