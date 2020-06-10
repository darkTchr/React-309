import React from 'react'

//非受控组件

// 借助ref使用原生DOM的方式来获取表单元素的值

class Four extends  React.Component {

  constructor () {
    super();
    this.myRef = React.createRef();
    this.divRef = React.createRef();

    console.log(this.myRef , this.divRef)
  }

  // 生命周期

  // vue  mounted

  componentDidMount () {

    console.log('页面dom渲染完毕')
    const inputElement = this.myRef.current
    const divElement = this.divRef.current

    console.log(inputElement , divElement)

    inputElement.focus()
    divElement.style.color = 'red';
  }

  render () {


    return (
      <div>
        <input type="text" name='test1' ref={this.myRef}/>

        <div ref={this.divRef}>内容</div>
      </div>
    )
  }
}


export  default Four


//能用 受控 就不要用ref
