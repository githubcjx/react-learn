import React, { Component } from 'react';
import Ball from './Ball';

function getRandom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

export default class BallList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ballList: []
        }

        this.timer = setInterval(() => {
            let info = {
                left: getRandom(50, 500),
                top: getRandom(50, 500),
                xSpeed: getRandom(50, 500),
                ySpeed: getRandom(50, 500),
                bg: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`
            };

            if (this.state.ballList.length === 10) {
                clearInterval(this.timer)
            }

            this.setState({
                ballList: [...this.state.ballList, info]
            });
        }, 1000)
    }

    render() {

        const balls = this.state.ballList.map((ball, i) => <Ball key={i} {...ball} />)

        return (
            <div>
                {balls}
            </div>
        )
    }
}
