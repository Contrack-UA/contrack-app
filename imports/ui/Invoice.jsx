import React, { Component, PropTypes } from 'react';

// Invoice component
export default class Invoice extends Component {

  constructor(props) {
    super(props);
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
            this.props.inv.items.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.product}</td>
                  <td>{item.quantity}</td>
                  <td>{item.cost}</td>
                </tr>
              )
            })
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
