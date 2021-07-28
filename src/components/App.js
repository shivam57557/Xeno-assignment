import React from 'react';
import BodyContent from './BodyContent';
import Header from './Header';
import './CSS/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddItem from './AddItem';
import EditItem from './EditItem';



const App = () => {
  return (
    <div className="app-body bg-light">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path='/' component={BodyContent} exact />
          <Route path='/add' component={AddItem} />
          <Route path='/edit/:id' component={EditItem} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
