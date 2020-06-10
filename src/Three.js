import React from 'react'


class Three extends  React.Component {
  // 表单处理

  //受控组件

  //可输入表单元素 , 是有可变状态的
  //而在react中可变状态通常是保存在state中  setState修改
  // react  state  ----  value
  // 其值受到react控制的表单元素
  // 以安家name属性 , 名称要与state相同
  // onChange事件



  state = {
    msg: 'abc'
    // ,
    // username: '',
    // password: ''
  }

  changeMsg = (e)=>{
    console.log(e.target.value,'-----')
    this.setState({
      msg:e.target.value
    })
  }


  changeValue = (e)=>{
    this.setState({
      // es6 当key的值是变量时候 , [key]   --->  obj['asd']

      [e.target.name] : e.target.value
    })
  }

  render () {

    return(
      <div>
        <input type="text" name="content" value={this.state.msg} onChange={this.changeMsg}/>
        <input type="text" name="username" value={this.state.username} onChange={this.changeValue}/>
        <input type="text" name="password" value={this.state.password} onChange={this.changeValue}/>

        <p>{this.state.username}</p>
        <p>{this.state.password}</p>
      </div>
    )
  }
}

export default  Three
