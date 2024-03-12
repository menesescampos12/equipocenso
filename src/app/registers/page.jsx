
import LayoutFrontal from "app/layout/LayoutFrontal";
import React from "react";
import RegisterTable from "app/components/crud";

const Registers = () => {
  return (
    <>
      <LayoutFrontal>
        <div>REGISTROS</div>
        <RegisterTable />
      </LayoutFrontal>
    </>
  );
};

export default Registers;
