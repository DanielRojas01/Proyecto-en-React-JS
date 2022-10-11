import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../src/components/layout/Footer";
import Nav from "../src/components/layout/Nav";

import HomePage from "../src/pages/HomePage";
import ServiciosPage from "../src/pages/ServiciosPage";
import ClientesPage from "../src/pages/ClientesPage";
import ConocemePage from "../src/pages/ConocemePage";
import ContactoPage from "../src/pages/ContactoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/conoceme" element={<ConocemePage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}
export default App;
