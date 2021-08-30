import './App.css';
import { Route, Switch } from 'react-router-dom'
import Searchbar from './components/Searchbar/Searchbar';

function App() {
  return (
    <div className="App">
      <Route>
        <Searchbar/>
      </Route>
    </div>
  );
}

export default App;
