import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import landing from './components/landingPage/Landing';
import Home from './components/home/Home';
import Episodes from './Pages/Episodes';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Route exact path='/' component={landing}  />
        <Route exact path='/home' component={Home}  />
        <Route path="/episodes" component={Episodes} />
      <Switch>
      </Switch>
       

      </BrowserRouter>

    </div>
      
  );
}

export default App;
