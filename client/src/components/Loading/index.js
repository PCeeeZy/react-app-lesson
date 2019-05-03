import React, { Component } from 'react';

class Loading extends Component {

    state = {
        text: 'Loading'
    };

    componentDidMount() {

        const stopper = `${this.state.text}...`;

        this.interval = window.setInterval(() => {
            this.state.text === stopper
                ? this.setState({ text: 'Loading'})
                : this.setState((currentState) => {
                    return{
                        text: currentState.text + '.'
                    }
                }
            )
        }, 300)
    }

    componentWillUnmount() {
        window.clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <p>{this.state.text}</p>
            </div>
        )
    }
};

export default Loading;