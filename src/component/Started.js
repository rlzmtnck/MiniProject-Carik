import React from "react";

import Tracks from './tracks/Tracks'
import Search from './tracks/Search'
import HeaderBiasa from "./HeaderBiasa";

const Started = () => {
  return (
    <React.Fragment>
     <div className="container">
        <HeaderBiasa/>
        <Search/>
        <Tracks/>
     </div>
    </React.Fragment>
  );
};

export default Started;
