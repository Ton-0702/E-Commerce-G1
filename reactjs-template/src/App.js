import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SignUpPage } from "./container/SignUpPage";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import HomePage from "container/HomePage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/" element={<SignUpPage></SignUpPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
