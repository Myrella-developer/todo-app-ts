import { useState } from "react"
import { Todos } from "./components/Todos"

const mockTodos = [
  {
    id: '1',
    title: 'Ver el Partido de Baloncesto',
    completed: false
  },
  {
    id: '2',
    title: 'Aprender React con TypeScript',
    completed: true
  },
  {
    id: '3',
    title: 'Crear un Proyecto',
    completed: false
  }
]

const App = (): JSX.Element =>  {
  const [todos] = useState(mockTodos)
  return (
    <div className="todoapp"> 
      <Todos todos={todos} />
    </div>
    
  )
}

export default App
