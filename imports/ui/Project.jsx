import React, { Component, PropTypes } from 'react';

// Project component
export default class Project extends Component {
  render() {
    return (
      <div>
        <h3>Name</h3>
      </div>
    );
  }
}

Project.propTypes = {
  proj: PropTypes.object.isRequired,
};
