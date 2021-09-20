import { createBrowserHistory } from 'history'
import { Suspense } from 'react'
import { Router } from 'react-router'
import { Header } from './components'
import { Routes } from './router'

const newHistory = createBrowserHistory()

function App() {
  return (
    <>
      <Suspense fallback={<span>loading..</span>}>
        <Router history={newHistory}>
          <Header />
          <Routes />
        </Router>
      </Suspense>
    </>
  )
}

export default App
