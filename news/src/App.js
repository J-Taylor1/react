import logo from './tek_logo.png';
import './App.css';
import NavBar from './Components/NavBar';
import Headlines from './Views/Headlines';
import Jokes from './Views/Jokes';
import Studiog from './Views/Studiog';
import Space from './Views/Space';
import Footer from './Components/Footer';
import { Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
         <br/>
          <p>Create a News Site</p>
          <p>Set up a Single Page Application (SPA) with react-router</p>
            
            <Switch>
              <Route exact path="/">
              <Headlines/>
              </Route>
              <Route path='/jokes'>
               <Jokes/>
              </Route>
              <Route path='/movie'>
               <Studiog/>
              </Route>
              <Route path='/space'>
               <Space/>
              </Route>
            </Switch>

        </div>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
