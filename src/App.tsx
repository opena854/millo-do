import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entidades from "./pages/entidades";
import Home from "./pages/home";
import Layout from "./pages/layout";
import { SignIn, SignOut } from "./components/auth";
import Forbiden from "./pages/forbiden";
import EditarEntidad from "./pages/entidades/editarentidad";
import Protected from "./pages/protected";
import EditarDocumento from "./pages/documentos/editar";
import Documentos from "./pages/documentos";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes> 
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}  />
          <Route element={<Protected />}>
            <Route path="entidades">
              <Route path=":id" element={<EditarEntidad />} />
              <Route index element={<Entidades />} />
            </Route>
            <Route path="documentos">
              <Route path=":id" element={<EditarDocumento />} />
              <Route index element={<Documentos />} />
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
