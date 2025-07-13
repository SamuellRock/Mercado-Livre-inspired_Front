import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Produtos from "../components/Produtos"


function Home() {


  return (
    <>
           <section className="secao-produto">
                <div className="container">
                    <h1>Todos os produtos</h1>

                    <div className="produtos">
                        <Produtos/>
                        <Produtos/>
                        <Produtos/>
                        <Produtos/>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Home