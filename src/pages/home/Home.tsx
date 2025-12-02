import ListaProduto from "../../components/produto/listaproduto/ListaProduto"

function Home(){
    return(
        <>
            <div className="flex justify-between items-center">
                {/* texto */}
                <div className="w-full">
                    <h2 className="flex items-center justify-center text-3xl font-bold">
                        Seja Bem vindo a Farmacia VIDA
                    </h2>
                </div>
                <div className="w-full">
                    <img src="https://ik.imagekit.io/xmqgsi96x8/loginfarmacia2.jpg?updatedAt=1763462256674" alt="foto de uma farmaceutica" />
                </div>
                {/* Logo */}
                                    {/* cards */}
            </div>
                    <div className="flex justify-center items-center bg-indico-200">
                        <ListaProduto />

                    </div>
        </>
    )
}
export default Home