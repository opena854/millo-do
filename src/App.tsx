import { BrowserRouter, Routes, Route } from "react-router-dom";
import Thirds from "./pages/thirds";
import Home from "./pages/home";
import Layout from "./pages/layout";
import { SignIn, SignOut } from "./components/auth";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}  />
          <Route path="thirds" element={<Thirds />} />
          
          <Route path="signin" element={<SignIn />} />
          <Route path="signout" element={<SignOut />} />

          <Route path="*" element={<Home />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
