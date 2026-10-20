import './App.css'
import { useState } from 'react'
import { Inicio } from './components/inicio/inicio.tsx'
import { Dificuldade } from './components/dificuldade/dificuldade.tsx'
import { Pergunta } from './components/pergunta/pergunta.tsx'


export default function App() {

  const [page,setPage] = useState("inicio")
  const [name, setName] = useState('')
  const [difficulty, setDifficulty] = useState('')

  console.log(difficulty)

  return (
    <div>

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

        {page == "pergunta" && (
          <Pergunta />
        )}
        
    </div>
  )
}