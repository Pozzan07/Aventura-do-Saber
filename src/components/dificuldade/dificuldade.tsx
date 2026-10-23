import './dificuldade.css'
import facilImg from '../../assets/facil.png'
import medioImg from '../../assets/medio.png'
import dificilImg from '../../assets/dificil.png'

interface dificuldadeProps {
    setDifficulty:(value:string) => void
    setPage:(value:string) => void
    name:string
}

export function Dificuldade({setDifficulty,setPage, name}:dificuldadeProps) {

    function handleDifficult(difficulty:string) {
        setDifficulty(difficulty)
        setPage('pergunta')
    }
    
    return (
        <div className='pagina'>
            <div className='menu'>
                <div className='dificuldade-title'>
                    <h1>Olá {name}!</h1>
                    <p>Qual dificuldade você quer jogar?</p>
                </div>
                <div className='dificuldade-layout'>
                    <button className='facil' onClick={() => handleDifficult("Facil")}>
                        <div className='dificuldade-img'><img src={facilImg} alt="" /></div>
                        <div className='dificuldade-text'>
                            <h2>Fácil</h2>
                            <p>Vamos começar!</p>
                        </div>
                    </button>
                    <button className='medio' onClick={() => handleDifficult("Médio")}>
                    <div className='dificuldade-img'><img src={medioImg} alt="" /></div>
                        <div className='dificuldade-text'>
                            <h2>Médio</h2>
                            <p>Vamos explorar!</p>
                        </div>
                    </button>
                    <button className='dificil' onClick={() => handleDifficult("Difícil")}>
                    <div className='dificuldade-img'><img src={dificilImg} alt="" /></div>
                        <div className='dificuldade-text'>
                            <h2>Difícil</h2>
                            <p>Vamos tentar!</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}