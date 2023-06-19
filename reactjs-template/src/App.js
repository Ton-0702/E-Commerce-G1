import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SignUpPage } from "./container/SignUpPage";
import { LoginPage } from "./container/LoginPage";
import { ForgottenPasswordPage } from "./container/ForgottenPasswordPage/ForgottenPasswordPage";

function App() {
  return (
    <div className="App">
      {/*< Layout> */}
      <Routes>
        <Route path="/" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route
          path="/forgotten-password"
          element={<ForgottenPasswordPage></ForgottenPasswordPage>}
        ></Route>
      </Routes>
      {/* <Layout</> */}
    </div>
  );
}

export default App;
