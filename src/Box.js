import {Component} from "react";

class Box extends Component{
    render(){
        return(
           <div>
               <div style={{
                   backgroundColor : this.props.color,
                   width : `${this.props.width}em`,
                   height : `${this.props.height}em`
               }}/>
               <button onClick={this.props.removeBox}>X</button>
           </div>
        )
    }
}

export default Box;