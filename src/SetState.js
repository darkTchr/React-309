import React from 'react'
import { func } from 'prop-types'

class SetState extends React.Component {
  state = {
    num1: 100,
    num2: 200
  }

  changeNum = () => {
    // 注意 异步

    //1.setState({被修改的数据：值})
    this.setState({ num1: 666 })
    //2. setState({},cb)

    this.setState({ num1: 7777 }, function () {
      console.log(this.state.num1)
    })
    //3. setState((state,props)=>{ return {想要修改的 ： 值}})

    this.setState((state, props) => {
      console.log(state, props)
      return {
        num1: state.num1 + 1
      }
    })

    // 4. setState((state,props)=>{return {}} , ()=>{获得更新后的state})
    this.setState((state,props)=>{
      return { num1 : 4444}
    },()=>{
      // 新值
      console.log(this.state.num1)
    })

    // 文档推荐  3. setState((state,props)=>{ return {想要修改的 ： 值}})

    //()=>{return {}}

    //疑惑  setState自动合并状态数据

    this.setState({
      num2:123456789
    })
  }

  render () {
    return (
      <div>
        <p>{this.state.num1}</p>
        <p>{this.state.num2}</p>

        <button onClick={this.changeNum}>按钮</button>
      </div>
    )
  }
}

export default SetState

// 虚拟DOM     Virtual DOM
// 实际上就是 ｛｝ 对象
// {
//   a:{
//     b:{
//
//     }
//   }
// }
//执行过程
// 初次渲染 ， react会根据初识的state（Model） 创建一个虚拟DOM对象（树）
// 根据虚拟DOM生成真正的DOM 渲染到页面中
// 当数据变化后（setState） ， 重新根据新的数据，创建新的虚拟DOM对象（树）
// 与上一次的虚拟DOM作比较（找不同），使用Diff算发去对比 ，得到需要更新的位置（）内容
// react只将变化 dev内容更新（patch）DOM中 ， 重新渲染到页面



// Diff
// 如果两棵树的根元素类型不同  react会直 接销毁旧树 ， 创建新树
// <div>
//   <A/>
// </div>
//
// <span><A/></span>

//对于类型完全相同的reactDOM元素 ，会对比两者的属性 是否相同 ， 只更新不同的属性

// <div style="color:red"></div>
// <div style="color:green"></div>
//
// <div clasName='box' title='abc></div>
// <div clasName='box2' title='abc></div>

// 当子节点的后面添加新节点

// <li>1</li>
// <li>2</li>
// -----
// <li>3</li>

//在子元素前面添加节点

// <li>3</li>    1  -- 3
// -----
// <li>1</li>    2 --- 1
// <li>2</li>    2

//  key属性 解决上述问题

// <li key='three'>3</li>   添加
// -----
// 仅仅是移动了位置
// <li  key='one'>1</li>    x
// <li  key='two'>2</li>    x

















