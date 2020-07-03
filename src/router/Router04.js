import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch ,withRouter } from 'react-router-dom'


const A = ()=>{
  return <div>AAAAAAAA</div>
}

const  B = props =>{
  return (
    <div>
      <h3>BBBBB</h3>
      <button onClick={()=>{
        console.log(props)
      }}>B中的按钮</button>
    </div>
  )
}
//hoc函数
const NewB = withRouter(B)

export default function Router04 () {
    return (
      <Router>
        <div>
          <Link to={'/a'}>首页</Link>
          <Link to={'/b'}>about</Link>
        </div>

        <Switch>
          <Route path={'/a'}>
            <A/>
          </Route>

          <Route path={'/b'}>
            <NewB/>
          </Route>
        </Switch>
      </Router>
    )
}
