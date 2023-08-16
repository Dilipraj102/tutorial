import { useEffect } from "react"
import{useCookies} from "react-cookie";
import { useNavigate } from "react-router-dom";



export function TutorialVideos()
{
         

   const[cookies,setCookie,removeCookie]=useCookies();
   const navigate = useNavigate()

   useEffect(()=>{
          if(cookies.userid==undefined){
            navigate("/login")
          }
   },[])


  
    return(
        <div>
            <h2> Videos Home - {cookies.userid} <span><button  className="btn btn-link">Signout</button></span> </h2>
            <div className="d-flex">
                    <div className="me-3">
                    <iframe src="https://www.youtube.com/embed=wkdEvrSqk1w" width="400" height="400"></iframe>
                    </div>
                    <div>
                    <iframe src="https://www.youtube.com/embed=wkdEvrSqk1w" width="200" height="200"></iframe>
                    </div>
            </div>
        </div>
    )
}