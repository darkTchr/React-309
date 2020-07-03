import React from 'react'
import { BrowserRouter as Router, Route,Redirect, Switch } from 'react-router-dom'
import  Home from '../pages/Home'
const NotFound = ()=>{
  return <div>该页面无法找到</div>
}

// HOC   ---> withRouter() 加工组件

export  default  function  Router03() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={'/'}>
            <Home/>
          </Route>


          <Route exact path={'/404'}>
            <NotFound/>
          </Route>

          <Route path={'/abc'}>
            {/*<NotFound/>*/}
            <Redirect to='/404'/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
