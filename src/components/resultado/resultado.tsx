import './resultado.css'

interface ResultadoProps {
    name:string
    setPage:(value:string) => void
}

export function Resultado({name, setPage}:ResultadoProps) {
    return (
        <div className='pagina'>
            <div className='menu'>
                <div className='resultado-title'>
                    <p>Parabéns</p>
                    <p>Mandou bem, {name}</p>
                </div>
                <div className='resultado-points'>
                    <p>Você Acertou</p>
                    <span>10/10</span>
                </div>
                <div className='resultado-options'>
                    <button onClick={() => setPage("dificuldade")}>Jogar Novamente</button>
                    <button onClick={() => setPage("inicio")}>Voltar Ao Menu</button>
                </div>
            </div>
        </div>
    )
}