import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria"
import Formcategoria from "./components/categoria/formcategoria/FormCategoria"
import DeleteCategoria from "./components/categoria/deletecategoria/DeleteCategoria"
import ListaProduto from "./components/produto/listaproduto/ListaProduto"




function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/listacategoria" element={<ListaCategoria />} />
            <Route path="/formcategoriа" element={<Formcategoria />} />
            <Route path="/editarcategoriа/:id" element={<Formcategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeleteCategoria />} />
            <Route path="/listaproduto" element={<ListaProduto />} />

          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App