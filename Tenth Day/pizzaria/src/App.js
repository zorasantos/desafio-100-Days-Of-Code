import React, { lazy, useContext, useEffect, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import firebase from './services/firebase'
import { AuthContext } from './contexts/auth'

// import { MainPage } from './pages/main'
// import { Login } from './pages/login'

// Aqui fazemos os imports de maneira dinamica pra carregar apena a pagina requerida
const MainPage = lazy(() => import('./pages/main'))
const Login = lazy(() => import('./pages/login'))

function App () {
  const { setUserInfo } = useContext(AuthContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('Dados do usuario:', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [setUserInfo])

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}
export default App
