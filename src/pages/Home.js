import React, { useContext, useState, useEffect } from "react";

import HeaderHome from "../component/HeaderHome";
import Slide from "react-reveal/Slide";
import Pulse from "react-reveal/Pulse";

import Footer from "../component/Footer";
import useSubmitComment from "../hook/useSubmitComment";
import useDeleteComment from "../hook/useDeleteComment";
import useGetComment from "../hook/useGetComment";
import { Context } from "../context";
import TopTracks from "../component/tracks/TopTracks";
import "../component/style.css";
import { Spinner } from "react-bootstrap";

const Home = () => {
  const initialData = {
    nama: "",
    message: "",
  };
  const [errNama, setErrNama] = useState("");
  const [errMsge, setErrMsge] = useState("");
  const [state] = useContext(Context);
  const [user, setUser] = useState(initialData);
  const { submitComment, loadingSubmit } = useSubmitComment();
  const { deleteComment, loadingDelete } = useDeleteComment();

  const { data, error, loading, SubscribeComment } = useGetComment();
  useEffect(() => {
    SubscribeComment();
  }, []);
  if (loading || loadingSubmit || loadingDelete) {
    <>
      <Spinner />
    </>;
  }
  if (error) {
    console.log(error);
    return null;
  }
  const { track_list } = state;

  // Handle
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const re = /^[A-Za-z ]+$/;
    if (name === "nama")
      re.test(value) && value !== ""
        ? setErrNama("")
        : setErrNama("Nama tidak boleh kosong dan harus berupa huruf");
    if (name === "message")
      value !== "" ? setErrMsge("") : setErrMsge("Harus Di isi");
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onSubmitData = (e) => {
    e.preventDefault();
    if (errNama !== "" || errMsge !== "") {
      return alert("Komentar Tidak boleh kosong");
    } else {
      submitComment({
        variables: {
          object: {
            nama: user.nama,
            message: user.message,
          },
        },
      });
    }

    setUser(initialData);
  };
  const onDeleteItem = (idx) => {
    deleteComment({
      variables: {
        id: idx.target.value,
      },
    });
  };
  console.log(data);
  return (
    // <HeaderBiasa/

    <>
      <HeaderHome />
      <div className="container-fluid kontens">
        <div className="tittles">Top</div>
        <div className="tittles mb-4">Tracks</div>

        <Slide bottom>
          <div className="row container mt-3 ml-1">
            {track_list.map((item) => (
              <TopTracks key={item.track.track_id} track={item.track} />
            ))}
          </div>
        </Slide>

        <div className="tittles mt-5">Review</div>
        <div className="tittles">Your</div>
        <div className="tittles">Experience</div>

        <Slide bottom>
          <div className="kartu">
            <form className="formbro" onSubmit={(e) => onSubmitData(e)}>
              <div className="form-group">
                <label for="nama">Nama</label>
                <input
                  type="text"
                  onChange={handleInput}
                  className="form-control"
                  id="nama"
                  name="nama"
                  value={user.nama}
                  placeholder="Masukkan Nama"
                  required
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Pesan</label>
                <textarea
                  className="form-control"
                  onChange={handleInput}
                  id="exampleFormControlTextarea1"
                  name="message"
                  value={user.message}
                  rows="12"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-custom2">
                POST
              </button>
            </form>
          </div>
        </Slide>
        {data?.Kampus_Merdeka_CommentList.map((show) => (
          <Slide bottom>
            <li className="komen-list card-kontent mb-3">
              <div className="">
                <h5
                  style={{
                    fontWeight: "500",
                  }}
                  className="card-titles ml-5 mt-1 pt-3"
                >
                  {show.nama}
                </h5>

                <p
                  style={{ paddingRight: "15px", paddingLeft: "10px" }}
                  className="card-text ml-4 mt-3"
                >
                  {show.message}
                </p>

                <button
                  className="btn-customdel"
                  value={show.id}
                  onClick={onDeleteItem}
                >
                  Delete
                </button>
              </div>
            </li>
          </Slide>
        ))}
        <Slide left>
          <div className="thanks">
            <p>Thanks For Coming</p>
          </div>
        </Slide>
        <div className="footstyle">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
