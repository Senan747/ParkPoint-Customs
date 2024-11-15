import { BrowserRouter } from "react-router-dom";
import "./assets/styles/global.css";
import Router from "./router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
