import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TutorialHome } from "./tutorial-home";
import { TutorialLogin } from "./tutorial-login";
import { TutorialRegister } from "./tutorial-register";
import { TutorialVideos } from "./tutorial-videos";
import { TutorialError } from "./tutorial-error";
import { TutorialManage } from "./tutorial-manage";
import { VideoDetails } from "./video-details";
import { VideoAdd } from "./video-add";
import { VideoDelete } from "./video-delete";
import { VideoEdit } from "./video-edit";

export function TutorialIndex() {

    return (
        <div className="container-fluid">
            <BrowserRouter>
                <header className="bg-dark text-white text-center p-1">
                    <h2>React Video tutorial</h2>
                </header>
                <section className="mt-2 row">
                    <nav className="col-3">
                        <div>
                            <Link to="home">Home</Link>
                        </div>
                        <div>
                            <Link to="register">Register</Link>
                        </div>
                        <div>
                            <Link to="login">Login</Link>
                        </div>
                        <div>
                            <Link to="videos">Videos</Link>
                        </div>
                        <div>
                            <Link to="manage">Manage Videos</Link>
                        </div>
                    </nav>
                    <main className="col-9">
                         <Routes>
                         <Route path="/" element={<TutorialHome/>}/>
                            <Route path="home" element={<TutorialHome/>}/>
                            <Route path="login" element={<TutorialLogin/>}/>
                            <Route path="register" element={<TutorialRegister/>}/>
                            <Route path="videos" element={<TutorialVideos/>}/>
                            <Route path="error" element={<TutorialError/>}/>
                            <Route path="manage" element={<TutorialManage/>}/>
                            <Route path="details/:id" element={<VideoDetails/>}/>
                            <Route path="addvideo" element={<VideoAdd/>}/>
                            <Route path="delete/:id" element={<VideoDelete/>}/>
                            <Route path="edit/:id" element={<VideoEdit/>}/>
                         </Routes>
                    </main>
                </section>
            </BrowserRouter>
        </div>
    )
}