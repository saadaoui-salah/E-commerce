import { Provider } from './themes';
import { CustomAppbar } from './components/Appbar'
import { Login } from './pages/login'
import { useReducer, useContext } from 'react'
import { AuthContext } from './reducers/context';
import { AuthReducer } from './reducers/reducers'
import { authenticated } from './reducers/state';
import {
  Redirect,
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

const AuthRoute = () => {
  const { authState } = useContext(AuthContext)
  if (window.localStorage.getItem("token")) return <CustomAppbar /> 
  return <Redirect push to="/login" />
}

function App() {
  const [state, dispatch] = useReducer(AuthReducer, authenticated)
  return (
    <Provider>
      <AuthContext.Provider value={{ authState: state, authDispatch: dispatch }} >
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
          <AuthRoute/>
        </Router>
      </AuthContext.Provider>
    </Provider>)
}
export default App