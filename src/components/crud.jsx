"use client" 
  
  import React, { useState, useEffect } from "react";
import { supabaseClient } from "app/database/supabase";

const RegisterTable = () => {
  const [registers, setRegisters] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newRegister, setNewRegister] = useState({
    name: "",
    curp: "",
    phone_number: "",
    email: "",
    birthdate: "",
    sex: "",
    address: ""
  });

  useEffect(() => {
    fetchRegisters();
  }, []);

  const fetchRegisters = async () => {
    try {
      const { data, error } = await supabaseClient.from("usuarios").select("*");
      if (error) {
        console.error("Error cargando los registros:", error);
      } else {
        setRegisters(data);
      }
    } catch (error) {
      console.error("Error cargando los registros:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRegister({ ...newRegister, [name]: value });
  };

  const handleAddRegister = async () => {
    try {
      const { data, error } = await supabaseClient.from("usuarios").insert([newRegister]);
      if (error) {
        console.error("Error agregando el registro:", error);
      } else {
        console.log("Registro agregado exitosamente:", data);
        fetchRegisters();
        setNewRegister({
          name: "",
          curp: "",
          phone_number: "",
          email: "",
          birthdate: "",
          sex: "",
          address: ""
        });
      }
    } catch (error) {
      console.error("Error agregando el registro:", error.message);
    }
  };

  const handleDeleteRegister = async (id) => {
    try {
      const { error } = await supabaseClient.from("usuarios").delete().eq("id", id);
      if (error) {
        console.error("Error eliminando el registro:", error);
      } else {
        console.log("Registro eliminado exitosamente");
        fetchRegisters();
      }
    } catch (error) {
      console.error("Error eliminando el registro:", error.message);
    }
  };

  const handleEditRegister = async (register) => {
    try {
      const { data, error } = await supabaseClient.from("usuarios").update(register).eq("id", editingId);
      if (error) {
        console.error("Error editando el registro:", error);
      } else {
        console.log("Registro editado exitosamente:", data);
        fetchRegisters();
        setEditingId(null);
      }
    } catch (error) {
      console.error("Error editando el registro:", error.message);
    }
  };

  const handleEditInputChange = (e, field) => {
    const { value } = e.target;
    const updatedRegister = { ...registers.find((register) => register.id === editingId), [field]: value };
    setRegisters(registers.map((register) => (register.id === editingId ? updatedRegister : register)));
  };

  const handleStartEdit = (id) => {
    setEditingId(id);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  return (
    <>
      <form onSubmit={handleAddRegister}>
        <input type="text" name="name" value={newRegister.name} onChange={handleInputChange} placeholder="Nombres" required />
        <input type="text" name="curp" value={newRegister.curp} onChange={handleInputChange} placeholder="CURP" required />
        {/* Añadir más campos según tus necesidades */}
        <button type="submit">Agregar Registro</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombres</th>
            <th>CURP</th>
            {/* Añadir más encabezados según tus necesidades */}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {registers.map((register, index) => (
            <tr key={register.id}>
              <td>{index + 1}</td>
              <td>{editingId === register.id ? <input value={register.name} onChange={(e) => handleEditInputChange(e, "name")} /> : register.name}</td>
              <td>{editingId === register.id ? <input value={register.curp} onChange={(e) => handleEditInputChange(e, "curp")} /> : register.curp}</td>
              {/* Añadir más celdas según tus necesidades */}
              <td>
                {editingId === register.id ? (
                  <>
                    <button onClick={() => handleEditRegister(register)}>Guardar</button>
                    <button onClick={handleCancelEdit}>Cancelar</button>
                  </>
                ) : (
                  <button onClick={() => handleStartEdit(register.id)}>Editar</button>
                )}
                <button onClick={() => handleDeleteRegister(register.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RegisterTable;
