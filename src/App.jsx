import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

function App() {


  return (
    <>
    <Switch>
      <Route exact path="/">
      <Redirect to="/home" />
      </Route>
      <Route path='/home'>
      <Home/>
      </Route>
      <Route path='/hire'>
      <Hire />
      </Route>
      </Switch></>
  )
}

export default App
