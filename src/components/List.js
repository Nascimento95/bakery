import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


class List extends React.Component{
  render() {
    //   dans list.js on utilise la function map pour afficher notre array items de App.js quon a passer en props pour le récuperer dans List.js
      const { items, suprim } = this.props
    return(
        <>
        <h1>Liste</h1>
        <div 
        className="container">{items.map( (item, index) => 
            item = <div key={item.name} className="row">
                        <li> name: {item.name}</li>
                        <li> Prix: {item.price} €</li>
                        <button onClick={()=> suprim(index)} type="button" className="btn btn-danger">Supprimer</button>
                    </div>    )}
        </div>
        </>
                    
    )
  }
}

export default List;