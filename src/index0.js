import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import App2 from "./App2"
import * as serviceWorker from './serviceWorker';





ReactDOM.render(
  <React.StrictMode>
     <App />

   {/* div   这样是不能用的 */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();










// const div = (
//   <div>
//     <p>
//       <span>1111</span>
//       <span>2222</span>
//     </p>
//   </div>
// );


// ReactDOM.render( div,  document.getElementById('root'));


//组件

//1. 函数(function 非匿名 or 箭头)
// 形参 (组建通信是再说)
// return

// <>内容</>   <p/>



// const  Header = ()=>{
//   const  loading = true

// return <div>{loading ? '加载中' : '我是一个header'}</div>
// }


// const Container = ()=>{
//   const list = ['a','b','c','d']

//   return (
//     <ul>
//       {list.map((item , index)=>{
//           return <li key={index}>{item}</li>
//       })}
//     </ul>
//   )

// }




// const temp = ()=>{
//   return (
//     <div>
//       <h3>我是App标题</h3>
//       <Header/>

//       <Container/>
//     </div>
//   )
// }

// let t = temp();


// ReactDOM.render( t,  document.getElementById('root'));

// 2.类组件

// class 组件名 extends React.Component{}
// 内部重写 render 类似实现 渲染
// render  必须有return  返回节点
// 命名 首字母大写 , 单标签使用

// const List = (()=>{
//   return <div>List组件</div>
// })


// class Appclass extends React.Component {
//   render(){
//     return (
//       <div>
//         <h3>标题!!!!!</h3>
//         <p>内容</p>
//         <List/>
//       </div>
//     )
//   }

// }


// class Appclass2 extends React.Component {
//   render(){
//     return (
//       <div>
//         <h3>标题!!!!!</h3>
//         <p>内容</p>
//         <List/>
//         <Appclass/>
//       </div>
//     )
//   }
// }



// ReactDOM.render(<Appclass2/>,  document.getElementById('root'));


// 组件  独立



// ReactDOM.render(<App2/>, document.getElementById('root'))












// 渲染数据   {变量名}

// {不能写 if  for}
// {方法调用}
// 简单的数据运算
// {三元运算符}

// let name = '张三';
// let age = 13;
// function fn1(args){
//   // console.log('66666666');

//   return args
// }

// let  obj = {
//   name:'jack',
//   age:2
// }

// let arr = [111,222,333];


// let divTemplate = (
//   <div>
//     <p>名字:  {name}</p>
//     <p>年龄:  {age + 20}</p>
//     <p>{fn1('我是参数')}</p>
//     <p>{obj.name}</p>
//     <p>{arr[1]}</p>
//   </div>
// )

// ReactDOM.render(divTemplate,document.getElementById('root'))


// 条件渲染

// 场景: 写jsx标签的时候 , 发现某个页面或位置的内容有时显示 有时隐藏  isShow = true  ---> js轮播图

// {三元}


// const isloading = true


// const isShow = ()=>{
//   //this

//   return isloading ? <div>ok</div>  : <div>不ok</div>
// }


// const isShow2 = ()=>{
//   if(!isloading){
//     return 456789
//   }else{
//     return <div>98765432</div>
//   }
// }

// const divIf = (
//   <div>
//     {isShow()}
//     {isShow2()}
//   </div>
// )

// ReactDOM.render(divIf,document.getElementById('root'))

// 列表渲染
// ul>li
// list  for/foreach/map/some/every/find/findIndex等等     -->  效率最高 for
//  map --> 形参 + 返回值   Array API


// let arr = [4,5,6];
// let arrTemp = [];

// for(let index = 0 ; index < arr.length ; index++){
//     const li = <li key={index}>{arr[index]}</li>;
//     arrTemp.push(li);
// }
// ReactDOM.render(arrTemp,document.getElementById('root'))

// const list = ['黄忠','鲜菇','大白菜'];

// const listTemp = list.map((item,index)=>{
//   const li = <li key={index}>{item}</li>;
//   return li;
// })


// console.log(listTemp);

// const ul = <ul>{listTemp}</ul>



// ReactDOM.render(ul,document.getElementById('root'))



// const  data = [
//   {id:1,name:'张三',age:23},{id:2,name:'张三2',age:23},{id:3,name:'张3',age:23}
// ]


// const dataTemp = data.map((item , index)=>{
//     return <li key={item.id}>
//       <span>{item.name}</span>
//       <span>{item.age}</span>
//     </li>
// })

// const ul = <ul>{dataTemp}</ul>

// ReactDOM.render(ul,document.getElementById('root'))


// jsx处理样式


// style = {{属性名:值,.....}}
// className

// const styleObj = {
//   color:'red'
// }


// let p = <p style={styleObj}>我是内容</p>

// p = <p className='box'>我是新内容</p>



// ReactDOM.render(p,document.getElementById('root'))



