import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


class Add extends React.Component{
    constructor() {
        super()
        this.state = {
            name: "",
            price: 0
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
    }
    // function qui recupère la valeur de l imput et la stock dans le state.name
    handleNameChange(e) {
        this.setState({name : e.target.value})
    }
    // function qui recupère la valeur de l imput type="range" et la stock dans le state.price
    handlePriceChange(e) {
        this.setState({price: e.target.value})
    }

  render() {
    //   console.log(this.state.name);
      const { name, price} = this.state
    return(
        <>
            <h1>Add</h1>
            <input 
                onChange={this.handleNameChange} 
                type="text" className="form-control" 
                placeholder="rentrez du text svp ... " 
                value={name}
            />
            <label className="form-label">Le prix : {price} € </label>
            <input 
                onChange={this.handlePriceChange} 
                type="range" className="form-range"
                value={price}  
                min="1" 
                max="10"
            />
            <span>{price} </span>
            <button 
                onClick={() => this.props.addItem(name,price)} 
                type="button" 
                className="btn btn-primary">ok</button>
        </>
                    
    )
  }
}

export default Add;