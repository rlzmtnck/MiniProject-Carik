import React from "react";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
const Track = (props) => {
  const { track } = props;

  return (
    <Slide bottom>
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5>{track.artist_name}</h5>
            <p className="card-text">
              <strong>
                <i className="fas fa-play" /> Track
              </strong>
              : {track.track_name}
              <br />
              <strong>
                <i className="fas fa-compact-disc" /> Album
              </strong>
              : {track.album_name}
            </p>
            <Link
              to={`/main/lyrics/track/${track.track_id}`}
              className="btn btn-dark btn-block"
            >
              <i className="fas fa-chevron-right" /> VIEW
            </Link>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Track;
