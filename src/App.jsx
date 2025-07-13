import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import ProdutoPage from "./pages/ProdutoPage";



function App() {


  return (
    <BrowserRouter>
  
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProdutoPage />} />
          <Route path="/product/:id" element={<ProdutoPage />} />
        </Routes>

        <Footer />
    </BrowserRouter>
  )
}

export default App
