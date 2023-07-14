import React, { Component } from 'react'

 class Index extends Component {
    constructor(props) {
      super(props)
    
     this.state={
        isLogin:false,
     }
    }
    
  render() {
    if(this.state.isLogin){
        return(
            <h1>Login Done</h1>
        )
    }
    else{
        return(
            <h2>Login not done</h2>
        )
    }
    return (
      <div>
        Hi
      </div>
    )
  }
}
export default Index;
