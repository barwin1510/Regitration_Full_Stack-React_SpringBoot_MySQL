import Register from "./components/Register";
import Success from "./components/Success"
import Failure from "./components/Failure"
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/success" element={<Success />} />
            <Route path="/failure" element={<Failure />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
