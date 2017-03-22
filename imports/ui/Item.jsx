import React, { Component, PropTypes } from 'react';

// Item component
export default class Item extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("Creando:");
    console.log(this.props.item);
    return (
        <tr>
          <td>{this.props.item.product}</td>
          <td>{this.props.item.quantity}</td>
          <td>{this.props.item.cost}</td>
        </tr>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
