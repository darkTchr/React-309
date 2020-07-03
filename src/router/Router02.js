//动态路由 /login/15    --->   ?id=15

import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch,useParams } from 'react-router-dom'


export default function Router02() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to='/a/100'>Netflix</Link>
          </li>
          <li>
            <Link to='/a/200'>Zillow Group</Link>
          </li>
        </ul>

        <Switch>

          <Route path='/a/:id' children={<Child/>}></Route>
        </Switch>
      </div>
    </Router>
  )
}

function Child () {
  let {id} = useParams()

  return (
    <div>
      <h3>id : {id}</h3>
      <p>child组件</p>
    </div>
  )
}
