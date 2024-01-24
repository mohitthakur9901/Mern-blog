import { BrowserRouter, Route, Routes } from "react-router-dom";
import {About,Dashboard,Home,Project,SignIn,SignUp} from './pages'
import Header from "./components/Header";

import FooterCom from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import Error from "./pages/Error";
import PostPage from "./pages/PostPage";
import Search from "./pages/Search";
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route element={<PrivateRoute/>} >
        <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
        <Route element={<AdminPrivateRoute/>} >
        <Route path="/create-post" element={<CreatePost/>} />
        <Route path="/update-post/:postId" element={<UpdatePost/>} />
        </Route>
        <Route path="/project" element={<Project/>} />
        <Route path="search/" element={<Search/>}/>
        <Route path="/post/:postId" element={<PostPage/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <FooterCom/>
    </BrowserRouter>
  );
}

export default App;
