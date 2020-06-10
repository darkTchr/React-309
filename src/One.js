import React from 'react'


class One extends React.Component {

    constructor(){
        // 调用父元素的 构造函数
        super()
        // this.state = {}
        console.log(this);

        //bind()  ,由 undefined  变为 One

        this.fn = this.fn.bind(this)
    }

    fn(){

        //this  无意义  谁也调不了
        console.log('fn------');

        console.log(this, ' fn 里面的') ;
        
    }


    render(){
        return (
            <div>
                <button onClick={this.fn}>One的按钮</button>
            </div>
        )
    }
}

export default One