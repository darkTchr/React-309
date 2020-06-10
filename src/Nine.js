import React from 'react'

const { Provider  ,  Consumer } = React.createContext();
//Context

//专门解决 跨组件传递数据  (远方亲戚)


// 提供数据者    消费数据者
// Provider    Consumer     组件
// { Provider    Consumer } = React.createContext()




class Ccom extends React.Component {
  render () {
    return (
      <div>
        <h3>三级组件</h3>

        <Consumer>
          { data => <span> data 参数表示接受的数据---- {data}</span>}
        </Consumer>
      </div>
    )
  }
}
class Bcom extends React.Component {
render () {
  return (
    <div>
      <h2>二级组件</h2>
      <Ccom></Ccom>
    </div>
  )
}
}

class Acom extends React.Component {
  render () {

    return (
      <Provider value='666'>
        <div>
          <h1>第一个组件</h1>

          {/*//调用别的组件*/}

          <Bcom></Bcom>
        </div>
      </Provider>
    )
  }
}


export  default Acom
