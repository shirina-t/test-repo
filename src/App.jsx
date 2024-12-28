import "./components/Button";
import "./pages/login";
import "./pages/welcome";
import { Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<button/>} />
        <Route path="welcome" element={<welcome/>} />
        <Route path="login" element={<login/>} />
      </Routes>
    </>
  );
}

export default App;
