
import type Categoria from "../../../models/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";


function Formcategoria() {

    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {id} =useParams<{id:string}>();

    async function buscarPorId(id: string){
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error) {   
            alert('Erro ao buscar categoria por ID');
        }
    }

    useEffect(()=>{
        if(id!==undefined){
            buscarPorId(id)
        }
    }, [id])

    function retornar(){
        navigate('/home');
    }

    function atualizarEstado(e:ChangeEvent<HTMLInputElement>){
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovaCategoria(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        setIsLoading(true);
        if(id  !== undefined){
            // atualizar
            try {
                await atualizar(`/categorias`, categoria, setCategoria);
                alert('Categoria atualizada com sucesso!');
            } catch (error) {
                alert('Erro ao atualizar categoria');
            }
        }
        else{
                // cadastrar
                try {
                    await cadastrar('/categorias', categoria, setCategoria);
                    alert('Categoria cadastrada com sucesso!');
                } catch (error) {
                    alert('Erro ao cadastrar categoria');
                }
        }
        setIsLoading(false);
        retornar();
    }

    return (
        <>
            <div className="flex justify-center flex-col items-center gap-2 p-12">
                <div className="font-bold text-3xl">
                    {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
                </div>
                <div>
                    <p>Nome da categoria</p>
                </div>
                <div>
                    <form action="" className="flex flex-col gap-4 " onSubmit={gerarNovaCategoria}>
                        <div className="gap-5">
                            <label htmlFor=""></label>
                            <input 
                                type="text" 
                                className="border" 
                                placeholder="Digite uma categoria"
                                name='nome'
                                value={categoria.nome}
                                onChange={(e:ChangeEvent<HTMLInputElement>)=>atualizarEstado(e)}
                            />
                        </div>
                        <button className="border rounded-2xl w-full" type="submit">
                            {
                                isLoading? 
                                    <ClipLoader
                                        color="#ffffff"
                                        size={24}
                                    />
                                :
                                    <span>
                                        {id === undefined ? 'Cadastrar' : 'Atualizar' }
                                    </span>

                            }
                            </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Formcategoria