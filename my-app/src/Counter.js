import React from 'react'

import './App.css';

export default class Counter extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            counter: 0,
            seed: 0
        }

        this.increment = () => this.setState ({counter: this.state.counter+1})
        this.decrement = () => this.setState ({counter: this.state.counter-1})
    }

    static getDerivedStateFromProps(props, state) {
        if(props.seed && state.see !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null
    }

    componentDidMount() {
        console.log('Component Did Mount')
        console.log('+++++++++++++++++++')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should Component Update - DO NOT RENDER')
        if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            return false
        }
        console.log('Should Component Update - RENDER')
        return true
    } 

    render () {
        console.log('Render')
        return <div>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <div className="counter">
                Counter: {this.state.counter}
            </div>
        </div>
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component Did Update')
        console.log('====================')
    }
    componentWillUnmount () {
        console.log('Component Did Un-mount')
        console.log('--------------------')
    }
}
