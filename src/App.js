import "./App.css";
import Form from "./components/form/Form";
import { Routes, Route, Navigate } from "react-router-dom";
import FormSend from "./components/Formsend";
import Home from "./components/home/home";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/form" element={<Form />} />

      <Route path="/home" element={<Navigate replace to="/" />} />
      <Route path="/formsend" element={<ProtectedRoutes></ProtectedRoutes>} />
    </Routes>
  );
}

export default App;
