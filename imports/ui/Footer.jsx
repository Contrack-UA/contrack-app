import React, {Component} from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render()
  {
    var anterior = (this.props.page ===1?1:this.props.page-1);
    var siguiente = (this.props.page ===259824?259824:this.props.page+1);
    return(
      <div className="footer">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-1"><button onClick={()=> {this.props.changePage(anterior)}}><</button></div>
          <div className="col-md-2"><h4>Pagina {this.props.page} de 259824</h4></div>
          <div className="col-md-1"><button onClick={()=> {this.props.changePage(siguiente)}}><</button></div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }

}
export default Footer;
