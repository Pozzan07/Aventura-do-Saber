import './App.css'
import { useState } from 'react'
import { Inicio } from './components/inicio/inicio.tsx'


export default function App() {

  const [page,setPage] = useState("inicio")
  const [name, setName] = useState('')

  return (
    <div>

        {page === "inicio" && (
          <Inicio 
            setPage={setPage}
            name={name}
            setName={setName}
          />
        )}
        
    </div>
  )
}