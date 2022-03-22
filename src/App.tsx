import { BrowserRouter, Routes, Route } from "react-router-dom";
import Thirds from "./pages/thirds";
import Home from "./pages/home";
import Layout from "./pages/layout";
import { SignIn, SignOut } from "./components/auth";
import Forbiden from "./pages/forbiden";
import Third from "./pages/third";
import Protected from "./pages/protected";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes> 
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}  />
          <Route element={<Protected />}>
            <Route path="thirds">
              <Route path=":id" element={<Third />} />
              <Route index element={<Thirds />} />
            </Route>
          </Route>
          <Route path="signin" element={<SignIn />} />
          <Route path="signout" element={<SignOut />} />

          <Route path="*" element={<Forbiden />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
