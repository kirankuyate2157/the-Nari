import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp.";
import Auth from "./components/auth/Auth";
import Home from "./components/Home";
import Test from "./components/Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
