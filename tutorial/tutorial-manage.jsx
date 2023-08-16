import { response } from "express";
import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";


export function TutorialManage(){

 const [videos,setVideos] = useState([])

   useEffect(()=>{
    axios({
        method:'get',
        url:"http://127.0.0.1:5545/videos"
    })
    .then((response)=>{
        setVideos(response.data)
    })
   })

    return(
        <div className="container-fluid">
             <BrowserRouter>
             <h2>Manage Videos</h2>
            <div className="mb-2">
             <Link to="/addvideo" className="btn btn-info"> Add New video</Link>
            </div>
             <table className="table table-hover">
                  <thead>
                    <tr>
                        <th>Title</th>
                        <th>Preview</th>
                        <th>Actions</th>
                    </tr>
                  </thead>
                  {
                    videos.map(video=>
                      <tr key={video.id}>
                       <td>{video.title}</td>
                       <td>
                        <iframe width="200" src={video.url} height="200">
                            
                        </iframe>
                       </td>
                       <td>
                        <Link to={`/details/${video.id}`} className="btn btn-primary" >
                        <span className="bi bi-eye"></span>Details
                        </Link>
                        <Link to={`/edit/${video.id}`} className="btn btn-warning ms-2" >
                        <span className="bi bi-pen"></span>Edit
                        </Link>
                        <Link to={`/dlete/${video.id}`} className="btn btn-danger ms-2" >
                        <span className="bi bi-trash"></span>Delete
                        </Link>
                       </td>
                      </tr>
                        
                        )
                  }
             </table>
             </BrowserRouter>
        </div>
    )
}