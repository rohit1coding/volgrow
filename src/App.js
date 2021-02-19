import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Top from './Component/Fixed/Top';
import Navbar from './Component/Fixed/Navbar';
import Bottom from './Component/Fixed/Bottom';
function App() {
  const Routing =()=>{
    return(
      <Switch>
        <Route  path="/"></Route>
      </Switch>
    )
  }
  return (
    <BrowserRouter>
      <Top/>
      <Navbar/>
      <Routing />
      <Bottom/>
    </BrowserRouter>
  );
}

export default App;
