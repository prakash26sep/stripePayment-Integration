import React from 'react';
import Checkout from './Checkout';
import './App.css';

const CardExample = (props) => {
    return (
        <div className="card">
            <div className="card-img-container"><img className="card-img" src="hp-original-imafpfs893zu5mhb.jpeg" /></div>
            <div className="card-title">{props.title}</div>
            <div className="card-details">{props.details}</div>
            <div className="card-amount">₹ {props.amount}</div>
            <Checkout
                name={props.title}
                description={props.details}
                amount={props.amount}
            />
        </div>
    )
}

export default CardExample;