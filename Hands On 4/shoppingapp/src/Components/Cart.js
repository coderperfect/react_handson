import React, {Component} from 'react';

export class Cart extends Component{
    constructor(props){
        super(props);
        this.renderList = this.renderList.bind(this);
        
    }

    renderList(){
            this.props.item.map((item) => {
                return(
                <p>
                    <p>{item.itemname}</p>
                    <p>{item.price}</p>
                </p>
                )
        })
    }

    render(){
        return(<div>
            {this.renderList()}
        </div>);
    }
}