import React from 'react'
// 组件通讯  父子  子父  兄弟 (context  props ...)


// 需求: Five(父)  Six(子)  , 把Two子组件的数据传递给One(父组件) 进行使用


const  Six = (props)=>{

  const  {fn2} = props


  const num= 9999


  const fn = ()=>{
    // 传递数据 : 把num传递给Five

    fn2(num)
  }


  return (
    <div>
      <h4>子组件</h4>

      <button onClick={fn}>点我传值</button>
    </div>
  )
}

class Five extends React.Component{
  state = {
    resnum : 1111
  }

  fn3 = (arg)=>{
      this.setState({resnum:arg})
  }


  render () {

    return (
      <div>
        <h3>父组件</h3>

        <p> 接收子组件传递过来的数据 : {this.state.resnum}</p>

        <Six fn2={this.fn3}/>
      </div>
    )
  }
}


export  default Five


//生命周期
