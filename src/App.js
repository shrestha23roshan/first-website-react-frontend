import PublicOutlet from "./components/PublicOutlet";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicOutlet />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
