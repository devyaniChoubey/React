import {Component} from "react";
import ShoppingListForm from "./ShoppingListForm";
//import uuid from "uuid";
class ShoppingList extends Component{
    constructor(){
        super();
        this.state = {
            items : [
                {item : "Milk" , qty: "2 gallons" },
                {item : "Curd" , qty: "3 gallons" }
            ]
        }
        this.addItem = this.addItem.bind(this);
    }
    addItem(item){
        let newItem = {...item , id : Math.random()};
        this.setState(state => ({
            items : [...state.items , item]
        }))
    }
    renderList(){
        return(<ul>
            {this.state.items.map(item => (
               <li>{item.item} Quantity {item.qty}</li>
            ))}
        </ul>)
    }
    render(){
        return(
            <div>
                {this.renderList()}
                <ShoppingListForm addItem={this.addItem}/>
            </div>
        )
    }
}
export default ShoppingList;