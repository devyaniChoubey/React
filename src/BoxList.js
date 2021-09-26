import {Component} from "react";
import NewBoxForm from './NewBoxForm';
import Box from './Box';
class BoxList extends Component{
     constructor(props){
         super(props);
         this.state = {
             boxes : [
                 
             ]
         }
         this.create = this.create.bind(this)
     }
     remove(id){
         console.log(id);
         this.setState(state => ({
             boxes : state.boxes.map(box => box.id !== id)
         }))
     }
     create(box){
         console.log(box);
        this.setState(state => ({
            boxes : [...state.boxes , box]
        }))
     }
     render(){
         const boxes = this.state.boxes.map(box => (
             <Box width={box.width} height={box.height} color={box.color} key={box.id} id={box.id} removeBox={() => this.remove(box.id)}/>
         ))
         return(
            <div>
                <NewBoxForm create={this.create}/>
                {boxes}
            </div>
         )
     }
}
export default BoxList;