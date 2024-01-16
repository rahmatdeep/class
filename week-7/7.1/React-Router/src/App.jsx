import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
const Landing = React.lazy(()=> import("./components/Landing"));
const Dashboard = React.lazy(()=> import("./components/Dashboard"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() => navigate("/")}>
        Landing
      </button>
      <button type="button" onClick={() => navigate("/dashboard")}>
        Dashboard
      </button>
    </div>
  );
}
