import React, {Component} from 'react';

class Counter extends Component{
    state = {
        count: 0
    }

    handleClick = (jump) => {
        this.setState({
            count: this.state.count + jump
        });
    }

    sayHello = (name) => {
        alert(`Hello! ${name}`);
    }

    render() {
        return (
            <div>
                <span>{this.state.count}</span>
                <br/>
                <button onClick={() => {this.handleClick(1); this.sayHello("Member1");}}>Increment</button>
                <br/>
                <button onClick={this.handleClick.bind(this, -1)}>Decrement</button>
            </div>
        );
    }
}

export default Counter;