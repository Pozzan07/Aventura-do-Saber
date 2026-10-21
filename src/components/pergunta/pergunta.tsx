import './pergunta.css'
import { useState } from 'react'

interface PerguntaProps {
    setPage:(value:string) => void
    points:number
    setPoints:(value:number) => void
    difficulty: string
}

export function Pergunta({setPage, points, setPoints, difficulty}:PerguntaProps) {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const progress = (currentQuestion / 10) * 100;

    return (
        <div className='pagina'>
            <div className='progresso'>
                <div className='progresso-info'>
                    <div className='text-info'>
                        <span>Pergunta {currentQuestion + 1} de 10</span>
                        <span>{difficulty}</span>
                    </div>
                    <div className='progresso-bar'>
                        <div className='progresso-fill' style={{width: `${progress}%`}}></div>
                    </div>
                </div>
                <div className='pontos-info'>
                    <span>{points} pts</span>
                </div>
            </div>
            <div className='menu'>
                <button onClick={() => {
                    if (currentQuestion < 9) {
                        setCurrentQuestion(() => currentQuestion + 1)
                    } else {
                        setPage('resultado')
                    }
                }}>next</button>
            </div>
        </div>
    )
}