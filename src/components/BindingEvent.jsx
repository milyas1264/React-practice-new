import React, { Component } from 'react'

export default class BindingEvent extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Ali'
    }
    // this.handleClick = this.handleClick.bind(this)
  }

   handleClick = () => {

    // console.log('Heillow', this);    
    this.setState({
      name: 'Adil Murad'
    })
    // handleClick()
    //   {
    //    this.setState({
    //     name: 'Adil khan'
    //   })
    // }
  }

  render() {
    return (
      <div>
        BindingEvent
        <h1>{this.state.name}</h1>
        {/* //this is best */}
        {/* <button onClick={this.handleClick}>Click</button>  */}

        {/* <button onClick={this.handleClick.bind()}>Click</button> */}

        {/* //this is for arrow is mein bind khud hi hota hai */}
        {/* <button onClick={this.handleClick}>Click</button> */}

        {/* ye bhi best hai button funtion call kerna normal wala */}
        <button onClick={() => this.handleClick()}>Click</button>
        function
      </div>
    );
  }
}
