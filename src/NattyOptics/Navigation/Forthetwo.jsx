import React, { useState } from "react";
import Mobilenav from "./Mobilenav";
import Webnav from "./Webnav";

const Forthetwo = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Webnav toggle={toggle} />
      <Mobilenav toggle={toggle} open={open} />
    </div>
  );
};

export default Forthetwo;
