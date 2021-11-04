import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from "./components/button"
import Add from "./components/Add"
import List from "./components/List"
import Pay from "./components/Pay"


class App extends React.Component{
  constructor() {
    super()
    this.state = {
      activeTab: "Add",
      items: []
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.addItem = this.addItem.bind(this)
    this.suprimList = this.suprimList.bind(this)
  }
  // function qui recupère le state name et price de add.js qui sont passer en paramètre dans la fonction (addItems) de add.js et les push  dans tableau de state.items (remonter de donnée)
  addItem(name, price) {
    let objet = {
      name: name ,
      price : price
    }
    this.setState({items: [objet,...this.state.items]})
  }
  // function qui recupère une string en paramètre qui la props text de button.js et la met dans active.tab
  handleButtonClick(str) {
    this.setState({activeTab: str})
  }
  suprimList(index) {
    let array = this.state.items
    this.setState({items : array.splice(index,1)})
    console.log(index);
  }
  

  render() {
    // console.log("status de state",this.state.activeTab);
    // console.log("state items",this.state.items);

      const selected = this.state.activeTab;
    return(
      <div className="container">
        <h1 className="text-center">Bakery</h1>
        <Button 
          text="Add"
          handleClick ={this.handleButtonClick} 
          isSelected ={this.state.activeTab === "Add"} 
        />
        <Button 
          text="List"
          handleClick ={this.handleButtonClick} 
          isSelected ={this.state.activeTab === "List"} 
        />
        <Button 
          text="Pay"
          handleClick ={this.handleButtonClick} 
          isSelected ={this.state.activeTab ==="Pay"} 
        />
        {selected ==="Add" && <Add addItem={this.addItem} />}
        {selected ==="List" && <List suprim={this.suprimList} items={this.state.items} />}
        {selected ==="Pay" && <Pay />}
      </div>
    )
  }
}

export default App;
