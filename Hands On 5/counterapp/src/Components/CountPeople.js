import React, {Component} from 'react';

export class CountPeople extends Component{
    constructor(){
        super();
        this.state = {
            entrycount: 0,
            exitcount: 0,
            c: 0
        };
    }

    updateEntry = () => {
        this.setState((prevState, props) => {
            return {entrycount: prevState.entrycount + 1}
        });
    }

    updateExit = () => {
        this.setState((prevState, props) => {
            return {exitcount: prevState.exitcount + 1}
        });
    }

    render(){
        return (
            <div>
                <table width='100%' style={{marginTop:'300px'}}>
                    <tr>
                        <td>
                            <button onClick={this.updateEntry} style={{backgroundColor:'greenyellow'}}>Login</button>
                            <span style={{marginLeft:'5px'}}>{this.state.entrycount} People Entered!!!!</span>
                        </td>

                        <td>
                            <button onClick={this.updateExit} style={{backgroundColor:'greenyellow'}}>Exit</button>
                            <span style={{marginLeft:'5px'}}>{this.state.exitcount} People Left!!!</span>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}