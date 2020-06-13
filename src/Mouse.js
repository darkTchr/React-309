import React from 'react'

class Mouse extends React.Component {
  state = {
    mouse: { x: 0, y: 0 }
  }

  ////注册事件

  componentDidMount () {
    window.addEventListener('mousemove', this.handleMouse)
  }

  // 卸载时
  componentWillUnmount () {
    window.removeEventListener('mousemove', this.handleMouse)
  }

  handleMouse = e => {
    this.setState(
      {
        mouse: { ...this.state.mouse, x: e.clientX, y: e.clientY }
      }
    )
  }

  render () {
    return this.props.render(this.state.mouse)
  }
}

export default Mouse

