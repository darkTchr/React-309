import React from 'react'
import  {withRouter} from 'react-router-dom'

class Home extends React.Component {

  changeUrl = ()=>{

    //  怎么跳转呢.  编程式导航 --->  /about
    //如果一个组件是由路由分配过来的,该组件的props中会增加一些路由相关的数据
    console.log(this.props)
    //history是 路由提供的 用于获取浏览器历史纪录的相关信息
    //push 跳转到莫个页面
    //go(n) 前进后退
    this.props.history.push('/about')
  }

  render () {
    return (
      <div>
        <h3>Home页</h3>

        <button onClick={this.changeUrl}>点我跳转到about</button>
      </div>
    )
  }
}


// export  default  Home
export  default withRouter(Home)
