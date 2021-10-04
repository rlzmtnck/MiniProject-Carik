import React, { useContext, useState, useEffect } from 'react';
import HeaderBiasa from '../component/HeaderBiasa';
import HeaderHome from '../component/HeaderHome';
import ListKomen from './ListKoment';
import useSubmitComment from '../hook/useSubmitComment';
import useDeleteComment from '../hook/useDeleteComment';
import useGetComment from '../hook/useGetComment';
import { Context } from '../context';
import TopTracks from '../component/tracks/TopTracks';
import '../component/style.css'
const Home = () => {
    const initialData = {
        nama: "",
        message: ""
        
       
    }
    const [state] = useContext(Context);
    const [user, setUser] = useState(initialData);
    const {submitComment, loadingSubmit} = useSubmitComment();
    const {deleteComment, loadingDelete} = useDeleteComment();

    const {data, error, SubscribeComment} = useGetComment()
  useEffect(() => {
    SubscribeComment();
  }, []);
  if(error) {
    console.log(error)
    return null
  }
    const { track_list } = state;

    // Handle
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value;
        setUser({
          ...user,
          [name]: value,
        });
    };
    const onSubmitData =  (e) => {
        e.preventDefault();
         submitComment({variables: {
          object: {
            nama: user.nama,
            message: user.message
            
          }
        }})
      
      setUser(initialData)
      };
      console.log(data)
    return (
        // <HeaderBiasa/
        
    <>     
           
           <HeaderHome/>
                <div className="container kontens">
                    <div className="tittles">
                        Top
                    </div>
                    <div className="tittles mb-4">
                        Tracks
                    </div>
                        <div className="row container mt-3 ml-1">
                            {track_list.map(item => (
                                <TopTracks key={item.track.track_id} track={item.track} />
                            ))}
                        </div>
        <div className="tittles mt-5">
                        Review
                    </div>
                    <div className="tittles">
                        Your
                    </div>
                    <div className="tittles">
                        Experience
                    </div>
                    
                        <div className="kartu">
                        <form className="formbro" onSubmit={onSubmitData}>
  <div className="form-group">
    <label for="nama">Nama</label>
    <input type="text" onChange={handleInput} className="form-control" id="nama" name="nama" value={user.nama} placeholder="Masukkan Nama"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Pesan</label>
    <textarea className="form-control" onChange={handleInput} id="exampleFormControlTextarea1" name="message" value={user.message} rows="12"></textarea>
  </div>
  <button type="submit" className="btn btn-custom2">POST</button>
</form>
                        </div>
                        
                       
                          {data?.Kampus_Merdeka_CommentList.map((show) => (
                            <li className='komen-list card-kontent'>
                              
                                  
                                      <h5 className="card-title ml-4 mt-3">{show.nama}</h5>
                                      <p style={{paddingRight: "10px"}}className="card-text ml-4 mt-3">{show.message}</p>
                                      <p className="del">Delete</p>
                              
                          </li>
                          

                        ))}
                        
                        <div className="thanks">
                           <p>Thanks For Coming</p>
                           
                        </div>
                        
                        {/* {data?.Kampus_Merdeka_CommentList.map((show) => (
                            <div className="card komenbro">
                            <div className="body">
                                <h5 className="card-title">{show.nama}</h5>
                                <p className="card-text">{show.message}</p>
                            </div>
                        </div>

                        ))} */}
                        
                    </div>
                    
            
      </>        
                
           
        
    )

    
}
export default Home