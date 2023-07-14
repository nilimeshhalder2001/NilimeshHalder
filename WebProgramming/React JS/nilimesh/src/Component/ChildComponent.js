import './style.css';
import React,{Component} from "react";
class ChildComponent extends Component{
    render(){
        return(
            <div>
                <h1 className='h1'>{this.props.name}</h1>
                <h2 className='h2'>{this.props.address}</h2>
            </div>
        )
    }
}
export default ChildComponent;