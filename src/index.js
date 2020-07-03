import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import Router01 from './router/Router01'
// import Router02 from './router/Router02'
// import Router03 from './router/Router03'
import Router04 from './router/Router04'

import * as serviceWorker from './serviceWorker'

//路由 : URL和组建之间的对应关系
// Router  Route  Link


ReactDOM.render(<Router04/> , document.getElementById('root'))
serviceWorker.unregister()
