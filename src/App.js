import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import JobList from './components/JobLists/JobList';
import Header from './components/header/Header';

function App() {
  return (
    <div>      
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/">
            <JobList />
          </Route>
        </Switch>
      </BrowserRouter>      
    </div>
  );
}

export default App;
