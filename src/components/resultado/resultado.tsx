import './resultado.css'

interface ResultadoProps {
    name:string
    setPage:(value:string) => void
    points:number
    setPoints: (value:number) => void
}

export function Resultado({name, setPage, points, setPoints}:ResultadoProps) {

    function handlePlayAgain() {
        setPage("dificuldade")
        setPoints(0)
    }
    
    function handleBackMenu() {
        setPage("inicio")
        setPoints(0)
    }

    return (
        <div className='pagina'>
            <div className='menu'>
                <div className='resultado-title'>
                    <p>Parabéns</p>
                    <p>Mandou bem, {name}</p>
                </div>
                <div className='resultado-points'>
                    <p>Você Acertou</p>
                    <span>{points}/10</span>
                </div>
                <div className='resultado-options'>
                    <button onClick={handlePlayAgain}
                        >Jogar Novamente</button>
                    <button onClick={handleBackMenu}>Voltar Ao Menu</button>
                </div>
            </div>
        </div>
    )
}