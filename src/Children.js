import React from 'react'
//props 深入

//children : 组件标签中的子节点
// 值可以是任意值(文本 , React元素,组件,函数)


const Son =  props =>{

  const  {children} = props

  console.log(props, '~~~~' , props.children)
  return (
    <div>
      <h3>子组件</h3>
      <p>内容</p>

      {children}
      <p>-------=========</p>
    </div>
  )
}

class Father extends  React.Component{
  render () {

    return (
      <div>
        <h2>父组件</h2>

        <Son/>

      {/*  以下几种情况, 代码都不算错  , 但是 视图中没有接收到标签*/}

      <Son>
        <input type="text"/>
      </Son>

        <hr/>

        <Son>
          <input type="text"/>
          <input type="text"/>
        </Son>
      </div>
    )
  }
}

export  default Father
