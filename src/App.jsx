import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import Favorites from './components/Favorites'
import Meals from './components/Meals'
import Modal from './components/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
          {/** <Search /> */}
          {/** <Favorites /> */}
          {/** <Modal /> */}
          <Meals />
      </main>
    </>
  )
}

export default App
