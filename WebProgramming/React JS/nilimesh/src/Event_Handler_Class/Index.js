import React, { Component } from 'react'

class Event_Handler extends Component {
    constructor(props) {
      super(props)
    
      this.state={
        changeValue:' ',
      }
    }
    
    clickHandle=()=>{
        console.log("Clicked");
        console.log(1+2);
    }
    handleChange=(soumili)=>{
       this.setState({
        changeValue:soumili.target.value,
       })
    }
   
  render() {
   
    return (
      <div>
        <input type="text" onChange={this.handleChange}></input>
       <button onClick={this.clickHandle}>Click Hare</button>
       <p style={{color:"red"}}>{this.state.changeValue}</p>
       
      </div>
    )
  }
}
export default Event_Handler;