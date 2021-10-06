import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../context";
import "./track.css";

const Search = () => {
  const [state, setState] = useContext(Context);

  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://corsrulz.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=d0d08ebbacb4cd5b7e12e465bad4255b`
      )
      .then((res) => {
        let track_list = res.data.message.body.track_list;
        setState({ track_list: track_list, heading: "Hasil Pencarian" });
      })
      .catch((err) => console.log(err));
  }, [trackTitle]);

  const searchTrack = (e) => {
    e.preventDefault();
    setTrackTitle(userInput);
  };

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">Search For A Song</h1>
      <p className="lead text-center">Dapatkan lirik dari musik favoritmu</p>
      <form onSubmit={searchTrack}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Judul Lagu..."
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-custom btn-lg btn-block mb-5" type="submit">
          Jelajahi Lirik
        </button>
      </form>
    </div>
  );
};

export default Search;
