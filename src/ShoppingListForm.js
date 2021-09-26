import { Component } from "react";

class ShoppingListForm extends Component{
        constructor(){
            super();
            this.state = {
                 item : "",
                 qty : ""
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleSubmit(e){
            e.preventDefault()
            this.props.addItem(this.state);
            console.log(this.state);
            this.setState({
                item : "" , qty : ""
            })
        }
        handleChange(e){
            this.setState({
                [e.target.name] : e.target.value
            })
        }
       
        render(){
            return(
                <form onSubmit={this.handleSubmit}>
                    <input id="itemname" name="item" value={this.state.item} onChange={this.handleChange}/>
                    <input id="quantity" name="qty" value={this.state.qty} onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            )
        }
}

export default ShoppingListForm;