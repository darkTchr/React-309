import React from 'react'


class Acom extends React.Component {
  constructor (props) {
    super(props);
    console.log('构造')
  }

  componentDidMount () {}

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('prevProps',prevProps)
    console.log('prevState',prevState)

    // this.setState({num:123456})
    // if(){this.setState({num:123456})}
  }

  render () {
    return (
      <div>
        Acom
        <p>{this.state.num}</p>
        <button onClick={this.changeNum}>点我修改state</button>
      </div>
    )
  }

  changeNum = ()=>{
    this.setState({num:9999})
  }

  state = {
    num : 666
  }
}


export  default  Acom
