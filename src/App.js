import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp.";
import Auth from "./components/auth/Auth";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<Login />} />

      <Route path="home" element={<Navbar />} />
    </Routes>
  );
}

export default App;
