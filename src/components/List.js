import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


class List extends React.Component{
  render() {
      const { items, suprim } = this.props
    return(
        <>
        <h1>Liste</h1>
        <div 
        className="container">{items.map( (item, index) => 
            item = <div  className="row">
                        <li> name: {item.name}</li>
                        <li> Price: {item.price}</li>
                        <button onClick={()=> suprim(index)} type="button" className="btn btn-danger">Supprimer</button>
                    </div>    )}
        </div>
        </>
                    
    )
  }
}

export default List;