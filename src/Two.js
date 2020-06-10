import React from 'react'


//  其实组件是有状态的   

//  函数组件  -- > 无状态组件  代码少  没有 响应式数据

//  class组件 ---> 有状态组件  代码多  有 响应式数据


class Two extends React.Component {
    // constructor(){
    //     super()
    //     // state 数据

    //     this.state = {
    //         num:111
    //     }
    // }


    // 类组件 里面有 state组件

    state = {
        num : 1000,
        num2: 2000,
        list:[1,2,3],
        book:{
            name:'杠头',
            price:39
        }
    }

    age = 88



    fn1 = ()=>{
        // setState 是异步的
        // 当   第一个值改完  再改第二个值

        // this.setState({num:6677})

        // console.log(this.state.num);

        // this.setState({num2:8899},()=>{
        //     console.log(this.state.num2);
            
        // })

        this.setState({num:6677},()=>{
            this.setState({num2:9900})
        })
        

    }




    fn2 = ()=>{

        // this.state.list.push('666')      xx

        // let book = this.state.book;

        // book.name = '石头'                xx


        //   ...   可以把 结构内的每一个值 一个一个的取出来

        this.setState({
            // book:{name:'石头'}
            // {}里面没有重复的key
            book: {...this.state.book , name:'大石头'}
        },()=>{
            console.log(this.state.book);
        })


        console.log(this.state.list);

        
    }

    render(){

        window.setTimeout(()=>{
            // 不能直接 this.state 赋值 要通过 APi    this.setState()

            // this.age = 999

            // 其实 它是异步的
            // this.setState(()=>{
            //     return {
            //         num: 222
            //     }
            // })

            // this.state.num = 333     xxx
        },3000)

        return (
            <div>
                <p>num:   {this.state.num}</p>
                <p>num2:  {this.state.num2}</p>
                <p>{this.age}</p>

                <button onClick={this.fn1}>按钮1</button>
                <button onClick={this.fn2}>按钮2</button>
            </div>
        )
    }
}





// const Two = ()=>{
//     let num = 100;

//     window.setTimeout(()=>{
//         num = 200

//         console.log('我执行了');
        
//     },3000)

//     return (
//         <div>
//             <p>{num}</p>
//         </div>
//     )
// }


export default Two