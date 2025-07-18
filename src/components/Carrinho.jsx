import React from "react"


function Carrinho() {


  return (
    <>
    <div class="carrinho">
        <div class="carrinho__titulo">
            <h2>Carrinho</h2>

            <p>X</p>
        </div>

        <div class="carrinho__produtos">
            <div class="carrinho__produto">
            <div class="carrinho__img-titulo">
                <div class="carrinho__img">
                <img
                    src="https://http2.mlstatic.com/D_NQ_NP_2X_991860-MLA84536292666_052025-F.webp"
                    alt="Imagem do produto"
                />
                </div>

                <p>Liquidificador Turbo Blq970p 900w 2,6 Litros Britânia 110v</p>
            </div>

            <div class="carrinho__quantidade">
                <div class="carrinho__icone-qtd">
                <p class="carrinho__sinal">-</p>
                <p>1</p>
                <p class="carrinho__sinal">+</p>
                </div>

                <p>R$ 849</p>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
                </svg>
            </div>
            </div>

            <div class="carrinho__produto">
            <div class="carrinho__img-titulo">
                <div class="carrinho__img">
                <img
                    src="https://http2.mlstatic.com/D_NQ_NP_2X_991860-MLA84536292666_052025-F.webp"
                    alt="Imagem do produto"
                />
                </div>

                <p>Liquidificador Turbo Blq970p 900w 2,6 Litros Britânia 110v</p>
            </div>

            <div class="carrinho__quantidade">
                <div class="carrinho__icone-qtd">
                <p class="carrinho__sinal">-</p>
                <p>1</p>
                <p class="carrinho__sinal">+</p>
                </div>

                <p>R$ 849</p>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
                </svg>
            </div>
            </div>

            <div class="carrinho__produto">
            <div class="carrinho__img-titulo">
                <div class="carrinho__img">
                <img
                    src="https://http2.mlstatic.com/D_NQ_NP_2X_991860-MLA84536292666_052025-F.webp"
                    alt="Imagem do produto"
                />
                </div>

                <p>Liquidificador Turbo Blq970p 900w 2,6 Litros Britânia 110v</p>
            </div>

            <div class="carrinho__quantidade">
                <div class="carrinho__icone-qtd">
                <p class="carrinho__sinal">-</p>
                <p>1</p>
                <p class="carrinho__sinal">+</p>
                </div>

                <p>R$ 849</p>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
                </svg>
            </div>
            </div>
        </div>

        <div class="carrinho__pedido">
            <p><span class="bold">Valor total:</span> R$ 3.030</p>

            <button>Fechar pedido</button>
        </div>
    </div>
    </>
  )
}

export default Carrinho