import React, { Component, PropTypes } from 'react';

// Invoice component
export default class Invoice extends Component {
  render() {
    return (
      <div>
        <h3>By {this.props.inv.responsible}</h3>
        {
          this.props.inv.passes ? <p>Passes</p> : <p>Doesn't pass</p>
        }
      </div>
    );
  }
}

Invoice.propTypes = {
  inv: PropTypes.object.isRequired,
};
