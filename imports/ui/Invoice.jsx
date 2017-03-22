import React, { Component, PropTypes } from 'react';
import Item from './Item.jsx'

// Invoice component
export default class Invoice extends Component {

  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    console.log("Items a crear:");
    console.log(this.props.inv.items);
    return this.props.inv.items.map((item) => {
      <tr>
        <td>{item.product}</td>
        <td>{item.quantity}</td>
        <td>{item.cost}</td>
      </tr>
    });
  }

  render() {
    return (
      <div className={this.props.inv.passes?"passes":"fails"}>
        <h4>{this.props.inv.createdAt.toDateString()}</h4>
        <table>
          <thead>
          <tr className="text-center">
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio registrado</th>
          </tr>
          </thead>
          <tbody>
          {
            this.renderItems();
          }
          </tbody>
        </table>
        {
          //TODO delete button
        }
      </div>
    );
  }
}

Invoice.propTypes = {
  inv: PropTypes.object.isRequired,
};
