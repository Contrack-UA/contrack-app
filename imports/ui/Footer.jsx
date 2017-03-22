import React, {Component} from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render()
  {
    return(
      <div className="footer">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-1"></div>
          <div className="col-md-2"><h4>Pagina {this.props.page} de 259824</h4></div>
          <div className="col-md-1"></div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }

}
export default Footer;
