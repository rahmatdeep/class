import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Sender } from "./components/Sender";
import { Receiver } from "./components/Reciever";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sender" element={<Sender />} />
          <Route path="/receiver" element={<Receiver />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
