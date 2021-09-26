import { Component } from "react";
import "./Cell.css"

class Cell extends Component{
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.props.flipCellAround()
    }
    render(){
        let classes = "Cell" + (this.props.isLit ? "lit" : ""); 
        return(
            <td className={classes} onClick={this.handleClick}/> 
        )
    }
}
export default Cell;