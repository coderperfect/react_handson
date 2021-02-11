import React, {Component} from 'react';

class Welcome extends Component{

    handleClick = (welcome) => {
        alert(welcome);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this, "welcome")}>Say Welcome</button>
                <br/>
                <button value="I" onClick={(event)=>alert(`${event.target.value} was clicked`)}>Click On Me</button>
            </div>
        );
    }
}

export default Welcome;