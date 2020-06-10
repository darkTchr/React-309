import React from 'react'

class Practice extends React.Component {
  state = {
    from: '',
    content: '',
    list: [
      // {
      //   id: 1,
      //   from: '小明',
      //   content: '你好呀'
      // }, {
      //   id: 2,
      //   from: '小明2',
      //   content: '你好2呀'
      // }
    ]
  }

  //列表

  renderList = () => {
    const { list } = this.state

    return (
      <ul>
        {list.map((item, index) => {
          return (
            <li>
              <span>名字: {item.from}</span>
              <br/>
              <span>内容:{item.content}</span>
            </li>
          )
        })}
      </ul>
    )
  }

  // 无评论时

  renderNoContent = () => {
    return <p>暂无评论,请发表</p>
  }

  // 受控组件

  changeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // 渲染 表单

  renderForm = () => {
    return (
      <div>
        <input type="text" name='from' value={this.state.from} placeholder='请输入名字' onChange={this.changeValue}/>
        <br/>
        <textarea name="content" id="" cols="30" rows="10" value={this.state.content} onChange={this.changeValue}
                  placeholder='请输入内容'></textarea>
      </div>
    )
  }

  // 添加

  sendContent = () => {
    // from , content , list

    const { from, content, list } = this.state

    // 有无评论
    // 表单是否为空

    if (from.length === 0 || content.length === 0) {
      alert('啥也没写呀!')
      return
    }
    //list里面原来的值要保留

    const temp = {
      id: list.length + 1,
      from,
      content
    }

    let newList = [...list]

    newList.push(temp)

    this.setState({
      list: newList
    }, () => {
      //清空表单
      this.setState({ from: '', content: '' })
    })

  }

  render () {

    const  {list} = this.state

    return (
      <div>
        <h3>评论组件</h3>
        {this.renderForm()}

        <button onClick={this.sendContent}>发表评论</button>

        {this.renderList()}

        {list.length === 0 && this.renderNoContent()}
      </div>
    )

  }
}

export default Practice

//  评论列表

// 评论人   评论内容    发布评论按钮(受控组件)    评论列表(列表渲染,setState)--> 暂无评论



