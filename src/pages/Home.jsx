import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Produto from "../components/Produto"


function Home() {


  return (
    <>
      <Header/>
           <section className="secao-produto">
                <div className="container">
                    <h1>Todos os produtos</h1>

                    <div className="produtos">
                        <Produto/>
                        <Produto/>
                        <Produto/>
                        <Produto/>
                    </div>
                </div>
            </section>
      <Footer/>
    </>
  )
}

export default Home