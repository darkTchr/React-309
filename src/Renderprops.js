import React from 'react'

//组件的复用（函数封装）
// state , 操作state的方法

// render props模式   / HOC 高阶组件
import  Mouse from './Mouse'

class Acom extends React.Component{
  render () {
    return (
      <div>
        <Mouse
        render = { mouse =>{
          return (
            <p>
              {mouse.x } ---- {mouse.y}
            </p>
          )
        } }></Mouse>
      </div>
    )
  }
}

export default Acom
