import axios from "axios";
import { useEffect, useState } from "react"
import { Link,useParams } from "react-router-dom";
import { useFormik } from "formik/dist";


export function VideoEdit(){


    const [videos,setVideos] = useState([{id:0,title:'',url:'',views:0,likes:'',subscribed:false}]);
    const params = useParams();

    const formik = useFormik({
        initialValues: {
            id: videos[0].id,
            title: videos[0].title,
            url: videos[0].url,
            likes: videos[0].likes,
            views: videos[0].views,
            subscribed: videos[0].subscribed
        },
        onSubmit:(values)=>{
           
        }
    })

 

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
              <h2>Edit Video Details</h2>
            <form>
            <dl>
                    <dt>Video Id</dt>
                    <dd><input type="number" value={videos[0].id} onChange={formik.handleChange} name="id" /></dd>
                    <dt>Title</dt>
                    <dd><input type="text"  value={videos[0].title} onChange={formik.handleChange} name="title" /></dd>
                    <dt>URL</dt>
                    <dd><input type="text"  value={videos[0].url} onChange={formik.handleChange} name="url" /></dd>
                    <dt>Likes</dt>
                    <dd><input type="number"  value={videos[0].likes} onChange={formik.handleChange} name="likes" /></dd>
                    <dt>views</dt>
                    <dd><input type="number"  value={videos[0].views} onChange={formik.handleChange} name="views" /></dd>
                    <dt>Subscribed</dt>
                    <dd className="form-switch">
                        <input className="form-check-input"  checked={videos[0].subscribed} type="checkbox" onChange={formik.handleChange} name="subscribed" />
                    </dd>
                </dl>
                <button className="btn btn-success me-2">Save</button>
                <Link to="/manage" className="btn btn-warinig">Cancel</Link>
            </form>
          </div>
        )
}