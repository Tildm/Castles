import React, {Component} from "react";
import FurniturItem from "./FurniturItem";
import FurniturForm from "./FurniturForm";
import "./FurniturItem.css"
import * as apiCalls from "./api";




class FurniturList extends Component{
  constructor(props){
    super(props);
    this.state={
      furniturs: [],
    }
    this.addFurnitur=this.addFurnitur.bind(this);
  }

  componentDidMount(){
    this.loadFurniturs()
  }

async loadFurniturs(){
  let furniturs = await apiCalls.getFurniturs();
  this.setState({furniturs});
}

async addFurnitur(name, img, text){
  let newFurnitur = await apiCalls.createFurnitur(name, img, text)
  this.setState({furniturs: [...this.state.furniturs, newFurnitur]});
}

async deleteFurnitur(id){
  await apiCalls.removeFurnitur(id);
  const furniturs = this.state.furniturs.filter(furnitur => furnitur._id !== id)
    this.setState({furniturs: furniturs});
}

async updateFurnitur(furnitur){
  let updatedFurnitur = await apiCalls.updateFurnitur(furnitur);
  const furniturs = this.state.furniturs.map(c =>
      (c.id === updatedFurnitur._id)
      ? {...c}: c
    )
    this.setState({furniturs: furniturs});
  }

  render(){
    const furniturs = this.state.furniturs.map((c) => (
      <FurniturItem
        key={c._id}
        {...c}
        onDelete={this.deleteFurnitur.bind(this, c._id)}
        updateFurnitur={this.updateFurnitur.bind(this, c)}
      />
    ));
    return(
      <div>
      <h1>Furnitur List</h1>
      <div className="furniturForm">
        <FurniturForm addFurnitur={this.addFurnitur} />
      </div>
      <ul>
      {furniturs}
      </ul>
      </div>

    )
  }
}

export default FurniturList;
