import React from 'react'
// import logo from './logo.svg';
import './App.css'
// import One from './One'
// import Two from './Two'
// import Three from './Three'
// import Four from './Four'
// import Practice from './Practice'
// import Five from './Five'
// import Seven from './Seven'
// import Nine from './Nine'
// import Children from './Children'

import PropsType from './PropsType'

import Life from './Life'

import Lifestate from './Lifestate'
import Liftprop from './Lifeprop'

import Renderprops from './Renderprops'
import Hoc1 from './Hoc1'
import Hoc2 from './Hoc2'

// import Header from './Header'

function App () {

  return (
    <div>
      {/* JSX --> 结合vue使用要配置babel

      指定view  JSX写在这 (类似html语法)

      没有挂载行为
      <Header/>
       */}
      <Hoc2/>
      <hr/>
      <Hoc1/>
      <hr/>
      <Renderprops/>

      <hr/>

      <PropsType/>

      <hr/>

      <Life/>
      <hr/>
      <Lifestate/>
      <hr/>
      <Liftprop/>


      {/* <hr/>*/}

      {/*<Children/>*/}
      {/*<hr/>*/}
      {/*<Nine/>*/}
      {/*<hr/>*/}
      {/*<Seven/>*/}
      {/*<hr/>*/}
      {/*<Five/>*/}
      {/*<hr/>*/}
      {/*<One/>*/}
      {/*<Two/>*/}
      {/*<hr/>*/}
      {/*<Three/>*/}
      {/*<Four/>*/}
      {/*<hr/>*/}
      {/*<Practice/>*/}
    </div>
  )
}

export default App
