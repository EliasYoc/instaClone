import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";

(async function () {
  if (!("paintWorklet" in CSS)) {
    await import("css-paint-polyfill");
  }
  //   CSS.paintWorklet.addModule(`../paintWorklet/squircle.js`);

  CSS.paintWorklet.addModule(
    "https://www.unpkg.com/css-houdini-squircle@0.1.3/squircle.min.js"
  );
})();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
