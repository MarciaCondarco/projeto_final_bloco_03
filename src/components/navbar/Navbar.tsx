

function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center px-20 py-5 bg-lime-200">

                {/* logo */}
                <div
                    className=""
                >
                <div>
                    <img src="https://i.imgur.com/G7WFsPp.png" alt="imagem da logo da farmacia VIDA"
                        className="w-15 h-15"
                    />
                </div>

                </div>

                {/* botões */}
                <div className="flex justify-center gap-10 items-center"
                >
                    <div>
                        Categoria
                    </div>
                    <div>
                        Produto
                    </div>
                    <div>
                        Cadastro Categoria
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar