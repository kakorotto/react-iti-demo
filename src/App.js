import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import FromPage from "./pages/Form"
import UserProfileComp from "./components/UserProfileComp";

import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<FromPage />} />
        <Route path="/profile/:id" element={<UserProfileComp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
