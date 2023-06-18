import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SignUpPage } from "./container/SignUpPage";
import { Header } from "./component/Header";

function App() {
  return (
    <div className="App">
      {/*< Layout> */}
      <Routes>
        <Route path="/header" element={<Header></Header>}></Route>
        <Route path="/" element={<SignUpPage></SignUpPage>}></Route>
      </Routes>
      {/* <Layout</> */}
    </div>
  );
}

export default App;
