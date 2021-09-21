import { createBrowserHistory } from 'history'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Header, Loading } from './components'
import { Routes } from './router'

const newHistory = createBrowserHistory()

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter history={newHistory}>
          <Header />
          <Routes />
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App
