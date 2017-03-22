import React, { Component, PropTypes } from 'react';
import Item from './Item.jsx'

// Invoice component
export default class Invoice extends Component {

  renderItems() {
    return this.props.inv.items.map((item) => {
      <Item item={item}/>
    });
  }

  render() {
    return (
      <div>
        <h3>Factura de {this.props.inv.proyecto} del {this.props.inv.createdAt}</h3>
        <table>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio registrado</th>
          </tr>
          {this.renderItems()}
        </table>
      </div>
    );
  }
}

Invoice.propTypes = {
  inv: PropTypes.object.isRequired,
};
