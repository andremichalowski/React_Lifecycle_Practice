import React from 'react';
import Counter from './Counter'
import './App.css';

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      //attribute
      mount: true,
      ignoreProp: 0,
      seed: 40
    }
    //methods to mount and unmount the counter
    this.mountCounter = () => this.setState({mount: true})
    this.unMountCounter = () => this.setState({mount: false})

    this.ignoreProp = () => this.setState ({ignoreProp: Math.random()})
    this.seedGenerator = () => this.setState({seed: Number.parseInt(Math.random() * 100)})
  }
  render () {
    return <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
        <button onClick={this.unMountCounter} disabled={!this.state.mount}>Un-Mount Counter</button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
        <button onClick={this.seedGenerator}>Generate Seed</button>
        {this.state.mount ? 
        <Counter 
          ignoreProp={this.state.ignoreProp}
          seed={this.state.seed} 
        /> : null}
      </div>
  }
}