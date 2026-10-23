import './App.css'
import { useState } from 'react'
import { Inicio } from './components/inicio/inicio.tsx'
import { Dificuldade } from './components/dificuldade/dificuldade.tsx'
import { Pergunta } from './components/pergunta/pergunta.tsx'
import { Resultado } from './components/resultado/resultado.tsx'
import { toggleMute, isMuted } from './utils/speak.ts'

export default function App() {

  const [page,setPage] = useState("inicio")
  const [name, setName] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [points, setPoints] = useState(0)
  const [muted, setMuted] = useState(isMuted)

  function handleMute() {
      setMuted(toggleMute())
  }

  return (
    <div>

        <button
            className='mute-btn'
            type="button"
            onClick={handleMute}
        >
            {muted ? '🔇' : '🔊'}
        </button>

        {page === "inicio" && (
          <Inicio 
            setPage={setPage}
            name={name}
            setName={setName}
          />
        )}

        {page === 'dificuldade' && (
          <Dificuldade 
            setDifficulty={setDifficulty}
            setPage={setPage}
            name={name}
          />
        )}

        {page === "pergunta" && (
          <Pergunta 
            setPage={setPage}
            points={points}
            setPoints={setPoints}
            difficulty={difficulty}
          />
        )}

        {page === "resultado" && (
          <Resultado 
            name={name}
            setPage={setPage}
            points={points}
            setPoints={setPoints}
          />
        )}
        
    </div>
  )
}