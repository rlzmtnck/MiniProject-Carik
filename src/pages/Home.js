import React, { useContext } from 'react';
import HeaderBiasa from '../component/HeaderBiasa';
import HeaderHome from '../component/HeaderHome';
import { Context } from '../context';
import TopTracks from '../component/tracks/TopTracks';
import '../component/style.css'
const Home = () => {
    const [state] = useContext(Context);
    const { track_list } = state;
    return (
        // <HeaderBiasa/
    <>     
           
           <HeaderHome/>
                <div className="kontens">
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
                        <form className="formbro">
  <div className="form-group">
    <label for="nama">Nama</label>
    <input type="text" className="form-control" id="nama"  placeholder="Masukkan Nama"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Pesan</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
  </div>
  <button type="submit" className="btn btn-custom2">POST</button>
</form>
                        </div>           
                    </div>
            
    </>        
                
           
        
    )

    
}
export default Home