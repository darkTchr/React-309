import React from 'react'

// React.PureComponent  ,实现好了shouldComponentUpdate
class  CompOne extends React.Component{
  state={}
  componentDidMount () {}
  fn1 = (e,a)=>{
    console.log('fn1----------',e,a)
  }

  fn2 = (a,b,c,d)=>{
    console.log('fn2==========',a,b,c,d)
  }


  render () {
    return (
      <div>
        <button onClick={this.fn1}>按钮1</button>
        <button onClick={e =>{
          console.log(e)
          this.fn1(e,666)
        }}>按钮2</button>
      {/*  不想包裹函数还想传参  bind*/}

      <button onClick={this.fn2.bind(this,100,200,300)}>按钮3</button>
      </div>
    )
  }
}


export default  CompOne
