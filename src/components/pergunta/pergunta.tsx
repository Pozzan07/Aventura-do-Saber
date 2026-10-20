import './pergunta.css'

interface PerguntaProps {
    setPage:(value:string) => void
}

export function Pergunta({setPage}:PerguntaProps) {

    return (
        <div className='pagina'>
            <div className='menu'>
                <button onClick={() => setPage("resultado")}>next</button>
            </div>
        </div>
    )
}