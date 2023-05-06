import React, { useEffect, useState } from 'react'

function Home() {
    const [videos,setVideos]=useState([]);

    const getvideos=async()=>{
        const response=await fetch("http:localhost:5600").then(
            ()=>{
                console.log("Data Fetched");
            }).catch((err)=>{
                console.log(err)
            })
            response= await response.json();
            setVideos(videos);
    }

    return (
        <div className="App App-header">
                <div className="container">
                    <div className="row">
                        {this.state.videos.map(video =>
                        <div className="col-md-4" key={video.id}>
                            <Link to={`/player/${video.id}`}>
                                <div className="card border-0">
                                    <img src={`http://localhost:4000${video.poster}`} alt={video.name} />
                                    <div className="card-body">
                                        <p>{video.name}</p>
                                        <p>{video.duration}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        )}
                    </div>
                </div>
            </div>
    )
}

export default Home