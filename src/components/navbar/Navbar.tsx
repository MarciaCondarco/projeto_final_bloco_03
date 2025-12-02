import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center px-20 py-5 bg-lime-200">

                {/* logo */}
                <div
                    className=""
                >
                    <Link to='/home' className="text-2xl font-bold">
                    <img src="https://i.imgur.com/G7WFsPp.png" alt="imagem da logo da farmacia VIDA"
                        className="w-20 h-20"
                    />
                    </Link>
                </div>

                {/* botões */}
                <div className="flex justify-center gap-10 items-center"
                >
                    <Link to="">
                        Produto
                    </Link>
                    <Link to="">
                        Categoria
                    </Link>
                    <Link to="">
                        Cadastro categoria
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar