import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();



export function ContextController({ children }) {
  let intialState = {
    track_list: [],
    isLoading: false,
    heading: ""
    
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    axios
      .get(
        `https://corsrulz.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=6&country=us&f_has_lyrics=1&apikey=a11ce73c2a56efb93bdd577a1031df0a`
      )
      .then(res => {
        // console.log(res.data);
        setState({
          track_list: res.data.message.body.track_list,
          isLoading: true,
          heading: "Paling Dicari"
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
