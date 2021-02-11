import React, {Component} from 'react';

class CurrencyCoverter extends Component{
    state = {
        amount: 0,
        currency: "Enter Currency Name"
    }

    handleClick = (welcome) => {
        alert(welcome);
    }

    handleOnchange = (event) => {
        switch(event.target.id){
            case "amount": this.setState({
                amount: event.target.value
            })
            break;
            case "currency": this.setState({
                currency: event.target.value
            })
        }
    }

    convertCurrency = () => {
        let converted = this.state.amount/80;

        alert(`Amount in ${this.state.currency} is ${converted}`);
    }


    render() {
        return (
            <div>
                <h1 style={{color: 'green'}}>Currency Converter!!!</h1>
                <table>
                    <label for="amount">Amount(Rs. ): </label>
                    <input type="text" id="amount" value={this.state.amount} onChange={(event)=>{this.handleOnchange(event)}}/>
                    <br/>
                    <label for="currency">Currency: </label>
                    <textarea id="currency" value={this.state.currency} onChange={(event)=>{this.handleOnchange(event)}}/>
                    <br/>
                    <button type="submit" value="submit" onClick={this.convertCurrency}>Submit</button>
                </table>
            </div>
        );
    }
}

export default CurrencyCoverter;