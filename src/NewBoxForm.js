import { Component } from "react";
import {v4 as uuid} from "uuid"
class NewBoxForm extends Component{
      constructor(){
          super()
          this.state = {
              width : "",
              height : "",
              color : ""
          }
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(e){
          this.setState({
            [e.target.name] : e.target.value
          })
      }
      handleSubmit(evt){
        evt.preventDefault();
          this.props.create({...this.state , id : uuid() , key : uuid()})
          this.setState({
              width : "",
              height : "",
              color : ""
          })
      }
      render(){
          return(
               <form onSubmit={this.handleSubmit}>
                   <input name="width" onChange={this.handleChange} value={this.state.width}/>
                   <input name="height" onChange={this.handleChange} value={this.state.height}/>
                   <input name="color" onChange={this.handleChange} value={this.state.color}/>
                   <button>Add Box</button>
               </form>
          )
      }

}
export default NewBoxForm;