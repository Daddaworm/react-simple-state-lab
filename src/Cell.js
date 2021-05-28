import React, { Component } from 'react';
import Matrix from './Matrix';

export default class Cell extends Component {

    constructor(props) {
        super()
            this.state = {
                color: props.value
            }
    }

    changeColor = () => {
        const newColor = this.state.color = '#333'
        this.setState({
            color: newColor
        })
    }

    render() {
        return(
            <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.changeColor}>
                {this.state.color}
            </div>
        )
    }
}