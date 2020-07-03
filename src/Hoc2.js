import React from 'react'
// import { func } from 'prop-types'

const Acom = props => {
  const { num, msg, count, list } = props

  console.log(count, list)

  return (
    <div>
      <h3>A组件</h3>
      <p>{num}</p>
      <p>{msg}</p>
    </div>
  )
}

const Bcom = props => {
  const { num, msg } = props
  return (
    <div>
      <h3>B组件</h3>
      <p>{num}</p>
      <p>{msg}</p>
    </div>
  )
}

function withComponent (Wrap) {
  return class extends React.Component {
    state = {
      list: [1, 2, 3],
      count: 888
    }

    render () {
      // return <Wrap num={this.props.num }  msg={this.props.msg}/>

      return <Wrap {...this.props}  {...this.state}></Wrap>
    }
  }
}



const Acomnew = withComponent(Acom)
const Bcomnew = withComponent(Bcom)



class Hoc2 extends React.Component {
  render () {
    return (
      <div>
        <Acomnew num={123} msg={'哈哈哈'}></Acomnew>
        <Bcomnew num={987} msg={'heihei'}></Bcomnew>
      </div>
    )
  }
}

export default Hoc2



/*
* 总结：  hoc就是工厂 --》 加工旧组件 ——增加零件--》 返回新组件
*/










