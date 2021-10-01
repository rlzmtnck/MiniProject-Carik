import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import Spinner from "../Spinner";
import Track from "./Track";

const Tracks = () => {
  const [state] = useContext(Context);
  const [loading, setLoading] = useState(true);
  const { track_list, heading } = state;
  useEffect(() => {
    const timeoutLoad = setTimeout(() => {
      setLoading(false)
    }, 1000);
    return () => clearTimeout(timeoutLoad);
  }, [state]);
  console.log(loading)

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    )
  }

  return (
    <>
      <h3 className="text-center mb-4">{heading}</h3>
      <div className="row">
        {
          (track_list === undefined || track_list.length === 0) ? (
            <>
              <h1 className="text-center mb-4 mt-4">LIRIK TIDAK DITEMUKAN :(</h1>
            </>
          ) : (
            <>
              {track_list.map(item => (
                <Track key={item.track.track_id} track={item.track} />
              ))}
            </>
          )
        }


      </div>
    </>
  );

};

export default Tracks;
