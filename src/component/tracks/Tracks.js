import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import Spinner from "../Spinner";
import Track from "./Track";
import "./css/notfound.css"
import Fade from 'react-reveal/Fade';
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
              <Fade bottom>
                <div id="notfound1">
                  <div class="notfound1">
                    <div class="notfound-4041">
                      <h1>
                        4<span></span>4
                      </h1>
                    </div>
                    <h2>Oops! Lyric not Found :(</h2>
                    <p>
                      Sorry but the lyric you are looking for does not exist.
                    </p>
                  </div>
                </div>
              </Fade>
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
