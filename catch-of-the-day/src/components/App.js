import React, { Fragment } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

/* functions */
  addFish = (fish) => {
    console.log(fish)
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  }

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes})
  }

  addToOrder = (key) => {
    /* 1. get order state */
    const order = { ...this.state.order };
    /* 2. add new fish to order state or update the number in order */
    order[key] = order[key] + 1 || 1 ;
    /* 3. set order state */
    this.setState({ order });
  }

/* render */
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Catch of the Day"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
          <Order
            fishes={this.state.fishes}
            order={this.state.order}
          />
          <Inventory
            addFish={this.addFish}
            loadSampleFishes={this.loadSampleFishes}
          />
      </div>
    )
  }
}

export default App;
