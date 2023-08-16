import axios from "axios"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"



export function VideoAdd() {
 
    var navigate = useNavigate
    const formik = useFormik({
        initialValues: {
            id: 0,
            title: '',
            url: '',
            likes: 0,
            views: 0,
            subscribed: false
        },
        onSubmit:(values)=>{
            axios({
                method:"post",
                url:"http://127.0.0.1:5545/addvideos",
                data : values
            })
             alert(`Video Added Successfully...`)
             navigate("/manage")
        }
    })
    return (
        <div>
            <h2>Addv new video</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Video Id</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="id" /></dd>
                    <dt>Title</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="title" /></dd>
                    <dt>URL</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="url" /></dd>
                    <dt>Likes</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="likes" /></dd>
                    <dt>views</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="views" /></dd>
                    <dt>Subscribed</dt>
                    <dd className="form-switch">
                        <input className="form-check-input" type="checkbox" onChange={formik.handleChange} name="subscribed" />
                    </dd>
                </dl>
                <button className="btn btn-primary">Add Video</button>
            </form>
        </div>
    )
}