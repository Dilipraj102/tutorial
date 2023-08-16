import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Link,useParams } from "react-router-dom";




export function VideoDelete(){

 
    const [videos,setVideos] = useState([{id:0,title:'',url:'',views:0,likes:'',subscribed:false}]);
     const params = useParams();
      const   navigator = useNavigate()

    useEffect(()=>{
       axios({
        method:'get',
        url:`http://127.0.0.1:5545/videos/${params.id}`
       }).then(response=>{
        setVideos(response.data)
       })
    },[])


    function handleDelete(){
        axios({
            method:"delete",
            url:`http://127.0.0.1:5545/deletevideo/${params.id}`
        })
        navigator("/manage")
    }


    return(
        <div>
            <h2>Video Delete?Are You Sure</h2> <button className="btn btn-danger" onClick={handleDelete} >Yes</button> <Link className="btn btn-warning" to="/manage">No</Link>
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
        </div>
    )
}