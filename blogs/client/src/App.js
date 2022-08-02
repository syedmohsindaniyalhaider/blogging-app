import "./App.css";
import Main from "./components/Layout/Main/Main";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import SignIn from "./components/Register/SignIn/SignIn";
import SignUp from "./components/Register/SignUp/SignUp";
function App() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);
  return (
    <Routes>
      <Route path="/" exact element={<Register />}>
        <Route exact path="signin" element={<SignIn />} />
        <Route exact path="signup" element={<SignUp />} />
      </Route>
      <Route exact element={<Main />}>
        <Route exact path="home" element={<Home />} />
        <Route exact path="blogs" element={<Blogs />} />
        <Route exact path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
