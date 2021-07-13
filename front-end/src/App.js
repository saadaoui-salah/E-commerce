import { Provider } from './themes';
import { CustomAppbar } from './components/Appbar'
import { Login } from './pages/login'
import { 
  Redirect,  
  BrowserRouter as Router, 
  Switch, Route 
} from "react-router-dom"

function App() {

  return (
    <Provider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
        {true ? <CustomAppbar /> : <Redirect push to="/login" />}
      </Router>
    </Provider>)
}
export default App