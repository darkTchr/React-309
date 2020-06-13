import React from 'react'


import PropTypes from 'prop-types'

// console.log(PropTypes)

// props校验 就是 检查props
// 组件名.propsType = {}


class Bcom extends  React.Component {
  render () {

    const {list , num , msg} = this.props

    console.log(list  , 'list');
    console.log(num  , 'num');

    return (
      <div>
        Bcom
        <p>{msg}</p>
      </div>
    )
  }
}

/*
* bool
* func
* number
* object
* string
* element
* 必传  PropTypes.func.isRequired
* */

Bcom.defaultProps ={
  msg:'我是msg默认值',
  num : 0,
  list:[]
}

Bcom.propTypes = {
  list:PropTypes.array,
  num : PropTypes.number
}


class Acom extends React.Component {
  state = {
    list : [1,2,3]
  }

  render () {
    return(
      <div>
        <h3>父组件</h3>
        <Bcom list={this.state.list}></Bcom>
        {/*会报红色警告*/}
        <Bcom list={6666} num={[5,6,7]}></Bcom>
        <Bcom msg="abc"></Bcom>
      </div>
    )
  }
}

export  default Acom
