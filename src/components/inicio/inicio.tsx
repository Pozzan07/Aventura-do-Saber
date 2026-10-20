import './inicio.css'

interface InicioProps {
    setPage:(value:string) => void
    name:string
    setName:(value:string) => void
}

export function Inicio({setPage,name,setName}:InicioProps) {

    const handleSubmit = (event:React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        setPage("pergunta") 
      };

      console.log(name)

    return (
        <div className='pagina-inicio'>
            <div className='menu'>
                <div className='inicio-title'>
                    <h1>Aventura do saber</h1>
                    <p>Oi! Vamos Brincar?</p>
                </div>
                <form className='inicio-form' onSubmit={handleSubmit}>
                    <label>
                        <span>QUAL O SEU NOME?</span>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Digite Aqui'/>
                    </label>
                    <button className='jogar-btn' type='submit'>
                        Jogar! →
                    </button>
                </form>
            </div>
        </div>
    )
}