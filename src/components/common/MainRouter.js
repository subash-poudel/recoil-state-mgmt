import React from 'react'
import { Route, Switch } from 'react-router'
import CharacterCounter from '../../components/Basic/CharacterCounter';
import Todo from '../todo/Todo';

const MainRouter = () => {
  return(
    <Switch>
      <Route path="/todo" exact>
        <Todo />
      </Route>
      <Route path="/" exact>
        <CharacterCounter />
      </Route>
    </Switch>
  )
}

export default MainRouter;
