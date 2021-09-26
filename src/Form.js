import {Component} from "react";

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            username : e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        alert(`You typed ${this.state.username}`);
        this.setState({
            username : ""
        })
    }
    
    render(){
        return(
           <div>
             <h1>Sample Form</h1>
             <form onSubmit={this.handleSubmit}>
                  <label htmlFor='username'>Username</label>
                  <input 
                   type="text"
                   id='username'
                   value={this.state.username}
                   onChange={this.handleChange}
                   />
                   <button>Submit</button>
             </form>
           </div>
        )
    }
}
export default Form;