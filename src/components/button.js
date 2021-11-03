import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


class Button extends React.Component{
  render() {
    //   console.log(this.props);
      const { handleClick, isSelected, text } = this.props
    return(
             
        <button 
        type="button" 
        onClick={() => handleClick(text)}
        className={`btn  ${isSelected ? "btn-dark " : "btn-outline-primary" }`}>{text}</button>
                    
    )
  }
}

export default Button;