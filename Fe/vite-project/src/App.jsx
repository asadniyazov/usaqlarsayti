import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<h1>No Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
