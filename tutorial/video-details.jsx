import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export function VideoDetails(){

    const [videos,setVideos] = useState([{id:0,title:'',url:'',views:0,likes:'',subscribed:false}]);
     const params = useParams();


    useEffect(()=>{
       axios({
        method:'get',
        url:`http://127.0.0.1:5545/videos/${params.id}`
       }).then(response=>{
        setVideos(response.data)
       })
    },[])

    return(
        <div>
          <h2>Video details</h2>
          <div className="card w-50">
             <div className="card-headrer">
                <h3>{videos[0].title}</h3>
             </div>
             <div className="card-body">
              <iframe src={videos[0].url} width="100%" height="200"></iframe>
             </div>
             <div className="card-footer">
                   <span className="bi bi-eye-fill"></span> [{videos[0].views}] Views
                   <span className="bi bi-hand-thumbs-up"></span> [{videos[0].likes}] Likes
             </div>
          </div>
          <p>
            <Link to="/manage">Back to videos</Link>
          </p>
        </div>
    )
}