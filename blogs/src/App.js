import "./App.css";
import Main from "./components/Layout/Main/Main";
import Home from "./components/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import SignIn from "./components/Register/SignIn/SignIn";
import SignUp from "./components/Register/SignUp/SignUp";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Register />}>
        <Route exact path="signin" element={<SignIn />} />
        <Route exact path="signup" element={<SignUp />} />
      </Route>
      <Route exact element={<Main />}>
        <Route exact path="home" element={<Home />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
