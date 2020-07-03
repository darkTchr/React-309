import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
// SPA 单页应用
//BrowserRouter localhost:3000/Home   HashRouter localhost:3000/#/Home
import { BrowserRouter as Router,NavLink, Route, Link, Switch } from 'react-router-dom'

export default function Router01 () {
  return (
    <Router>
      <div>
        {/**/}
        <Switch>
          {/* 默认的是模糊查询 ,exact开启严格精准匹配模式 */}
          <Route exact path="/" component={Home}/>
          <Route path="/about" >
            <About/>
          </Route>

          {/*<Route path="/about" component={About}/>*/}
        </Switch>

        <ul>
          <li>
            <NavLink to='/' exact activeClassName='selected'>Home</NavLink>
            <Link  to={'/'}>首页</Link>
          </li>

          <li>
            <Link to="/about">关于</Link>
          </li>
        </ul>
      </div>
    </Router>
  )
}

