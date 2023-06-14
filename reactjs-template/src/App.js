import './App.css';
import {Routes, Route} from 'react-router-dom';
import { SignUpPage } from './container/SignUpPage';

function App() {
  return (
    <div className="App">
      {/*< Layout> */}
      <Routes>
        <Route path="/" element={<SignUpPage></SignUpPage>}></Route>
      </Routes>
      {/* <Layout</> */}
    </div>
  );
}

export default App;
