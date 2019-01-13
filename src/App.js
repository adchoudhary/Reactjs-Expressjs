import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { products: []};
  }

  componentDidMount() {
    fetch('http://localhost:3002/')
      .then(res => res.json())
      .then(products => this.setState({ products: products }));
  }

  render() {
    return (
      <div className="App">
        <div className="Users">
          <h1>Users</h1>
          {this.state.products.map(product =>
            <div key={product.id}>{product.name} - {product.rate}</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
