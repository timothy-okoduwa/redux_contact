import React from "react";
import Heropage from "./Heropage";
import Down from "./Down";
const Allcomponents = () => {
  return (
    <div style={{ paddingTop: "60px", flexDirection: "row" }}>
      <Heropage />
      <Down />
    </div>
  );
};

export default Allcomponents;
