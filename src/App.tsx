import React from 'react';
import './App.css';
import NavBar from './components/Views/navbar';
import Counter from './components/Counter';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Views/HomePage';
import FavPage from './components/Views/FavPage';


const App: React.FC = (): JSX.Element => {
  
  return (
    <div className="App">
      <NavBar />
      <Counter />
      <h5 >Rick and Morty Episode (API)</h5>
      <div className="heading-bottom"></div>
      <div className="mt-2 d-flex flex-row flex-wrap justify-content-center ">
      <Switch>
        <Route path="/favourites" component={FavPage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
