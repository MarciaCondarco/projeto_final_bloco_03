import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { buscar } from "../../../services/Service"
import { DotLoader } from "react-spinners"
import type Produto from "../../../models/Produto"



function PaginaProduto() {

        const [isLoading, setIsLoading] = useState<boolean>(false)
    
        const [produto, setProduto] = useState<Produto>({} as Produto);

        const {id} = useParams <{id: string}>();
        
                async function buscarPorID(){
                try {
                    await buscar(`/produtos/${id}`, setProduto)
                } catch (error) {
                    alert('categoria não encontrada')
                }
            }


            useEffect(()=>{
        if(id!==undefined){
            buscarPorID()
        }
        },[id])
    
        async function buscarProdutos() {
            try {
    
                setIsLoading(true)
    
                await buscar('/produtos', setProduto)
                
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
            {/* div com categoria */}
            <div className="flex p-6 gap-30 justify-center bg-gray-200 ">
                {/* barra de categoria - ira se transformar em componente */}
                <div>medicamento</div>
                <div>perfume</div>
                <div>higiene</div>
                <div>cosmetico</div> 
            </div>
            {/* a ficha do produto */}
            <div className="flex justify-center gap-90 my-9 text-black">
                {/* foto do produto */}
                <div className="w-60 px-9 bg-gray-200 py-9">
                    <img src={produto.foto} alt="foto do produto" className="w-50"/>
                </div>
                {/* informações do produto */}
                <div className="flex-col justify-center">
                    <div>
                        <h2 className="text-3xl">{produto.nome}</h2>
                    </div>
                    <div className="my-6 font-bold text-2xl">
                        <p>R$ {produto.preco}</p>
                    </div>
                    <div>
                        <p>QUANTIDADE</p>
                    </div>
                    <div className="flex gap-30 my-6">
                        {/* botão de quantidade */}
                        <div className="flex justify-center items-center border-2 w-16 gap-2">
                            <a href="#">-</a>
                            <p>1</p>
                            <a href="#">+</a>
                        </div>
                        <a href="#" className="flex justify-center p-2 bg-gray-200 text-black">ADICIONAR CARRINHO</a>
                    </div>
                    <div className="flex justify-center bg-gray-200 p-2 text-black">
                        <Link to="/Finalizacao">Comprar
                        </Link>
                    </div>
                </div>
            </div>

            {/* div descrição */}
            <div className="p-9">
                <div className="bg-gray-200 p-7 rounded-2xl">
                    <h2 className="font-bold text-2xl">Descrição</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
            </div>
        </>
    )
}

export default PaginaProduto