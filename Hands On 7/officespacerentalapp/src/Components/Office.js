import React, {Component} from 'react';

export class Office extends Component {
    render() {
        const src = "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
        const element = "Office Space";
        const jsxatt = <img src={src} width="25%" height="25%" alt="Office Space"/>
        const itemName = {Name: "DBS", Rent: 50000, Address: "Chennai"};

        let colors = [];

        if(itemName.Rent <= 60000){
            colors.push("red");
        }
        else{
            colors.push("green");
        }

        return (
            <div style={{marginLeft: '400px'}}>
                <h1>{element}, at Affordable Range</h1>
                {jsxatt}
                <h1>Name: {itemName.Name}</h1>
                <h3 style={{color: colors}}>Rent: Rs. {itemName.Rent}</h3>
                <h3>Address: {itemName.Address}</h3>
            </div>
        );
    }
}