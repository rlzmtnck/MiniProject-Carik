import React, { useContext } from "react";
import { Context } from "../../context";
import Spinner from "../Spinner";
import Track from "./Track";

const Tracks = () => {
  const [state] = useContext(Context);
  const { track_list, heading, isLoading } = state;
  
  if (track_list === undefined || track_list.length === 0) {
    return <Spinner />;
    
  } else {
    console.log("Ini track", track_list)
    return (
      
      <>
        
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {track_list.map(item => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </div>
      </>
    );
  }
};

export default Tracks;
