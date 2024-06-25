import { Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../Components";

export const Routers = ()=>
    <Routes>
    <Route path="/login" element={<Login/>}/> 
    <Route path="/signup" element={<SignUp/>}/> 
  </Routes>
