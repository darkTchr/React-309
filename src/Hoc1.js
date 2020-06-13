import React from 'react'

// 补充 高阶函数
// 参数 或者 返回值 还是 function
// 回调函数cb   闭包   柯里化

//高阶组件 如果一个函数的参数或返回值是组件

function withComponent (WrapComponent) {
    return class extends React.Component {
      componentDidMount () {
        window.localStorage.setItem('token','abc')
      }

      state = {
        num : 100
      }

      render () {

        console.log(this.props,'--------')
        return (
          <WrapComponent num={this.state.num}/>
        )
      }
    }
}


const Acom = props =>{
  // console.log('A   props:',props)

  // console.log('token : ' , window.localStorage.getItem('token'))

  return <div>Acom 组件</div>
}


const Bcom = props =>{
  // console.log('B  props:',props)

  return <div>Bcom组件</div>
}


//使用 hoc函数得到两个新的组建

const WithAcom = withComponent(Acom)
const WithBcom = withComponent(Bcom)


class Hoc1 extends React.Component {
    render () {
      return (
        <div>
          Hoc1
          <WithAcom msg='abc'/>

          <WithBcom num2={666666}/>
        </div>
      )
    }
}



export default Hoc1











