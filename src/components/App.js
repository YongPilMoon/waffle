import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, MyPage, EditorPage, EntryPage } from '../pages';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/my-page" component={MyPage} />
          <Route path="/editor" component={EditorPage} />
          <Route path="/entry" component={EntryPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
