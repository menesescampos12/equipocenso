"use client";

import { supabaseClient } from "app/database/supabase";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MenuNavbar() {
  //Aquí haremos el manejo de estado para poner un encabezado
  const [encabezado, setEncabezado] = useState("");

  
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary color-menu">
      
      <Container>
        <Image src="/images/logo.jpg" alt="Gobierno" width={100} height={100} />
          
        
        <Navbar.Brand href="#home" className="color-menu titulo-menu">
          
          Bienestar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="color-menu">
              Inicio
            </Nav.Link>
            <Nav.Link href="/registers" className="color-menu">
              Afectados
            </Nav.Link>
          </Nav>
          <form className="form-inline">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Buscar</span>
        </div>
        <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
        
      </div>
    </form>
    <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"></span></a>
              <ul id="login-dp" className="dropdown-menu">
                <li>
                  <div className="row">
                    <div className="col-md-12">
                      Login via
                      <div className="social-buttons">
                        <a href="#" className="btn btn-fb"><i className="fa fa-facebook"></i> Facebook</a>
                        <a href="#" className="btn btn-tw"><i className="fa fa-twitter"></i> Twitter</a>
                      </div>
                      or
                      <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav">
                        <div className="form-group">
                          <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required />
                        </div>
                        <div className="form-group">
                          <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required />
                          <div className="help-block text-right"><a href="">Forget the password ?</a></div>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" /> keep me logged-in
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="bottom text-center">
                      New here ? <a href="#"><b>Join Us</b></a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          
    

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default MenuNavbar;

