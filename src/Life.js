import React from 'react'


class Acomponent extends React.Component {
  // constructor (props) {
  //   super(props);
  //
  //
  //   this.state = {}
  // }

  state = {

  }

  componentDidMount () {
    console.log('componentDidMount ---------')
  }

  render () {
    console.log('render =======')

    return <div>Acomponent</div>
  }
}


export  default  Acomponent
