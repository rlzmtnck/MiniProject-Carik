import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();

export function ContextController({ children }) {
  let intialState = {
    track_list: [],

    heading: "",
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    axios
      .get(
        `https://corsrulz.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=6&country=us&f_has_lyrics=1&apikey=d0d08ebbacb4cd5b7e12e465bad4255b`
      )
      .then((res) => {
        // console.log(res.data);
        setState({
          track_list: res.data.message.body.track_list,

          heading: "Paling Dicari",
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
