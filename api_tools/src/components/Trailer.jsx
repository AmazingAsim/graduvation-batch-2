import React, { useState } from 'react'
import movieTrailer from 'movie-trailer';
export default function Trailer() {
  const [trailers,setTrailers] = useState([]);
  const [movie,setMovie] = useState('');

  let getTrailers = async()=>{
      let movies = await movieTrailer(movie,{multi:true});
      movies = movies.map(function(link){
        let pattern = /watch\?v=/;
        let newLink = link.replace(pattern,'embed/');
        return newLink
      })
      console.log(movies);
      setTrailers(movies);

  }
  return (
    <div>
       <h1>Youtube Trailer App</h1>
       <div>
          <input type="text" value={movie} onChange={(event)=>{setMovie(event.target.value)}} />
          <button onClick={getTrailers}>Search</button>

          <div>
              {
                trailers.map((link)=>(
                <div>
                    <iframe src={link} frameborder="0"></iframe>
                </div>
                ))
              }
          </div>
        
       </div>
    </div>
  )
}
