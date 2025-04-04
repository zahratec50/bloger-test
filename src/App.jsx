import routes from './routes'

import {useRouters} from 'react-router-dom'

import './App.css'

function App() {
  const routers = useRouters(routes)

  return (
    <>
      {routers}
    </>
  )
}

export default App
