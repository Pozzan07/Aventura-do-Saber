import './pergunta.css'
import { useState } from 'react'
import { questions } from '../../data/data'
import { MultipleChoice } from './tiposPergunta/MultipleChoice'
import { DragDrop } from './tiposPergunta/DragDrop'

interface PerguntaProps {
    setPage:(value:string) => void
    points:number
    setPoints:(value:number) => void
    difficulty: string
}

export function Pergunta({setPage, points, setPoints, difficulty}:PerguntaProps) {

    const [currentQuestion, setCurrentQuestion] = useState(0)

    const difficultyQuestions = questions.filter(
        question => question.difficulty === difficulty
    )
    
    const question = difficultyQuestions[currentQuestion]
    const progress = (currentQuestion / 10) * 100;

    function handleNext() {
        if (currentQuestion < 9) {
            setCurrentQuestion(prev => prev + 1)
        } else {
            setPage('resultado')
        }
    }

    function handleAnswer(isCorrect: boolean) {
        if (isCorrect) {
            setPoints(points + 10)
        }
    }

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
                <button onClick={() => handleNext()}>next</button>
            </div>
            {question.type === 'multiple-choice' ? (
                <MultipleChoice
                    key={question.id}
                    question={question}
                    onAnswer={(_, __, isCorrect) => handleAnswer(isCorrect)}
                    onNext={handleNext}
                />
            ) : (
                <DragDrop
                    key={question.id}
                    question={question}
                    onAnswer={(_, __, isCorrect) => handleAnswer(isCorrect)}
                    onNext={handleNext}
                />
            )}
        </div>
    )
}