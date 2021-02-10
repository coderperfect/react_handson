import React, {Component} from 'react';

export class ListofPlayers extends Component{
    render(){
        const players = this.props.players;

        return(
            players.map((item) => {
                return(
                    <div>
                        <li>Mr. {item.name}<span> {item.score} </span></li>
                    </div>
                );
            })
        );
    }
}

export class Scorebelow70 extends Component{
    filterPlayers70 = (players) => {
        const players70 = [];

        players.map((item) => {
            if(item.score <= 70)
                players70.push(item);
        })
        
        return players70;
    }

    render(){
        const players = this.props.players;
        const players70 = this.filterPlayers70(players);

        return(
            players70.map((item) => {
                return(
                    <div>
                        <li>Mr. {item.name}<span> {item.score} </span></li>
                    </div>
                );
            })
        );
    }
}