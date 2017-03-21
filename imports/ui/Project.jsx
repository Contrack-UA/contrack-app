import React, { Component, PropTypes } from 'react';

// Project component
export default class Project extends Component {
  render() {
    return (
      <div>
        <div class="col-md-3 portfolio-item">
            <a href="#">
                <img class="img-responsive" height="125" width="125" src="./images/fileBlue.png" alt=""/>
            </a>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  proj: PropTypes.object.isRequired,
};
