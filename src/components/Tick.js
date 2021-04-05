import React, { Component } from 'react'

export default class Tick extends Component {
    state = {
        left: 10
    }

    constructor(props) {
        super(props);
        this.state.timer = setInterval(() => {
            this.setState({
                left: this.state.left - 1
            });
            if (this.state.left === 0) {
                clearInterval(this.state.timer)
            }
        }, 1000)
    }

    render() {
        return (
            <div>
                剩余时间：{this.state.left}
            </div>
        )
    }
}
