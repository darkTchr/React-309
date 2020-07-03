import React from 'react'
class CompTwo extends React.Component{
  state = {
    num:100
  }



  componentDidMount () {
    console.log('componentDidMount-------')
  }
  shouldComponentUpdate (nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate-------')

    if(this.state.num !== nextState.num){
      return true
    }else{
      return  false
    }
  }


  changeNum= ()=>{
    this.setState(()=>{
      return {
        num:100
      }
    })
  }

  render () {
    console.log('render----')
    const {num} = this.state


    return (
      <div>
        <p>num: {num}</p>
        <button onClick={this.changeNum}>点我改值</button>
      </div>
    )
  }
}


export default CompTwo
