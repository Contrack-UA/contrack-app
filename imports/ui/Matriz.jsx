import React, {Component} from 'react';
import Project from './Project.jsx';

class Matriz extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render()
  {
    console.log(this.props.lista);
    return(
      <div>
        {
          this.props.lista.map((proy,i) => {
            console.log(proy);
            return (
                    <div className="col-md-3" key={i}>
                        <Project name="hola"/>
                    </div>
            );
          })
        }
      </div>
    )
  }

}
export default Matriz;
