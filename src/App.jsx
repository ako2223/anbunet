import { Button } from '@chakra-ui/react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [stories, setStories] = useState([{id: 0, user: "", photo:""}])


  return (
    <>
     <Button>First button</Button>
    </>
  )
}

export default App
