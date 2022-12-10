import React from "react";

import preloader from "../../../assets/imgs/preloader.gif";

const Preloader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={preloader} alt="In progress.." />
    </div>
  );
};

export default Preloader;
