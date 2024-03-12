"use client";

import { supabaseClient } from "app/database/supabase";
import React, { useState, useEffect } from "react";

const RegisterTable = () => {
  const [registers, setRegisters] = useState([]);

  useEffect(() => {
    const fetchRegisters = async () => {
      const { data, error } = await supabaseClient.from("usuarios").select("*");

      if (error) {
        console.error("Error cargando los registros:", error);
      } else {
        setRegisters(data);

        if (!data) {
          console.error("No hay registros");
        }
      }
    };

    fetchRegisters();
  }, []);





  
  return (
    <>
      
      <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text">Upload</span>
  </div>
  <div className="custom-file">
    <input type="file" className="custom-file-input" id="inputGroupFile01" />
    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
  </div>
</div>

<div className="input-group mb-3">
  <div className="custom-file">
    <input type="file" className="custom-file-input" id="inputGroupFile02" />
    <label className="custom-file-label" htmlFor="inputGroupFile02">Choose file</label>
  </div>
  <div className="input-group-append">
    <span className="input-group-text" id="">Upload</span>
  </div>
</div>

<div className="input-group mb-3">
  <div className="input-group-prepend">
    <button className="btn btn-outline-secondary" type="button">Button</button>
  </div>
  <div className="custom-file">
    <input type="file" className="custom-file-input" id="inputGroupFile03" />
    <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
  </div>
</div>

<div className="input-group">
  <div className="custom-file">
    <input type="file" className="custom-file-input" id="inputGroupFile04" />
    <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
  </div>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div>





      <iframe width="1200" height="400" src="https://www.youtube.com/embed/mnQ4QQWE4PU?si=7JG3O0YuN0bhJOA1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombres</th>
            <th scope="col">CURP</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Email</th>
            <th scope="col">Fecha de nacimiento</th>
            <th scope="col">Sexo</th>
            <th scope="col">Dirección</th>
          </tr>
        </thead>
        <tbody>
          {registers.map((register, index) => (
            <tr key={register.id}>
              <th scope="row">{index + 1}</th>
              <td>{register.name}</td>
              <td>{register.curp}</td>
              <td>{register.phone_number}</td>
              <td>{register.email}</td>
              <td>{register.birthdate}</td>
              <td>{register.sex}</td>
              <td>{register.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RegisterTable;
