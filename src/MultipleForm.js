import { Component } from "react";

class MultipleForm extends Component{
      constructor(){
          super();
          this.state = {
              username : "",
              password : "",
              email : ""
          }
      }
      handleSubmit(evt){
         evt.preventDefault();
         alert(`you typed ${this.state.username}`)
        //  this.setState({
        //      username : ""
        //  })
      }
      handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
      }
      render(){
          return(
              <div>
                  <form onSubmit={this.handleSubmit}>
                      <h1>Sample Form</h1>
                      <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                      <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                      <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                      <button>Submit</button>
                  </form>
              </div>
          )
      }
}

export default MultipleForm;