
import { Link } from "react-router-dom"
import type Produto from "../../../models/Produto"


interface CardProdutoProps{
produto: Produto
}

function CardProduto({produto}: CardProdutoProps) {
    return (
        <>
            <div >
                <div className="flex flex-col gap-4 justify-center items-center border p-9">
                    <div className="text-black">
                        <img src={produto.foto} alt="foto do banner" className="h-64"/>
                    </div>
                    <div className="text-black">
                        <h2>{produto.nome}</h2>
                    </div>
                    <div className="text-black">
                        <h2>{produto.preco}</h2>
                    </div>
                   
                        Ver produto
                    
                </div>
            </div>
        </>
    )
}

export default CardProduto