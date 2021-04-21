import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 98 };
    };

    storeValue = () => {
        const { value } = this.state;
        localStorage.setItem("value", value);
    };

    handleIncrement = () => {
        this.setState(({ value: prevValue }) => ({
            value: prevValue + 1,
        }), this.storeValue);
    };

    handleDecrement = () => {
        this.setState(({ value: prevValue }) => ({
            value: prevValue - 1,
        }), this.storeValue);
    };

    resetValue = () => {
        this.setState({ value: 0 }, () => localStorage.clear());
    };

    render() {
        const { value } = this.state;
        return (
            <div>
                <p>value : {value}</p>
                <button
                    disabled={value >= 100}
                    onClick={this.handleIncrement}
                > +
                </button>
                <button
                    disabled={value <= 0}
                    onClick={this.handleDecrement}
                > -
                </button>
                <button onClick={this.resetValue}>Reset</button>
            </div>
        );
    }
};

export default Counter;