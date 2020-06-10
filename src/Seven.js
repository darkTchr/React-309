import React from 'react'

// 子传父

// 1.把父组建的方法传递给子组件
// 2. .子通过props接收到方法
// 3. 子组件中调用传过来的方法并传入数据(2步骤) fn(数据)
// 4. 在父组件中的方法接受一个形参提供的值(3步骤的结构)


// 通过4步骤 , 在父组件中 已经可以获取到子组件中的数据了 , 用数据改了state

const Eight = (props)=>{
  const {fn}  = props
  const changeNum = ()=>{

    const  num2 = 5678
    fn(num2)
  }

  return (
    <div>

      <h4>子组件</h4>
      <button onClick={changeNum}>按钮</button>
    </div>
  )
}


class Seven extends React.Component{
    state= {
      num1 : 111
    }

    fn = (num1)=>{
      this.setState({num1:num1},()=>{
        console.log(this.state.num1)
      })
    }

    render () {
      return (
        <div>
          <h3>父组件</h3>
          <p>{this.state.num1}</p>

          <Eight fn = {this.fn}></Eight>
        </div>
      )
    }
}


export  default  Seven
