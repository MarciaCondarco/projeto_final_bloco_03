import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";


function DeleteCategoria() {
    
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert('Tema não encontrado!')
            console.error(error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)

            alert('Categoria apagada com sucesso')

        } catch (error) {
            alert('Erro ao apagar a categoria')
            console.error(error)
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/home")
    }

    return (
        <>
            <div className="flex justify-center p-9  gap-3">
                <div className="border p-6">
                <div className="flex justify-center text-2xl font-bold">
                    Deletar Categoria
                </div>
                <div>
                    <p>Você tem certeza de que deseja apagar a categoria a seguir?</p>
                </div>
                {/* cards */}
                <div>
                    <div>
                        <p>{categoria.nome}</p>
                    </div>
                    <div className="flex justify-between">
                        <button className="flex justify-center w-full bg-red-400" onClick={retornar}>Não</button>
                        <button className="flex justify-center w-full bg-green-300" onClick={deletarCategoria}>
                            {isLoading ?
                            <ClipLoader
                            color="#ffffff"
                            size={24}
                            />
                            :
                            <span>Sim</span>
                        }
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default DeleteCategoria