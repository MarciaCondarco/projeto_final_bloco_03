import { useState, useEffect } from "react"
import { DotLoader } from "react-spinners"
import type Produto from "../../../models/Produto"
import { buscar } from "../../../services/Service"
import CardProduto from "../cardproduto/CardProduto"


function ListaProduto() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(()=>{
        buscarProdutos()
    }, [produtos.length])

    async function buscarProdutos() {
        try {

            setIsLoading(true)

            await buscar('/produtos', setProdutos)
            
        } catch (error: any) {
            if (error.toString().includes('401')) {
                alert("errorrr")
            }
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <DotLoader
                        color="oklch(93.8% 0.127 124.321)"
                        size={32}
                    />
                </div>
            )}
            <div>          
                            {(!isLoading && produtos.length === 0) && (
                            <span className="text-3xl text-center my-8">
                                Nenhum Produto foi encontrado!
                            </span>
                    )}
                    <div className="grid grid-cols-4 gap-16 p-9 m-5">
                            {
                                produtos.map((produto) => (
                                    <CardProduto key={produto.id} produto={produto}/>
                                ))
                            }
                    </div>
            </div>
        </>
    )
}

export default ListaProduto