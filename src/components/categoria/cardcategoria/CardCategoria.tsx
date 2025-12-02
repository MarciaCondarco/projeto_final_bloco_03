import { PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react"
import type Categoria from "../../../models/Categoria"
import { Link } from "react-router-dom"

interface CardCategoriaProps{
categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {



    return (
        <>
            <div className="bg-lime-200 border-2 rounded-2xl p-5">
                <div className="flex justify-between">
                    <div>
                        <Link to={`/deletarcategoria/${categoria.id}`}>
                            <TrashIcon size={32} />
                        </Link>
                    </div>
                    <div>
                        <Link to={`/editarcategoriа/${categoria.id}`}> 
                            <PencilSimpleIcon size={32} />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <div className="text-white">
                        <h2 className="text-black text-2xl">{categoria.nome}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardCategoria