import React from 'react'



class Bcom extends React.Component {
  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('更新完毕了')
  }

  render () {
    console.log('render 调用了')

    const {num} = this.props;
    return(
      <div>
        Bcom
        <p>{num}</p>
      </div>
    )
  }
}


class Acom extends React.Component{
  state = {
    num:11111
  }
  componentWillUnmount () {}

  render () {
    return(
      <div>
        Acom
      <Bcom num={this.state.num}/>

      <button onClick={this.changeNum}>点我改父组件的state</button>
      </div>
    )
  }


  changeNum = ()=>{
    this.setState({num:987654})
  }
}


export default  Acom
